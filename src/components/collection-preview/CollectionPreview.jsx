import React from 'react';
import CollectionItem from '../collection-item/CollectionItem';
import './collection-preview.scss';

const CollectionPreview = ({ title, items }) => {
    return (
        <div className='collection-preview'>
            <h3 className='title'>{title}</h3>
            <div className="preview">
                {items.filter((item, index)=>index<4).map(({id, ...otherItemProps})=><CollectionItem key={id} {...otherItemProps}/>)}
            </div>
        </div>
    )
}

export default CollectionPreview
