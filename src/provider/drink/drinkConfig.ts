import {APIConnector} from '..';
import config from '../../config';

const apiConnector = new APIConnector({timeout: 50000});

export default class DrinkConfig {
  static get endpoint(): string {
    return `${config.API_URL}`;
  }

  static endpointDrink(product: String): string {
    return `${DrinkConfig.endpoint}/search.php?s=${product}`;
  }

  static get APIConnector(): APIConnector {
    return apiConnector;
  }
}
