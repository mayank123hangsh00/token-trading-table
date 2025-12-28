'use client'

import React, { useState, useMemo } from 'react'
import { Token, SortField, SortDirection } from '@/types/token'
import { TokenRow } from './TokenRow'
import { TableHeader } from './TableHeader'
import { TokenDetailsModal } from './TokenDetailsModal'
import { TableSkeleton } from '@/components/ui/skeleton'
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux'
import { setSort } from '@/store/tokenSlice'

interface TokenTableProps {
    category: Token['category']
    title: string
}

export function TokenTable({ category, title }: TokenTableProps) {
    const dispatch = useAppDispatch()
    const { filteredTokens, sort, isLoading } = useAppSelector(state => state.tokens)
    const [selectedToken, setSelectedToken] = useState<Token | null>(null)

    const categoryTokens = useMemo(() => {
        return filteredTokens.filter(token => token.category === category)
    }, [filteredTokens, category])

    const handleSort = (field: SortField) => {
        let newDirection: SortDirection = 'desc'

        if (sort.field === field) {
            if (sort.direction === 'desc') {
                newDirection = 'asc'
            } else if (sort.direction === 'asc') {
                newDirection = null
            }
        }

        dispatch(setSort({
            field: newDirection ? field : null,
            direction: newDirection,
        }))
    }

    if (isLoading) {
        return (
            <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-100">{title}</h2>
                <TableSkeleton rows={5} />
            </div>
        )
    }

    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-100">{title}</h2>
                <span className="text-sm text-gray-400">
                    {categoryTokens.length} {categoryTokens.length === 1 ? 'token' : 'tokens'}
                </span>
            </div>

            {/* Table Headers */}
            <div className="flex items-center gap-4 px-4 bg-gray-900/50 rounded-lg border border-gray-800">
                <div className="min-w-[200px]">
                    <TableHeader
                        label="Token"
                        sortable
                        active={sort.field === 'name'}
                        direction={sort.direction}
                        onSort={() => handleSort('name')}
                    />
                </div>
                <div className="min-w-[120px]">
                    <TableHeader
                        label="Price"
                        sortable
                        active={sort.field === 'price'}
                        direction={sort.direction}
                        onSort={() => handleSort('price')}
                    />
                </div>
                <div className="min-w-[120px]">
                    <TableHeader
                        label="Market Cap"
                        sortable
                        active={sort.field === 'marketCap'}
                        direction={sort.direction}
                        onSort={() => handleSort('marketCap')}
                    />
                </div>
                <div className="min-w-[120px]">
                    <TableHeader
                        label="Volume"
                        sortable
                        active={sort.field === 'volume24h'}
                        direction={sort.direction}
                        onSort={() => handleSort('volume24h')}
                    />
                </div>
                <div className="min-w-[120px]">
                    <TableHeader
                        label="Liquidity"
                        sortable
                        active={sort.field === 'liquidity'}
                        direction={sort.direction}
                        onSort={() => handleSort('liquidity')}
                    />
                </div>
                <div className="ml-auto w-12"></div>
            </div>

            {/* Table Body */}
            <div className="space-y-2">
                {categoryTokens.length === 0 ? (
                    <div className="text-center py-12 text-gray-400">
                        No tokens found in this category
                    </div>
                ) : (
                    categoryTokens.map(token => (
                        <TokenRow
                            key={token.id}
                            token={token}
                            onSelect={setSelectedToken}
                        />
                    ))
                )}
            </div>

            {/* Token Details Modal */}
            <TokenDetailsModal
                token={selectedToken}
                open={!!selectedToken}
                onClose={() => setSelectedToken(null)}
            />
        </div>
    )
}
