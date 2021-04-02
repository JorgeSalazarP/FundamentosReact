import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { types } from '../../types/types';
import { AuthContext } from '../auth/LoginPage/AuthContext';

export const Header = () => {

    const { user: {name} , dispatch } = React.useContext(AuthContext);
    const history = useHistory();

    const handleClick = () =>{
        
        history.replace('/login');

        dispatch({
            type: types.logout
        });


    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/"
                    >
                        Adverts
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/advert/new"
                    >
                        New Adverts
                    </NavLink>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <div className="nav-item nav-link text-info">
                        <span>
                            { name }
                        </span>
                    </div>
                    <button 
                        className="nav-item nav-link btn"
                        onClick = {handleClick}
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}

export default Header;