import {store} from '../../store.js';
import {addStock} from './FeaturesHome/addStockSlice.js';
import {toggleButton} from './FeaturesHome/buttonSlice.js';
import {useDispatch} from 'react-redux';
import {fetchNasDaq} from './FeaturesHome/fetchNasDaq.js';
import {useState} from 'react';
import {saveStock} from './FeaturesHome/stockSlice.js';


export function Home(){

  const dispatch= useDispatch();

  //Local state variables - state is set via Redux store in code below. 
  const [stock, setStock] = useState();
  const [buttonToggle, setButtonToggle] = useState(false);

  //Function for setting state for buttonToggle.
  async function setToggle(toggle){
    await dispatch(await toggleButton(toggle));
    await setButtonToggle(await store.getState().button.toggle.toggle);
  }

  //Handles click of submit button.
  async function handleClick(event){
    const stockName=await document.getElementById('searchBar').value;
    await doFetch(stockName);
    document.getElementById('searchBar').value='';
  }

  //Sends in fetch request to Nasdaq stock pricing API.
  //Accounts for different responses from API.
  async function doFetch(stockName){
    
    const data = await fetchNasDaq(stockName);
    if (data == 0){
      window.alert('That stock name is not recognized. Trouble shooting tips: Ticker symbol must be spelled correctly and ' + 
        'must be in all caps.');
      setToggle(false);
      setStock('');
    }
    else if (data!==undefined){
    await dispatch(addStock(stockName, data));
    await setStock(JSON.stringify(await store.getState().addStock.stockInfo).slice(1,-1).replaceAll('"','').replace(',',' ').replaceAll(':', ': '));
    await setToggle(true);
   }
   else{
    setToggle(false);
    setStock('');
   }
  }

  //Creates 'Save Stock' button if user submits stock request and receives response from API.
  function renderButton(){
    if (buttonToggle===true){
      return <button type='button' onClick={handleSaveStock} className='homeButton2'>Save Stock</button>;
    }
    else{
      return <></>;
    }  
  }

  //Handles click of 'Save Stock' button. Saves to state object stored in Redux store.
  //Function compares stock name with already saved stocks. Makes sure duplicates are not added.
  async function handleSaveStock(){
    let count=0;
    let length=await store.getState().stocks.savedStocks.length;
      for (let i=0; i<length; i++){
          if (await store.getState().stocks.savedStocks[i].name==await store.getState().addStock.stockInfo.Name){
            count+=1;
            if (count>=1){
              window.alert('Stock is already saved.');
              i=length;
              setToggle(false);
              setStock('');
            }
          } 
      }
      if (count==0){
        await dispatch(await saveStock(await store.getState().addStock.stockInfo.Name, await store.getState().addStock.stockInfo.Price));
        window.alert('Stock is saved in the My Stocks tab.');
        setToggle(false);
        setStock('');
      }
  }
       
  return (
          <main className='mainHome'>
              <h1 className='h1Home'>Home</h1>
              <div>
                  <form className='searchBar'> 
                    <input type='search' className='query' id='searchBar' placeholder='Get stock price by entering ticker symbol...' autocomplete="off"></input>
                    <button type= 'button' className='homeButton1' onClick={handleClick}>Submit</button>
                  </form>
              </div>
              <div>
              {stock}
              {renderButton()}
              </div>
          </main>
          )           
}