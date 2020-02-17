import IDrinks, {IDrink} from './IDrinks';

export class Drink implements IDrink {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;

  constructor(idDrink: string, strDrink: string, strDrinkThumb: string) {
    this.idDrink = idDrink;
    this.strDrink = strDrink;
    this.strDrinkThumb = strDrinkThumb;
  }
}

export default class Drinks implements IDrinks {
  drinks: Drink[];

  constructor(drinks?: Drink[]) {
    this.drinks = drinks || [];
  }
}
