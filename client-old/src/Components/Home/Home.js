import {useDispatch} from 'react-redux';
import {useState, useEffect} from 'react';
import {FetchedStock} from './FeaturesHome/FetchedStock.js';
import {QueryBar} from './FeaturesHome/QueryBar.js';


//This is the 'Home' page of the app.
//Users can retreive current stock prices by submitting a stock name.
//The fetched stock details (name and price) are then displayed and 
//users has an option to save the stock to the 'My Stocks' page.
export function Home(props){

  const dispatch= useDispatch();

  const [stock, setStock] = useState({name:'', price:''});
  const [toggle, setToggle] = useState('hidden');

  let updateStock=(name, price)=>{
    setStock({name: name, price: price});
  }

  useEffect(()=>{
  }, [stock, toggle]);
 
  return (
          <main className='homePage'>
              <h1 className='h1Home'>Home</h1>
              <QueryBar changeStockState={updateStock} changeToggleState={setToggle}></QueryBar>
              <FetchedStock stockName={stock.name} stockPrice={stock.price} toggle={toggle} changeStockState={updateStock} changeToggleState={setToggle} handleSaveStock={props.handleSaveStock}></FetchedStock>
          </main>
          )           
}