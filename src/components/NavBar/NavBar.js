import { NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = (props)=> {
    return (
        <div className="NavBar">
            <NavLink to='/' exact>HOME</NavLink>
            <NavLink to='/feed' exact>FEED</NavLink>
            
        </div>
    )
}

export default NavBar;