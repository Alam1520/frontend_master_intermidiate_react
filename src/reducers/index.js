import { combineReducers } from "redux";
import location from './location';
import animal from './animal';
import breed from './breed';
import theme from './theme';


// helper function from redux that handles all the reducers
export default combineReducers({
    location,
    theme,
    animal,
    breed,
});