import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import Account from '../Account';
import Admin from '../Admin';
import Home from '../Home';
import Landing from '../Landing';
import SignIn from '../SignIn';
import PasswordForget from '../PasswordForget';
import SignUp from '../SignUp';
import Navigation from '../Navigation';

const App = () =>{
    return(
        <div>
            <Router>
            <Navigation />
            <hr />
            <Route exact path ={ROUTES.LANDING} component = {Landing}></Route>
            <Route exact path ={ROUTES.ACCOUNT} component = {Account}></Route>
            <Route exact path ={ROUTES.ADMIN} component = {Admin}></Route>
            <Route exact path ={ROUTES.HOME} component = {Home}></Route>
            <Route exact path ={ROUTES.SIGN_IN} component = {SignIn}></Route>
            <Route exact path ={ROUTES.SIGN_UP} component = {SignUp}></Route>
            <Route exact path ={ROUTES.PASSWORD_FORGET} component = {PasswordForget}></Route>
            </Router>
        </div>
    )
}

export default App;