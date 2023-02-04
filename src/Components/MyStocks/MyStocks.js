import {store} from '../../StateManagement/store.js';
import {useState} from 'react';
import {StockBundle} from './FeaturesMyStocks/StockBundle.js';



//This is the 'My Stocks' page.
//It displays all saved stocks in the app.
//This means the name and price of each stock are listed.
export function MyStocks (props) {

    return ( 
        <main className='mainMyStocks'>
            <h1 className='h1MyStocks'>My Stocks</h1>
            <StockBundle handleDeleteStock={props.handleDeleteStock} getAllStocksDBHandler={props.getAllStocksDBHandler} handleSaveStock={props.handleSaveStock}></StockBundle>
        </main>       
        )
}



