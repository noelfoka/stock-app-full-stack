import {configureStore, combineReducers} from '@reduxjs/toolkit';
import {stockReducer} from './stockSlice.js';
import {persistStore, persistReducer} from 'redux-persist';
import storage from "redux-persist/lib/storage";
import thunk from 'redux-thunk';

//This store file uses Redux store object to manage global state.
//A library is imported to enable data to persist in local storage.

/* Store object
const initialState={
    savedStocks: [],
};*/

const rootReducer= combineReducers({
    stocks: stockReducer
});

const persistConfig={
    key: "root",
    storage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({reducer:persistedReducer,
                                    middleware: [thunk]});
export const persistor = persistStore(store);

const state=store.getState();

export const selectStocks = state => state.stocks.savedStocks;







