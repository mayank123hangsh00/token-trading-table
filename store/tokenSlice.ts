import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Token, SortState, FilterState } from '@/types/token'

interface TokenState {
    tokens: Token[]
    filteredTokens: Token[]
    sort: SortState
    filter: FilterState
    selectedToken: Token | null
    isLoading: boolean
    error: string | null
}

const initialState: TokenState = {
    tokens: [],
    filteredTokens: [],
    sort: {
        field: null,
        direction: null,
    },
    filter: {
        chain: [],
        verified: null,
        trending: null,
        minMarketCap: null,
        maxMarketCap: null,
    },
    selectedToken: null,
    isLoading: false,
    error: null,
}

const tokenSlice = createSlice({
    name: 'tokens',
    initialState,
    reducers: {
        setTokens: (state, action: PayloadAction<Token[]>) => {
            state.tokens = action.payload
            state.filteredTokens = applyFiltersAndSort(action.payload, state.filter, state.sort)
        },
        updateToken: (state, action: PayloadAction<Partial<Token> & { id: string }>) => {
            const index = state.tokens.findIndex(t => t.id === action.payload.id)
            if (index !== -1) {
                state.tokens[index] = { ...state.tokens[index], ...action.payload }
                state.filteredTokens = applyFiltersAndSort(state.tokens, state.filter, state.sort)
            }
        },
        setSort: (state, action: PayloadAction<SortState>) => {
            state.sort = action.payload
            state.filteredTokens = applyFiltersAndSort(state.tokens, state.filter, action.payload)
        },
        setFilter: (state, action: PayloadAction<Partial<FilterState>>) => {
            state.filter = { ...state.filter, ...action.payload }
            state.filteredTokens = applyFiltersAndSort(state.tokens, state.filter, state.sort)
        },
        setSelectedToken: (state, action: PayloadAction<Token | null>) => {
            state.selectedToken = action.payload
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload
        },
    },
})

function applyFiltersAndSort(
    tokens: Token[],
    filter: FilterState,
    sort: SortState
): Token[] {
    let filtered = [...tokens]

    // Apply filters
    if (filter.chain.length > 0) {
        filtered = filtered.filter(t => filter.chain.includes(t.chain))
    }
    if (filter.verified !== null) {
        filtered = filtered.filter(t => t.verified === filter.verified)
    }
    if (filter.trending !== null) {
        filtered = filtered.filter(t => t.trending === filter.trending)
    }
    if (filter.minMarketCap !== null) {
        filtered = filtered.filter(t => t.marketCap >= filter.minMarketCap!)
    }
    if (filter.maxMarketCap !== null) {
        filtered = filtered.filter(t => t.marketCap <= filter.maxMarketCap!)
    }

    // Apply sorting
    if (sort.field && sort.direction) {
        filtered.sort((a, b) => {
            const aVal = a[sort.field!]
            const bVal = b[sort.field!]

            if (typeof aVal === 'number' && typeof bVal === 'number') {
                return sort.direction === 'asc' ? aVal - bVal : bVal - aVal
            }

            if (typeof aVal === 'string' && typeof bVal === 'string') {
                return sort.direction === 'asc'
                    ? aVal.localeCompare(bVal)
                    : bVal.localeCompare(aVal)
            }

            return 0
        })
    }

    return filtered
}

export const {
    setTokens,
    updateToken,
    setSort,
    setFilter,
    setSelectedToken,
    setLoading,
    setError,
} = tokenSlice.actions

export default tokenSlice.reducer
