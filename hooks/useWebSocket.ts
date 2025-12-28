import { useEffect, useRef } from 'react'
import { useAppDispatch, useAppSelector } from './useRedux'
import { updateToken } from '@/store/tokenSlice'
import { simulatePriceUpdate } from '@/lib/mock-data'
import { Token } from '@/types/token'

export function useWebSocket() {
    const dispatch = useAppDispatch()
    const tokens = useAppSelector(state => state.tokens.tokens)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        // Simulate WebSocket price updates every 2-5 seconds
        intervalRef.current = setInterval(() => {
            if (tokens.length > 0) {
                // Update 1-3 random tokens
                const numUpdates = Math.floor(Math.random() * 3) + 1
                const tokensToUpdate = [...tokens]
                    .sort(() => Math.random() - 0.5)
                    .slice(0, numUpdates)

                tokensToUpdate.forEach(token => {
                    const updated = simulatePriceUpdate(token)
                    dispatch(updateToken({
                        id: updated.id,
                        price: updated.price,
                        priceChange24h: updated.priceChange24h,
                    }))
                })
            }
        }, 2000 + Math.random() * 3000)

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }
    }, [tokens, dispatch])
}
