import {handleActions} from 'redux-actions';
import {
  fetchDrinkStart,
  fetchDrinkSuccess,
  fetchDrinkError,
} from '../../actions/drink';

export interface DrinkInitialState {
  drinkData: object;
  fetchDrinkIsLoading: boolean;
  fetchDrinkError: string;
}

const DrinkInitialState = {
  drinkData: null,
  fetchDrinkIsLoading: false,
  fetchDrinkError: null,
};

export default handleActions(
  {
    [fetchDrinkStart as any]: state => ({
      ...state,
      fetchDrinkIsLoading: true,
      fetchDrinkError: null,
    }),
    [fetchDrinkSuccess as any]: (state, action: any) => ({
      ...state,
      drinkData: action.payload,
      fetchDrinkIsLoading: false,
    }),
    [fetchDrinkError as any]: (state, action: any) => ({
      ...state,
      fetchDrinkError: action.error,
      fetchDrinkIsLoading: false,
    }),
  },
  DrinkInitialState,
);
