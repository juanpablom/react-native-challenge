import {createAction} from 'redux-actions';
import IDrinks from '../entities/drinks/IDrinks';

import {
  FETCH_DRINK_START,
  FETCH_DRINK_SUCCESS,
  FETCH_DRINK_ERROR,
  CLEAN_DRINK,
} from './types';

import DrinkService from '../provider/drink/drinkService';

export const fetchDrinkStart = createAction(FETCH_DRINK_START);
export const fetchDrinkSuccess = createAction(
  FETCH_DRINK_SUCCESS,
  (data: IDrinks) => data,
);
export const fetchDrinkError = createAction(
  FETCH_DRINK_ERROR,
  (error: any) => error,
);

export const cleanDrink = createAction(CLEAN_DRINK);

export function fetchDrink(search: String) {
  return async (dispatch: any, getState: any) => {
    try {
      const fetchIsLoading = getState().drink.fetchDrinkDataIsLoading;
      if (!fetchIsLoading) {
        dispatch(fetchDrinkStart());
        const response: IDrinks = await DrinkService.fetchDrink(search);
        dispatch(fetchDrinkSuccess(response));
      }
    } catch (err) {
      dispatch(fetchDrinkError(err));
    }
  };
}
