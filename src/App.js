import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';

// import React, { useState } from 'react';
import './App.css';
import React, {useState} from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import BlogOverview from "./pages/BlogOverview";
import BlogPost from "./pages/BlogPost";
import Navigation from "./components/Navigation";


function App() {

    const [signedIn, toggleSignedIn] = useState(false);


  return (
    <Router>
        <nav>
            <Navigation
                signedIn ={signedIn}
                toggleSignedIn ={toggleSignedIn}
                />
        </nav>


        <Switch>

            <Route exact path="/">
                <HomePage/>
            </Route>

            <Route exact path="/login">
                <LoginPage
                    signedIn ={signedIn}
                    toggleSignedIn ={toggleSignedIn}
                />
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
