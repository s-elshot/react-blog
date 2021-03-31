import {
    // Link,
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect, NavLink
} from 'react-router-dom';

// import React, { useState } from 'react';
import './App.css';
import React, {useState} from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import BlogOverview from "./pages/BlogOverview";
import BlogPost from "./pages/BlogPost";
// import Navigation from "./components/Navigation";
// import LoginButton from "./components/LogInButton";


// import LoginButton from "./components/LogInButton";



function App() {
  // We houden in de state bij of iemand is "ingelogd" (simpele versie)



    const [signedIn, toggleSignedIn] = useState(false);




  return (
    <Router>
        <nav>
            <div className="nav-container">
                <h2 className="navHeader">Blog Assignment</h2>

                <ul className="navBarUl">
                    <li className="navBarUl">
                        <NavLink to="/" exact activeClassName="active-link">Home page</NavLink>
                    </li>

                    {signedIn === false &&
                        <li className="navBarUl">
                            <NavLink to="/login" activeClassName="active-link">Login page
                            </NavLink>
                        </li>
                    }

                    { signedIn === true &&
                        <li className="navBarUl">
                            <NavLink to="/blogpost" activeClassName="active-link">Blog overview</NavLink>
                        </li>
                    }

                    {signedIn === true &&
                    <li className="navBarUl">
                        <button
                            onClick={() => toggleSignedIn(!signedIn)}
                        >
                            {signedIn ? 'Uitloggen' : 'Inloggen'}
                        </button>

                    </li>
                    }
                </ul>
            </div>
        </nav>

        <Switch>

            <Route exact path="/">
                <HomePage/>
            </Route>

            <Route exact path="/login">
                <LoginPage/>
                <button
                    onClick={() => toggleSignedIn(!signedIn)}
                >
                    {signedIn ? 'Uitloggen' : 'Inloggen'}
                </button>
            </Route>

            <Route path="/blogpost">
                {signedIn
                    ?<BlogOverview/>
                    : <Redirect to="/"/>

                }
            </Route>

            <Route path='/blog/:idUrl'>
                {signedIn
                    ?<BlogPost/>
                    : <Redirect to="/"/>
                }
            </Route>

        </Switch>
    </Router>
  );
}

export default App;
