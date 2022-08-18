import { MenuEntry } from 'cashcow-uikit'
import contracts from "../../config/constants/contracts";

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Trade DogeCorn on DogeShrek',
        href: `https://dogeshrek.com/#/swap/${contracts.cake[2000]}`,
      },
      {
        label: 'Trade DogeCorn on DogeSwap',
        href: `https://dogeswap.com/#/swap/${contracts.cake[2000]}`,
      }, 
      {
        label: 'Trade DogeCorn on BourbonDefi',
        href: `https://doge.bourbondefi.com/#/swap/${contracts.cake[2000]}`,
      },
    ],
  },

  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
    
    
  },
  {
    label: 'Doge Bridge',
    icon: 'TicketIcon',
    href: 'https://bridge.dogechain.dog/'
  },

 
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'DexScreener',
        href: 'https://dexscreener.com/dogechain/dogeshrek',
      },
    ],
  },
 
//
  // add later


  /*

  
  {
    label: 'NFT Staking',
    icon: 'TicketIcon',
    items: [
      {
        label: 'HappyCows',
        href: '/stakes/1',
      },
      {
        label: 'Genesis',
        href: '/stakes/2',
      }
    ]
  },


  // add later
 
  {
    label: 'My NFTs',
    // icon: 'NftIcon',
    icon: 'TicketIcon',
    href: '/myNFTs'
  },
  {
    label: 'NFT Market ( Coming Soon )',
    // icon: 'NftIcon',
    icon: 'TicketIcon',
    href: '/nft-market'
  },
*/  
]

export default config
