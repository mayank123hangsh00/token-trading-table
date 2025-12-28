import { Token } from '@/types/token'

const CHAIN_LOGOS = {
    SOL: 'https://cryptologos.cc/logos/solana-sol-logo.png',
    ETH: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
    BSC: 'https://cryptologos.cc/logos/bnb-bnb-logo.png',
}

const TOKEN_NAMES = [
    'PepeAI', 'DogeX', 'ShibaKing', 'FlokiMoon', 'SafeRocket',
    'BabyDoge', 'ElonCoin', 'MoonShot', 'RocketFuel', 'DiamondHands',
    'HODL', 'ToTheMoon', 'LamboToken', 'YieldFarm', 'DeFiKing',
    'MetaVerse', 'GameFi', 'NFTDao', 'Web3Token', 'CryptoGem'
]

function generateRandomToken(category: Token['category'], index: number): Token {
    const chains: Token['chain'][] = ['SOL', 'ETH', 'BSC']
    const chain = chains[Math.floor(Math.random() * chains.length)]
    const name = TOKEN_NAMES[index % TOKEN_NAMES.length]
    const symbol = name.substring(0, 4).toUpperCase()

    const basePrice = Math.random() * 10
    const priceChange = (Math.random() - 0.5) * 200
    const volume = Math.random() * 10000000
    const marketCap = Math.random() * 100000000
    const liquidity = Math.random() * 5000000
    const holders = Math.floor(Math.random() * 50000)

    const ageHours = Math.floor(Math.random() * 72)
    const age = ageHours < 1 ? `${Math.floor(Math.random() * 60)}m` : `${ageHours}h`

    return {
        id: `token-${category}-${index}`,
        name,
        symbol,
        logo: `https://api.dicebear.com/7.x/identicon/svg?seed=${name}`,
        price: basePrice,
        priceChange24h: priceChange,
        volume24h: volume,
        marketCap,
        liquidity,
        holders,
        age,
        chain,
        category,
        verified: Math.random() > 0.5,
        trending: Math.random() > 0.7,
        createdAt: Date.now() - ageHours * 3600000,
    }
}

export function generateMockTokens(): Token[] {
    const tokens: Token[] = []

    // Generate 20 new pairs
    for (let i = 0; i < 20; i++) {
        tokens.push(generateRandomToken('new-pairs', i))
    }

    // Generate 15 final stretch
    for (let i = 0; i < 15; i++) {
        tokens.push(generateRandomToken('final-stretch', i))
    }

    // Generate 10 migrated
    for (let i = 0; i < 10; i++) {
        tokens.push(generateRandomToken('migrated', i))
    }

    return tokens
}

export function simulatePriceUpdate(token: Token): Token {
    const priceChangePercent = (Math.random() - 0.5) * 5 // -2.5% to +2.5%
    const newPrice = token.price * (1 + priceChangePercent / 100)
    const newPriceChange24h = token.priceChange24h + priceChangePercent

    return {
        ...token,
        price: newPrice,
        priceChange24h: newPriceChange24h,
    }
}
