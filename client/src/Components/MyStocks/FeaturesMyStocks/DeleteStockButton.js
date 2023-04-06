import {Button} from 'react-bootstrap';
import {store} from '../../../StateManagement/store.js';
import {deleteStock} from '../../../StateManagement/stockSlice.js';
import {useDispatch} from 'react-redux';
import {deleteStockDB} from '../../../FetchRequests/deleteStockDB.js';



//When clicked, this button deletes the stock listed in the 'My Stocks' page.
export function DeleteStockButton(props){

  async function handleDeleteSavedStock(){
    await props.handleDeleteStock(props.name);
  }

  return (
          <>
          <Button type='button' onClick={handleDeleteSavedStock}>Delete Stock</Button>
          </>
  )
}


