import { Register } from '~app-toolkit/decorators';
import { AbstractApp } from '~app/app.dynamic-module';
import { UniswapV2AppModule } from '~apps/uniswap-v2';

import BANANO_DEFINITION, { BananoAppDefinition } from './banano.definition';
import { BinanceSmartChainBananoBalanceFetcher } from './binance-smart-chain/banano.balance-fetcher';
import { BinanceSmartChainBananoFarmContractPositionFetcher } from './binance-smart-chain/banano.farm.contract-position-fetcher';
import { BananoContractFactory } from './contracts';
import { EthereumBananoBalanceFetcher } from './ethereum/banano.balance-fetcher';
import { EthereumBananoFarmContractPositionFetcher } from './ethereum/banano.farm.contract-position-fetcher';
import { FantomBananoBalanceFetcher } from './fantom/banano.balance-fetcher';
import { FantomBananoFarmContractPositionFetcher } from './fantom/banano.farm.contract-position-fetcher';
import { BananoFarmBalanceFetcherHelper } from './helpers/banano.farm.balance-fetcher-helper';
import { BananoFarmContractPositionFetcherHelper } from './helpers/banano.farm.contract-position-fetcher-helper';
import { PolygonBananoBalanceFetcher } from './polygon/banano.balance-fetcher';
import { PolygonBananoFarmContractPositionFetcher } from './polygon/banano.farm.contract-position-fetcher';

@Register.AppModule({
  appId: BANANO_DEFINITION.id,
  imports: [UniswapV2AppModule],
  providers: [
    BananoAppDefinition,
    BananoContractFactory,
    BananoFarmContractPositionFetcherHelper,
    BananoFarmBalanceFetcherHelper,
    // BSC
    BinanceSmartChainBananoBalanceFetcher,
    BinanceSmartChainBananoFarmContractPositionFetcher,
    // Polygon
    PolygonBananoBalanceFetcher,
    PolygonBananoFarmContractPositionFetcher,
    // Fantom
    FantomBananoBalanceFetcher,
    FantomBananoFarmContractPositionFetcher,
    // Ethereum
    EthereumBananoBalanceFetcher,
    EthereumBananoFarmContractPositionFetcher,
  ],
})
export class BananoAppModule extends AbstractApp() {}
