import { NavLink } from 'react-router-dom'

const NavBar = (props)=> {
    return (
        <div class="NavBar">
            <NavLink to='/' exact>HOME</NavLink>
            <NavLink to='/feed' exact>FEED</NavLink>
            
        </div>
    )
}

export default NavBar;