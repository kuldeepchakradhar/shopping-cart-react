import React from 'react';
import { Link } from 'react-router-dom';
import {connect } from 'react-redux';

import { auth } from '../../../src/firebase/firebase.utils';
import './header-component.style.scss';
import { ReactComponent as Logo } from '../../assets/original.svg';

const Header = ({currentUser}) => (

    <div className="header">
        <Link to="/" className="logo-container" >
        <Logo className="logo" />
        </Link>
        <div className="options">
            <Link to="/shop" className="option">Shop</Link>
            <Link to="#" className="option">Contact</Link>
            {
                currentUser ? 
                (<div className="option" onClick={() => auth.signOut()}>Sign out</div>)
                :
                <Link className="option" to="/sign-in"> Sign in</Link>
                
            }
        </div>
    </div>
);

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header);