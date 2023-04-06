import {SaveButton} from './SaveButton.js';



//This function component displays the fetched stock details with an 
//option to save it to the 'My Stocks' page. 
export function FetchedStock(props){

    return (<div className='fetchedStock' style={{visibility:props.toggle}}>
                <p>Name: {props.stockName}</p>
                <p>Price: {props.stockPrice}</p>
                <SaveButton name={props.stockName} price={props.stockPrice} updateStock={props.changeStockState} updateToggle={props.changeToggleState} handleSaveStock={props.handleSaveStock}></SaveButton>
            </div>
        )


}