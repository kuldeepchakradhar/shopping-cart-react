import React from 'react';

import './custom-button.style.scss';

const CustomButton = ({children, isGoogleSingIn, ...otherProps}) => (

    <button className={`${isGoogleSingIn ? 'google-is-signin': '' } custom-button`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;