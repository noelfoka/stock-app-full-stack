import {Home} from '../Home/Home';
import {NavLink} from 'react-router-dom';



//This page is the first page of the app.
export function StarterPage() {
    return(
            <main className='mainStarterPage'> 
                <div className='starter'>
                    <NavLink to='./Home' className='starterPageButton'>
                        $TOCK APP
                    </NavLink>  
                </div>          
            </main>
        )
                
}