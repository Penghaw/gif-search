import React from 'react';
import './Searchbox.css';

class Searchbox extends React.Component {
    constructor() {
        super();
        this.state = {
            query: '',
            typingTimeout: false
        };

        this.onInputChange = this.onInputChange.bind(this);
    }

    onInputChange = (e) => {
        let query = e.target.value;
        if (this.state.typingTimeout) clearTimeout(this.state.typingTimeout);

        const self = this;
        this.setState({
            typingTimeout: setTimeout(function () {
                self.setState({
                    query: query,
                    typingTimeout: false
                });
                self.props.onInputChange(query);
            }, 500)
        });
    };

    render() {
        return (
            <div>
                <input className="searchGif" onChange={this.onInputChange}/>
            </div>
        );
    }
}

export default Searchbox;