import React, { Component } from 'react';
import SHOP_DATA from '../../data/shop-data';
import CollectionPreview from '../../components/collection-preview/CollectionPreview';
import './shop-page.scss';

export class ShopPage extends Component {
    constructor(){
        super();

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state;

        return (
            <div className='shop-page'>
                {collections.map(({id, ...otherCollectionProps}) => {
                  return <CollectionPreview key={id} { ...otherCollectionProps } />
                }
                )}
            </div>
        )
    }
}

export default ShopPage

