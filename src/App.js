import './App.css';
import {NavBar} from './Components/NavBar/NavBar.js';
import {Home} from './Components/Home/Home.js';
import {MyStocks} from './Components/MyStocks/MyStocks.js';
import {StarterPage} from './Components/StarterPage/StarterPage.js';
import {Route, Routes} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {selectStocks} from './StateManagement/store.js';
import {deleteStockDB} from './FetchRequests/deleteStockDB.js';
import {deleteStock, saveStock} from './StateManagement/stockSlice.js';
import {postStockDB} from './FetchRequests/postStockDB.js';
import {putStockDB} from './FetchRequests/putStockDB.js';
import {getStockDB} from './FetchRequests/getStockDB.js';
import {getAllStocksDB} from './FetchRequests/getAllStocksDB.js';



//This is the main level of the app which routes child components and
//provides event handlers for changing global state.
export function App() {
  
  const dispatch= useDispatch();

  //This function deletes the specified stock from both the 'My Stocks' page
  //as well as within the backend postgres database. 
  async function handleDeleteStock(name){
    await deleteStockDB(name);
    await dispatch(await deleteStock(name));
  }

  //This function saves the specified stock (name, price) to both the 
  //'My Stocks' page as well as within the backend postgres database. 
  async function handleSaveStock(name, price){
      await dispatch(await saveStock(name, price));
    if (name === await getStockDB(name)){
        await putStockDB(name, price);   
    }
    else{
        await postStockDB(name, price);   
    }  
}

  //This function gets all stock and their details (name and price) 
  //from the backend postgres database and saves it to global state.
  async function getAllStocksDBHandler(){

    let stocksDB= await getAllStocksDB();
     await stocksDB.map(async(item, i)=>{
      await dispatch(await saveStock(await item.ticker_symbol, item.price));
    })
  }
  
  return(
          <>
          <Routes>
            <Route path="/" element={<StarterPage/>}></Route>
            <Route path="/Home" element={<><NavBar/><Home handleSaveStock={handleSaveStock}/></>}></Route>
            <Route path="/MyStocks" element={<><NavBar/><MyStocks getAllStocksDBHandler={getAllStocksDBHandler} handleDeleteStock={handleDeleteStock} handleSaveStock={handleSaveStock}/></>}></Route>
          </Routes>
          </>
        )
}    

      


