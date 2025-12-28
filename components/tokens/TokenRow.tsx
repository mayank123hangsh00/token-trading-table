'use client'

import React, { memo } from 'react'
import Image from 'next/image'
import { Token } from '@/types/token'
import { formatCurrency, formatNumber, formatPercentage, getPercentageColor, cn } from '@/lib/utils'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Info, TrendingUp, Shield, MoreVertical } from 'lucide-react'

interface TokenRowProps {
    token: Token
    onSelect: (token: Token) => void
}

export const TokenRow = memo(function TokenRow({ token, onSelect }: TokenRowProps) {
    const [priceColor, setPriceColor] = React.useState<string>('')
    const [imageError, setImageError] = React.useState(false)

    React.useEffect(() => {
        // Animate price changes with color transitions
        if (token.priceChange24h > 0) {
            setPriceColor('text-green-500')
        } else if (token.priceChange24h < 0) {
            setPriceColor('text-red-500')
        }

        const timeout = setTimeout(() => setPriceColor(''), 500)
        return () => clearTimeout(timeout)
    }, [token.price, token.priceChange24h])

    // Get color based on token name for fallback
    const getTokenColor = (name: string) => {
        const colors = ['bg-blue-600', 'bg-purple-600', 'bg-pink-600', 'bg-green-600', 'bg-yellow-600', 'bg-red-600']
        const index = name.charCodeAt(0) % colors.length
        return colors[index]
    }

    return (
        <div className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 p-4 rounded-lg bg-gray-900/30 hover:bg-gray-800/50 transition-all duration-200 border border-gray-800/50 hover:border-gray-700">
            {/* Token Info */}
            <div className="flex items-center gap-3 w-full sm:min-w-[200px]">
                <div className="relative flex-shrink-0">
                    {!imageError ? (
                        <Image
                            src={token.logo}
                            alt={token.name}
                            width={40}
                            height={40}
                            className="rounded-full"
                            unoptimized
                            onError={() => setImageError(true)}
                        />
                    ) : (
                        <div className={cn(
                            "w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-lg",
                            getTokenColor(token.name)
                        )}>
                            {token.symbol.charAt(0)}
                        </div>
                    )}
                    <TooltipProvider>
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <div className={cn(
                                    "absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold",
                                    token.chain === 'SOL' && 'bg-purple-500',
                                    token.chain === 'ETH' && 'bg-blue-500',
                                    token.chain === 'BSC' && 'bg-yellow-500'
                                )}>
                                    {token.chain}
                                </div>
                            </TooltipTrigger>
                            <TooltipContent>
                                {token.chain === 'SOL' && 'Solana'}
                                {token.chain === 'ETH' && 'Ethereum'}
                                {token.chain === 'BSC' && 'BNB Chain'}
                            </TooltipContent>
                        </Tooltip>
                    </TooltipProvider>
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-gray-100 truncate">{token.name}</h3>
                        {token.verified && (
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <Shield className="w-4 h-4 text-blue-500 flex-shrink-0" />
                                    </TooltipTrigger>
                                    <TooltipContent>Verified Token</TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        )}
                        {token.trending && (
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <TrendingUp className="w-4 h-4 text-orange-500 flex-shrink-0" />
                                    </TooltipTrigger>
                                    <TooltipContent>Trending</TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        )}
                    </div>
                    <p className="text-sm text-gray-400">{token.symbol}</p>
                </div>
            </div>

            {/* Stats Grid - Responsive */}
            <div className="grid grid-cols-2 sm:flex sm:flex-1 gap-3 sm:gap-4 w-full sm:w-auto">
                {/* Price */}
                <div className={cn(
                    "transition-colors duration-300",
                    priceColor
                )}>
                    <p className="text-xs text-gray-400 sm:hidden">Price</p>
                    <p className="font-mono font-semibold text-sm sm:text-base">{formatCurrency(token.price, 6)}</p>
                    <p className={cn(
                        "text-xs sm:text-sm font-medium",
                        getPercentageColor(token.priceChange24h)
                    )}>
                        {formatPercentage(token.priceChange24h)}
                    </p>
                </div>

                {/* Market Cap */}
                <div>
                    <p className="text-xs text-gray-400">Market Cap</p>
                    <p className="font-semibold text-gray-100 text-sm sm:text-base">{formatCurrency(token.marketCap)}</p>
                </div>

                {/* Volume */}
                <div>
                    <p className="text-xs text-gray-400">Volume 24h</p>
                    <p className="font-semibold text-gray-100 text-sm sm:text-base">{formatCurrency(token.volume24h)}</p>
                </div>

                {/* Liquidity */}
                <Popover>
                    <PopoverTrigger asChild>
                        <button className="text-left hover:bg-gray-800/50 p-2 rounded transition-colors">
                            <p className="text-xs text-gray-400 flex items-center gap-1">
                                Liquidity <Info className="w-3 h-3" />
                            </p>
                            <p className="font-semibold text-gray-100 text-sm sm:text-base">{formatCurrency(token.liquidity)}</p>
                        </button>
                    </PopoverTrigger>
                    <PopoverContent>
                        <div className="space-y-2">
                            <h4 className="font-semibold text-gray-100">Liquidity Details</h4>
                            <div className="space-y-1 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Total Liquidity:</span>
                                    <span className="text-gray-100 font-medium">{formatCurrency(token.liquidity)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Holders:</span>
                                    <span className="text-gray-100 font-medium">{formatNumber(token.holders, 0)}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-400">Age:</span>
                                    <span className="text-gray-100 font-medium">{token.age}</span>
                                </div>
                            </div>
                        </div>
                    </PopoverContent>
                </Popover>
            </div>

            {/* Actions */}
            <div className="absolute top-4 right-4 sm:relative sm:top-auto sm:right-auto sm:ml-auto">
                <button
                    onClick={() => onSelect(token)}
                    className="p-2 rounded-lg hover:bg-gray-700/50 transition-colors opacity-70 sm:opacity-0 group-hover:opacity-100"
                >
                    <MoreVertical className="w-5 h-5 text-gray-400" />
                </button>
            </div>
        </div>
    )
})
