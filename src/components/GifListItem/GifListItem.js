import React from 'react';
import './GifListItem.css';

const GifListItem = (itemData) => {
    return (
        <li className="gif-list-item">
            <img src={itemData.gif.url} alt={itemData.gif.title}/>
        </li>
    )
};

export default GifListItem;