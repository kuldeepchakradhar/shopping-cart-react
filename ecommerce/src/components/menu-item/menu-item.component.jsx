import React from 'react';

import "./menu-item.style.scss";

const MenuItem = ({title, imageUrl, size }) => (
     <div className={`${size} menu-item`} >
        <div 
        className='background-image'
        style = {{
            backgroundImage: `url(${imageUrl})`
        }}
        />

            <div className="content">
                <h3 className="title">{title.toUpperCase()}</h3>
                <p className="subtitle">shop</p>
            </div>
    </div>
);


export default MenuItem;