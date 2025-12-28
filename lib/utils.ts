import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function formatNumber(num: number, decimals: number = 2): string {
    if (num >= 1e9) {
        return `${(num / 1e9).toFixed(decimals)}B`
    }
    if (num >= 1e6) {
        return `${(num / 1e6).toFixed(decimals)}M`
    }
    if (num >= 1e3) {
        return `${(num / 1e3).toFixed(decimals)}K`
    }
    return num.toFixed(decimals)
}

export function formatCurrency(num: number, decimals: number = 2): string {
    return `$${formatNumber(num, decimals)}`
}

export function formatPercentage(num: number, decimals: number = 2): string {
    const sign = num >= 0 ? '+' : ''
    return `${sign}${num.toFixed(decimals)}%`
}

export function getPercentageColor(percentage: number): string {
    if (percentage > 0) return 'text-green-500'
    if (percentage < 0) return 'text-red-500'
    return 'text-gray-400'
}

export function getPercentageBackgroundColor(percentage: number): string {
    if (percentage > 0) return 'bg-green-500/10'
    if (percentage < 0) return 'bg-red-500/10'
    return 'bg-gray-500/10'
}
