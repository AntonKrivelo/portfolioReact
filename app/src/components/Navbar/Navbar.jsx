import { NavLink } from 'react-router-dom';
import BtnDarkMode from '../../btnDarkMode/btnDarkMode';

const Navbar = () => {

    const activeLink = 'nav-list__link nav-list__link--active';
    const nonActiveLink = 'nav-list__link';

    return (
        <nav className="nav">
        <div className="container">
            <div className="nav-row">
                <a href="./index.html" className="logo">Portfolio</a>
                  
                    <BtnDarkMode />
                    
                <ul className="nav-list">
                
                    <NavLink to='/home' className={({isActive}) => {
                        return isActive ? activeLink : nonActiveLink;
                    }}>
                        <li className="nav-list__item">Home</li>
                    </NavLink>       
                    <NavLink to='/projects' className={({isActive}) => {
                        return isActive ? activeLink : nonActiveLink;
                    }}>
                        <li className="nav-list__item">Projects</li>
                    </NavLink>  
                    <NavLink to='/contacts' className={({isActive}) => {
                        return isActive ? activeLink : nonActiveLink;
                    }}>
                        <li className="nav-list__item">Contacts</li>
                    </NavLink>
                    
                </ul>
            </div>
        </div>
    </nav>
    )
}


export default Navbar;