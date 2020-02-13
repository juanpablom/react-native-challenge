import DrinkConfig from './drinkConfig';

export default class DrinkService {
  static fetchDrink(product: String) {
    return new Promise(async (resolve, reject) => {
      try {
        const endpoint = DrinkConfig.endpointDrink(product);
        const response: any = await DrinkConfig.APIConnector.get(endpoint);
        if (response.__ok) {
          delete response.__ok;
          resolve(response);
        } else reject();
      } catch (error) {
        reject(error);
      }
    });
  }
}
