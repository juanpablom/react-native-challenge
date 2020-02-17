import DrinkConfig from './drinkConfig';
import IDrinks from '../../entities/drinks/Drinks';

export default class DrinkService {
  static fetchDrink(product: String): Promise<IDrinks> {
    return new Promise(async (resolve, reject) => {
      try {
        const endpoint = DrinkConfig.endpointDrink(product);
        const response: any = await DrinkConfig.APIConnector.get(endpoint);
        if (response) {
          resolve(response);
        } else reject();
      } catch (error) {
        reject(error);
      }
    });
  }
}
