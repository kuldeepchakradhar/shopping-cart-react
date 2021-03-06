import React from 'react'

import "./collection-preview-style.scss";
import CollectionItem from '../collection-item/collection-item.components';

const CollectionPreview = ({title, items}) => (
    
    <div className="collection-preview">
        <h2 className="title">{title.toUpperCase()}</h2>
        <div className="priview">
        {
            items.filter((item, idx) => idx < 4).map(item => (
                <CollectionItem key={item.id} item={item} />
                ))
        }
        </div>

    </div>
);

export default CollectionPreview;