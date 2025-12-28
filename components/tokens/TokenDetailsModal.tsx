'use client'

import React from 'react'
import Image from 'next/image'
import { Token } from '@/types/token'
import { formatCurrency, formatNumber, formatPercentage, getPercentageColor } from '@/lib/utils'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { ExternalLink, Copy, Check } from 'lucide-react'

interface TokenDetailsModalProps {
    token: Token | null
    open: boolean
    onClose: () => void
}

export function TokenDetailsModal({ token, open, onClose }: TokenDetailsModalProps) {
    const [copied, setCopied] = React.useState(false)

    if (!token) return null

    const handleCopy = () => {
        navigator.clipboard.writeText(token.id)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
    }

    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="max-w-2xl">
                <DialogHeader>
                    <DialogTitle>Token Details</DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-center gap-4">
                        <Image
                            src={token.logo}
                            alt={token.name}
                            width={64}
                            height={64}
                            className="rounded-full"
                        />
                        <div className="flex-1">
                            <h2 className="text-2xl font-bold text-gray-100">{token.name}</h2>
                            <p className="text-gray-400">{token.symbol}</p>
                        </div>
                        <div className="text-right">
                            <p className="text-2xl font-bold text-gray-100">{formatCurrency(token.price, 6)}</p>
                            <p className={getPercentageColor(token.priceChange24h)}>
                                {formatPercentage(token.priceChange24h)}
                            </p>
                        </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700">
                            <p className="text-sm text-gray-400 mb-1">Market Cap</p>
                            <p className="text-lg font-semibold text-gray-100">{formatCurrency(token.marketCap)}</p>
                        </div>
                        <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700">
                            <p className="text-sm text-gray-400 mb-1">Volume 24h</p>
                            <p className="text-lg font-semibold text-gray-100">{formatCurrency(token.volume24h)}</p>
                        </div>
                        <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700">
                            <p className="text-sm text-gray-400 mb-1">Liquidity</p>
                            <p className="text-lg font-semibold text-gray-100">{formatCurrency(token.liquidity)}</p>
                        </div>
                        <div className="p-4 rounded-lg bg-gray-800/50 border border-gray-700">
                            <p className="text-sm text-gray-400 mb-1">Holders</p>
                            <p className="text-lg font-semibold text-gray-100">{formatNumber(token.holders, 0)}</p>
                        </div>
                    </div>

                    {/* Additional Info */}
                    <div className="space-y-3">
                        <div className="flex justify-between items-center p-3 rounded-lg bg-gray-800/30">
                            <span className="text-gray-400">Chain</span>
                            <span className="text-gray-100 font-medium">{token.chain}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 rounded-lg bg-gray-800/30">
                            <span className="text-gray-400">Age</span>
                            <span className="text-gray-100 font-medium">{token.age}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 rounded-lg bg-gray-800/30">
                            <span className="text-gray-400">Verified</span>
                            <span className="text-gray-100 font-medium">{token.verified ? 'Yes' : 'No'}</span>
                        </div>
                        <div className="flex justify-between items-center p-3 rounded-lg bg-gray-800/30">
                            <span className="text-gray-400">Contract Address</span>
                            <button
                                onClick={handleCopy}
                                className="flex items-center gap-2 text-blue-500 hover:text-blue-400 transition-colors"
                            >
                                <span className="font-mono text-sm">{token.id.substring(0, 16)}...</span>
                                {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                            </button>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                        <button className="flex-1 px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors flex items-center justify-center gap-2">
                            <ExternalLink className="w-4 h-4" />
                            View on Explorer
                        </button>
                        <button className="flex-1 px-4 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-semibold transition-colors">
                            Add to Watchlist
                        </button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
