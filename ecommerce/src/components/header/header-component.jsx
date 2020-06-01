import React from 'react';
import { Link } from 'react-router-dom';
import {connect } from 'react-redux';

import { auth } from '../../../src/firebase/firebase.utils';
import './header-component.style.scss';
import { ReactComponent as Logo } from '../../assets/original.svg';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector} from 'reselect';
import {selectCartHiddne} from '../../redux/cart/cart.selector';
import {selectCurrentUser} from '../../redux/user/user.selector';
const Header = ({currentUser, hidden}) => (

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
            <CartIcon />
        </div>
        {
            hidden ? null : <CartDropdown />
        }
        
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHiddne
});


export default connect(mapStateToProps)(Header);