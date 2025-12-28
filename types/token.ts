export interface Token {
    id: string
    name: string
    symbol: string
    logo: string
    price: number
    priceChange24h: number
    volume24h: number
    marketCap: number
    liquidity: number
    holders: number
    age: string
    chain: 'SOL' | 'ETH' | 'BSC'
    category: 'new-pairs' | 'final-stretch' | 'migrated'
    verified: boolean
    trending: boolean
    createdAt: number
}

export interface TokenTableColumn {
    key: keyof Token | 'actions'
    label: string
    sortable: boolean
    width?: string
    align?: 'left' | 'center' | 'right'
}

export type SortDirection = 'asc' | 'desc' | null
export type SortField = keyof Token | null

export interface SortState {
    field: SortField
    direction: SortDirection
}

export interface FilterState {
    chain: string[]
    verified: boolean | null
    trending: boolean | null
    minMarketCap: number | null
    maxMarketCap: number | null
}

export interface WebSocketMessage {
    type: 'price_update' | 'new_token' | 'token_migrated'
    data: Partial<Token> & { id: string }
}
