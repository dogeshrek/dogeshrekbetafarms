import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0, // Has zero aloc, we use this just to calculate USD price
    risk: 3,
    isTokenOnly: false,
    hide: true,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      2000: "0x8010D305B0220461eC538da7e12B0b4cbcc2AdFe"
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      2000: "0x765277EebeCA2e31912C9946eAe1021199B39C61"
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },

  {
    pid: 1,
    risk: 3,
    isTokenOnly: false,
    lpSymbol: 'dogecorn-Doge LP',
    lpAddresses: {
      2000: "0x647DD9e94ac9B09eF3E3bE18C92066cEAD90Cd5C",
    },
    tokenSymbol: 'dogecorn',
    tokenAddresses: {
      2000: "0x8df9B21945ebaa75424730F85eCFf426C35F5EF8",
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },

  
  {
    pid: 2, 
    risk: 3,
    isTokenOnly: false,
    lpSymbol: 'DogeShrek-Doge LP',
    lpAddresses: {
      2000: '0xD4f2E4107CC48296D25bc656bf9039fb3F406d79', // JellBeanCash-BNB LP
    },
    tokenSymbol: 'dogeshrek',
    tokenAddresses: {
      2000: '0x2BE0096B24343549E34224aa9aa297E99961023D', // JellBeanCash
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  

]

export default farms
