import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {toggleCartHidden} from '../../redux/cart/cart.action'
import { ReactComponent as ShoppingBag } from '../../assets/shopping-bag.svg';
import { selectCartItemsCount} from '../../redux/cart/cart.selector';

import './cart-icon.style.scss';


const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingBag className="shopping-icon" />
        <lable className="item-count">{itemCount}</lable>
        {
            console.log(itemCount)
        }
    </div>
);
const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);