import {Button} from 'react-bootstrap';
import {fetchNasDaq} from '../../../FetchRequests/fetchNasDaq';



//When clicked, this button refetches for more current stock prices.
export function RefetchStockPriceButton(props){

    async function refetchStockPrice(){
        let newPrice = await fetchNasDaq(props.name);
        console.log(newPrice);
        await props.handleSaveStock(props.name, newPrice);
    }

    return <Button onClick={refetchStockPrice}>Refetch Stock Price</Button>
}