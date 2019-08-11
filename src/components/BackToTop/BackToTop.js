import React from 'react';
import './BackToTop.css';

class BackToTop extends React.Component {
    backToTop = () => {
        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    };

    render() {
        return (
            <button className='backToTop' onClick={this.backToTop}>
                <span className='arrow-up'><b>^</b></span>
            </button>
        );
    }
}

export default BackToTop;