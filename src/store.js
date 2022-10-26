import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {buttonReducer} from './Components/Home/FeaturesHome/buttonSlice.js';
import {addStockReducer} from './Components/Home/FeaturesHome/addStockSlice.js';
import {stockReducer} from './Components/Home/FeaturesHome/stockSlice.js';


/* Store object
const initialState={
    stockInfo:{Name: '',
                Price: ''},
    toggle: false,
    savedStocks: [],
};*/

const rootReducer= combineReducers({
    addStock: addStockReducer,
    button: buttonReducer,
    stocks: stockReducer,
});

export const store = configureStore({reducer:rootReducer});







