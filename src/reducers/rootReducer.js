import { combineReducers } from "redux";
import  ExampleReducer from './exampleReducer';
import ZSUReducer from './zsuReducer';

export default combineReducers({
    ExampleReducer,
    ZSUReducer,
})