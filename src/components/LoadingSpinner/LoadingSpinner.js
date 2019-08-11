import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = (props) => {
    const isLoading = props.isLoading;
    if (isLoading) {
        return (
            <div className="sk-folding-cube">
                <div className="sk-cube1 sk-cube"></div>
                <div className="sk-cube2 sk-cube"></div>
                <div className="sk-cube4 sk-cube"></div>
                <div className="sk-cube3 sk-cube"></div>
            </div>
        )
    } else {
        return null;
    }
};

export default LoadingSpinner;