import {store} from '../../store.js';
import {useState} from 'react';

export function MyStocks () {

    const [list, setList]=useState(store.getState().stocks.savedStocks);

    //Returns jsx of saved stocks.
    function stockArray(){
        return list.map((data, i)=>{return (
        <p key={i} className='stockList'>{i+1}.&nbsp;Name:&nbsp; {data.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Price:&nbsp;{data.price}</p>
        )});
    }  

    return ( 
            <main className='mainMyStocks'>
                <h1 className='h1MyStocks'>My Stocks</h1>
                <div>     
                {stockArray()}
                </div>
            </main>
        )
}