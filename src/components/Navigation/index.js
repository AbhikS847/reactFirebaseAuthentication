import React from 'react';
import {Link} from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

const Navigation = () =>{
    return(
        <div>
            <div className="ui secondary  menu">
  <Link className="item" to={ROUTES.SIGN_IN} >
    Sign In
  </Link>
  <Link className="item" to={ROUTES.LANDING}>
    Landing
  </Link>
  <Link className="item" to={ROUTES.HOME}>
    Home
  </Link>
  <Link className="item" to={ROUTES.ACCOUNT}>
    Account
  </Link>
  <Link className="item" to={ROUTES.ADMIN}>
    Admin
  </Link>
  
</div>
        </div>
    )
}

export default Navigation;