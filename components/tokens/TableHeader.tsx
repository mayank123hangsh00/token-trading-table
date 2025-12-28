'use client'

import React from 'react'
import { ArrowUpDown, ArrowUp, ArrowDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SortDirection } from '@/types/token'

interface TableHeaderProps {
    label: string
    sortable?: boolean
    active?: boolean
    direction?: SortDirection
    onSort?: () => void
    align?: 'left' | 'center' | 'right'
    className?: string
}

export function TableHeader({
    label,
    sortable = false,
    active = false,
    direction = null,
    onSort,
    align = 'left',
    className
}: TableHeaderProps) {
    return (
        <div
            className={cn(
                'flex items-center gap-2 px-4 py-3 text-sm font-semibold text-gray-400 uppercase tracking-wider',
                align === 'right' && 'justify-end',
                align === 'center' && 'justify-center',
                sortable && 'cursor-pointer hover:text-gray-200 transition-colors select-none',
                className
            )}
            onClick={sortable ? onSort : undefined}
        >
            <span>{label}</span>
            {sortable && (
                <div className="relative w-4 h-4">
                    {!active && <ArrowUpDown className="w-4 h-4 opacity-50" />}
                    {active && direction === 'asc' && <ArrowUp className="w-4 h-4 text-blue-500" />}
                    {active && direction === 'desc' && <ArrowDown className="w-4 h-4 text-blue-500" />}
                </div>
            )}
        </div>
    )
}
