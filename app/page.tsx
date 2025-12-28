'use client'

import { useEffect } from 'react'
import { TokenTable } from '@/components/tokens/TokenTable'
import { TokenFilters } from '@/components/tokens/TokenFilters'
import { useAppDispatch } from '@/hooks/useRedux'
import { setTokens, setLoading } from '@/store/tokenSlice'
import { generateMockTokens } from '@/lib/mock-data'
import { useWebSocket } from '@/hooks/useWebSocket'
import { Zap } from 'lucide-react'

export default function Home() {
  const dispatch = useAppDispatch()

  // Initialize tokens
  useEffect(() => {
    dispatch(setLoading(true))

    // Simulate API call
    setTimeout(() => {
      const tokens = generateMockTokens()
      dispatch(setTokens(tokens))
      dispatch(setLoading(false))
    }, 1000)
  }, [dispatch])

  // Enable WebSocket simulation
  useWebSocket()

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-950 to-black">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-gray-800 bg-black/80 backdrop-blur-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Token Discovery
                </h1>
                <p className="text-sm text-gray-400">Real-time token tracking</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-500/10 border border-green-500/20">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span className="text-sm text-green-400 font-medium">Live</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="mb-8">
          <TokenFilters />
        </div>

        {/* Token Tables */}
        <div className="space-y-12">
          <TokenTable category="new-pairs" title="New Pairs" />
          <TokenTable category="final-stretch" title="Final Stretch" />
          <TokenTable category="migrated" title="Migrated" />
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 border-t border-gray-800 bg-gray-950/50">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400">
              © 2024 Token Trading Table. Built with Next.js 14 & TypeScript.
            </p>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-gray-200 transition-colors">Documentation</a>
              <a href="#" className="hover:text-gray-200 transition-colors">API</a>
              <a href="#" className="hover:text-gray-200 transition-colors">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
