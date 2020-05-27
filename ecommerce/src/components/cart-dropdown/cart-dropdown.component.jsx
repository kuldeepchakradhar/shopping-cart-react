import React from 'react';
import './cart-dropdown.style.scss';
import {connect} from 'react-redux';
import {addItem} from '../../redux/cart/cart.action';
import CustomButton from '../custom-button/custom-button.component';
import CartItemList from '../cart-item-list/cart-item-list.component';

const CartDropdown = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className="cart-items" >
            {
                cartItems.map(cartItem => 
                    (<CartItemList key={cartItem.id} item={cartItem} />) 
                )
            }
        </div>
        
        <CustomButton>Go To Checkout</CustomButton>
    </div>
);

const mapStateToProps = ({cart: {cartItems}}) => ({
    cartItems
});

export default connect(mapStateToProps, addItem)(CartDropdown);