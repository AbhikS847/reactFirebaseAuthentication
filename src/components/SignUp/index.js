import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {FirebaseContext} from '../Firebase';
import {withFirebase} from '../Firebase';

import * as ROUTES from '../../constants/routes';

const SignUp = () =>{
    return(
        <div>
            <h1 className="text-center">Sign up</h1>
            <FirebaseContext.Consumer >
                {firebase => <SignUp firebase={firebase} />}
            </FirebaseContext.Consumer>
            <SignUpForm />
        </div>
    )
}

const INITIAL_STATE = {
    userName:'',
    email:'',
    passwordOne:'',
    passwordTwo:'',
    error:null
};

class SignUpForm extends React.Component{

    constructor(props){
        super(props);
        this.state = {...INITIAL_STATE};
    }

    onSubmit = (event) => {
        const {username, email, passwordOne} = this.state;
        this.props.firebase
        .doCreateUserWithEmailAndPassword(email,passwordOne)
        .then(authUser => {
            this.setState({...INITIAL_STATE});
            this.props.history.push(ROUTES.HOME);
        })
        .catch(error=>{
            this.setState({error});
        });
        event.preventDefault();

    }

    onChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    render(){
        const{
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid = passwordOne !== passwordTwo || passwordOne === '' || email === '' || username === '';

        return(
        <div>
        <form onSubmit = {this.onSubmit}>
        <input
        name = "username"
        value = {username}
        onChange = {this.onChange}
        type = "text"
        placeholder="Full name"
          />
                <input
        name = "email"
        value = {email}
        onChange = {this.onChange}
        type = "email"
        placeholder="Enter email address"
          />  
                          <input
        name = "passwordOne"
        value = {passwordOne}
        onChange = {this.onChange}
        type = "password"
        placeholder="Enter a strong password"
          /> 
                                    <input
        name = "passwordTwo"
        value = {passwordTwo}
        onChange = {this.onChange}
        type = "confirm spassword"
        placeholder="Renter the password"
          />  
          <button disabled={isInvalid} type ="submit">Sign Up</button>
          {error && <p>{error.message}</p>}
        </form>
        </div>
        );
    }
}

const SignUpLink = () =>{
    return(
        <div>
        <p>Don't have a link click to sign up</p>
        <Link to={ROUTES.SIGN_UP}>Sign Up</Link>
        </div>
    )
}

export default SignUp;

export {SignUpLink,SignUp};