import {fetchNasDaq} from '../../../FetchRequests/fetchNasDaq.js';



//This function component enables a user to input and submit a stock name to 
//fetch its current price.
export function QueryBar(props){

    //Handles form submission by making fetch GET request for stock price.
     async function handleSubmit(e){
        e.preventDefault();
        const stockName= document.getElementById('query').value;
        document.getElementById('query').value='';  
    
        let stockPrice = await fetchNasDaq(stockName);
        if (stockPrice == 0){
            window.alert('That stock name is not recognized. Trouble shooting tips: Ticker symbol must be spelled correctly and ' + 
            'must be in all caps.');
        } 
        if (stockPrice!=undefined && stockPrice!=0){
            props.changeStockState(stockName, stockPrice)
            props.changeToggleState('visible');
        }
    }

    return (<div className='queryBar'>
                <form onSubmit={handleSubmit}> 
                    <input type='text' className='query' id='query' placeholder='Get stock price by entering ticker symbol...' autoComplete="off" required></input>
                    <button type= 'submit' className='homeSubmitButton'>Submit</button>
                </form>
            </div>
         )
}