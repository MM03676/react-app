import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MenuItem from '../menu-item/MenuItem';
import './directory.scss';

export class Directory extends Component {
    constructor(){
        super();

        this.state = {
            sections : [
                {
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
            ]  
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map( ({id, title, imageUrl, size}) => {
                   return (<div key={id} className='link-holder'>
                    <Link to={`/${title}`}>
                      <MenuItem 
                        title={title} 
                        imageUrl={imageUrl} 
                        size={size}/>
                    </Link>
                    </div>)
                })}
            </div>
        )
    }
}

export default Directory
