import {combineReducers} from 'redux';
import drink, {DrinkInitialState} from './drinks/drink';

interface State {
  drink: DrinkInitialState;
}

const State = combineReducers({
  drink,
});

export default State;
