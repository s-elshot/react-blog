import { NavLink } from 'react-router-dom';
import React from "react";

function Navigation(props) {

    return (
        <nav>
            <div className="nav-container">
                <h2 className="navHeader">Blog Assignment</h2>

                <ul className="navBarUl">
                    <li className="navBarUl">
                        <NavLink to="/" exact activeClassName="active-link">Home page</NavLink>
                    </li>

                    {props.signedIn === false &&
                    <li className="navBarUl">
                        <NavLink to="/login" activeClassName="active-link">Login page
                        </NavLink>
                    </li>
                    }

                    { props.signedIn === true &&
                    <li className="navBarUl">
                        <NavLink to="/blogpost" activeClassName="active-link">Blog overview</NavLink>
                    </li>
                    }

                    {props.signedIn === true &&
                    <li className="navBarUl">
                        <button
                            type="login"
                            onClick={() => props.toggleSignedIn(!props.signedIn)}
                        >
                            {props.signedIn ? 'Uitloggen' : 'Inloggen'}
                        </button>
                    </li>
                    }
                </ul>
            </div>
        </nav>
    );
}
export default Navigation;