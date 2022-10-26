import './App.css';
import {NavBar} from './Components/NavBar/NavBar.js';
import {Home} from './Components/Home/Home.js';
import {MyStocks} from './Components/MyStocks/MyStocks.js';
import {StarterPage} from './Components/StarterPage/StarterPage.js';
import {Route, Routes} from 'react-router-dom';
import {store} from './store.js';


export function App() {
  return(
          <>
          <Routes>
            <Route path="/" element={<StarterPage/>}></Route>
            <Route path="/Home" element={<><NavBar/><Home/></>}></Route>
            <Route path="/MyStocks" element={<><NavBar/><MyStocks/></>}></Route>
          </Routes>
          </>
      
        )
}    

      


