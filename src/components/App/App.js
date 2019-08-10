import React from 'react';
import './App.css';
import '../../helpers/constants.js';
import Searchbox from '../Searchbox';
import GifList from '../GifList';
import Giphy from '../../services/Giphy';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            gifList: []
        };

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    async handleInputChange(query) {
        this.setState({gifList: await Giphy.searchGif(query)});
    };

    render() {
        return (
            <div className="app">
                <h1 className="pageTitle">Gif Search</h1>
                <Searchbox onInputChange={this.handleInputChange}/>
                <hr/>
                <GifList gifList={this.state.gifList}/>
            </div>
        );
    }
}

export default App;
