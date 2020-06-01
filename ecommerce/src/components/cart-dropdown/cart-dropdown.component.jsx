import React from 'react';
import './cart-dropdown.style.scss';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.action';
import CustomButton from '../custom-button/custom-button.component';
import CartItemList from '../cart-item-list/cart-item-list.component';
import { selectCartItems } from '../../redux/cart/cart.selector';

const CartDropdown = ({cartItems, history}) => (    
    <div className="cart-dropdown">
        <div className="cart-items" >
            {
               cartItems.length ? cartItems.map(cartItem => 
                    (<CartItemList key={cartItem.id} item={cartItem} />) 
                ) : 
                (<span className="empty-message">Cart is empty</span>)
            }
        </div>
        
        <CustomButton onClick={() => {history.push('/checkout')}}>Go To Checkout</CustomButton>
    </div>
    
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps, addItem)(CartDropdown));