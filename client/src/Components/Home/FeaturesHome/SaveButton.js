import {Button} from 'react-bootstrap';
import {saveStock} from '../../../StateManagement/stockSlice.js';
import {postStockDB} from '../../../FetchRequests/postStockDB.js';
import {useDispatch} from 'react-redux';
import { store } from '../../../StateManagement/store.js';
import {getStockDB} from '../../../FetchRequests/getStockDB.js';
import {putStockDB} from '../../../FetchRequests/putStockDB.js';



//When clicked, this button saves the stock to the 'My Stocks' page. 
export function SaveButton(props){

    async function handleSaveStockButton(){
      await props.handleSaveStock(props.name, props.price);
      props.updateStock('', '');
      props.updateToggle('hidden');
    }

    return(
          <>
            <Button type='button' className='homeSaveButton' onClick={handleSaveStockButton} >Save Stock</Button>   
          </>
         )

}