'use client'

import React from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { setFilter } from '@/store/tokenSlice'
import { cn } from '@/lib/utils'
import { Filter, X } from 'lucide-react'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'

export function TokenFilters() {
    const dispatch = useAppDispatch()
    const filter = useAppSelector(state => state.tokens.filter)

    const chains = ['SOL', 'ETH', 'BSC']

    const toggleChain = (chain: string) => {
        const newChains = filter.chain.includes(chain)
            ? filter.chain.filter(c => c !== chain)
            : [...filter.chain, chain]
        dispatch(setFilter({ chain: newChains }))
    }

    const toggleVerified = () => {
        dispatch(setFilter({
            verified: filter.verified === true ? null : true
        }))
    }

    const toggleTrending = () => {
        dispatch(setFilter({
            trending: filter.trending === true ? null : true
        }))
    }

    const clearFilters = () => {
        dispatch(setFilter({
            chain: [],
            verified: null,
            trending: null,
            minMarketCap: null,
            maxMarketCap: null,
        }))
    }

    const hasActiveFilters = filter.chain.length > 0 || filter.verified !== null || filter.trending !== null

    return (
        <div className="flex items-center gap-3 flex-wrap">
            <Popover>
                <PopoverTrigger asChild>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-100 transition-colors border border-gray-700">
                        <Filter className="w-4 h-4" />
                        Filters
                        {hasActiveFilters && (
                            <span className="ml-1 px-2 py-0.5 rounded-full bg-blue-600 text-xs font-semibold">
                                {filter.chain.length + (filter.verified ? 1 : 0) + (filter.trending ? 1 : 0)}
                            </span>
                        )}
                    </button>
                </PopoverTrigger>
                <PopoverContent align="start" className="w-80">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <h3 className="font-semibold text-gray-100">Filters</h3>
                            {hasActiveFilters && (
                                <button
                                    onClick={clearFilters}
                                    className="text-sm text-blue-500 hover:text-blue-400 transition-colors"
                                >
                                    Clear all
                                </button>
                            )}
                        </div>

                        {/* Chain Filter */}
                        <div>
                            <label className="text-sm font-medium text-gray-300 mb-2 block">Chain</label>
                            <div className="flex gap-2">
                                {chains.map(chain => (
                                    <button
                                        key={chain}
                                        onClick={() => toggleChain(chain)}
                                        className={cn(
                                            'px-3 py-1.5 rounded-lg text-sm font-medium transition-colors border',
                                            filter.chain.includes(chain)
                                                ? 'bg-blue-600 border-blue-500 text-white'
                                                : 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700'
                                        )}
                                    >
                                        {chain}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Status Filters */}
                        <div>
                            <label className="text-sm font-medium text-gray-300 mb-2 block">Status</label>
                            <div className="space-y-2">
                                <button
                                    onClick={toggleVerified}
                                    className={cn(
                                        'w-full px-3 py-2 rounded-lg text-sm font-medium transition-colors border text-left',
                                        filter.verified
                                            ? 'bg-blue-600 border-blue-500 text-white'
                                            : 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700'
                                    )}
                                >
                                    Verified Only
                                </button>
                                <button
                                    onClick={toggleTrending}
                                    className={cn(
                                        'w-full px-3 py-2 rounded-lg text-sm font-medium transition-colors border text-left',
                                        filter.trending
                                            ? 'bg-blue-600 border-blue-500 text-white'
                                            : 'bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700'
                                    )}
                                >
                                    Trending Only
                                </button>
                            </div>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>

            {/* Active Filter Pills */}
            {filter.chain.map(chain => (
                <div
                    key={chain}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-600/20 border border-blue-500/50 text-blue-400 text-sm"
                >
                    <span>{chain}</span>
                    <button
                        onClick={() => toggleChain(chain)}
                        className="hover:text-blue-300 transition-colors"
                    >
                        <X className="w-3 h-3" />
                    </button>
                </div>
            ))}
            {filter.verified && (
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-600/20 border border-blue-500/50 text-blue-400 text-sm">
                    <span>Verified</span>
                    <button
                        onClick={toggleVerified}
                        className="hover:text-blue-300 transition-colors"
                    >
                        <X className="w-3 h-3" />
                    </button>
                </div>
            )}
            {filter.trending && (
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-600/20 border border-blue-500/50 text-blue-400 text-sm">
                    <span>Trending</span>
                    <button
                        onClick={toggleTrending}
                        className="hover:text-blue-300 transition-colors"
                    >
                        <X className="w-3 h-3" />
                    </button>
                </div>
            )}
        </div>
    )
}
