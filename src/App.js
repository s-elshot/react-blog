import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';

import './App.css';
import React, {useState} from "react";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import BlogOverview from "./pages/BlogOverview";
import BlogPost from "./pages/BlogPost";
import Navigation from "./components/Navigation";
import PrivateRoute from "./components/PrivateRoute";

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

            <PrivateRoute path="/blogpost" signedIn={signedIn}>
                <BlogOverview/>
            </PrivateRoute>

            <PrivateRoute path='/blog/:idUrl' signedIn={signedIn}>
                <BlogPost/>
            </PrivateRoute>

        </Switch>
    </Router>
  );
}

export default App;
