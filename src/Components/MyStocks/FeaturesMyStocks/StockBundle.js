import {useState, useEffect} from 'react';
import {DeleteStockButton} from './DeleteStockButton.js';
import {useSelector} from 'react-redux';
import {RefetchStockPriceButton} from './RefetchStockPriceButton.js';
import {selectStocks} from '../../../StateManagement/store.js';
import {store} from '../../../StateManagement/store.js';



//This function component returns the entire array of saved stocks as a 'stock bundle.'
//The 'stock bundle' is then rendered in the 'My Stocks' page.
export function StockBundle(props){

    let stocksState=useSelector(selectStocks);
   
    const [list, setList]=useState(stocksState);
    const [stockBundle, setStockBundle]=useState(stockArray());

    useEffect( () => {
        setList(stocksState);
    }, [stocksState]);

    useEffect( () => {
        setStockBundle(stockArray());
    }, [list]);

    useEffect( () => {
        console.log(stocksState);
        let count=store.getState().stocks.savedStocks.length;
        if(count===0){
            count++;
            props.getAllStocksDBHandler();     
        }
    });

    function stockArray(){
        return list.map((data, i)=>{
            return(
                <div className='stockBundle'>  
                    <p key={i}>{i+1}.&nbsp;Name:&nbsp; {data.name}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Price:&nbsp;{data.price}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    <div className='deleteStockButton'>
                        <DeleteStockButton  key={data.name} name={data.name} handleDeleteStock={props.handleDeleteStock}></DeleteStockButton>
                    </div>
                    <div className='refetchStockPriceButton'>
                        <RefetchStockPriceButton key={data.price}name={data.name} price={data.price} handleSaveStock={props.handleSaveStock}></RefetchStockPriceButton>
                    </div>
                </div>
            )
        });
    } 


    return ( 
            <>
                {stockBundle}
            </> 
            )
}