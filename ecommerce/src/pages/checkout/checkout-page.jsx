import React from 'react';
import './checkout.page.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItems, selectCartTotal} from '../../redux/cart/cart.selector';
import CheckoutItem from '../../components/checkoutitem/checkoutitem.component';

const CheckoutPage = ({cartItem, total}) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Image</span>
            </div>
            <div className="header-block">
                <span>Title</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>

        <div className='cart-items'>
            {
                cartItem.map(cartItem => (
                  <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                ))
            }
        </div>

        <div className='total'>TOTAL: ${total}</div>

    </div>
);

const mapStateToPropas = createStructuredSelector({
    cartItem: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToPropas)(CheckoutPage);