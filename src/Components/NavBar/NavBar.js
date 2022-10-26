import {NavLink} from 'react-router-dom';

export function NavBar(){
    return (
            <nav className='navBar'>
                <div className='navTab'><NavLink to='/Home' className='navLink'>Home</NavLink></div>
                <div className='navTab'><NavLink to='/MyStocks' className='navLink'>My Stocks</NavLink></div>
            </nav>
            )
}
