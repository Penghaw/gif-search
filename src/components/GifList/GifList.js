import React from 'react';
import './GifList.css';
import GifListItem from '../GifListItem';

const GifList = (props) => {
    const gifItems = props.gifList.map((image) => {
        return <GifListItem key={image.id} gif={image}/>
    });

    return (
        <ul className="gif-list">{gifItems}</ul>
    );
};

export default GifList;