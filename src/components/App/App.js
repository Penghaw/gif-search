import React from 'react';
import './App.css';
import '../../helpers/constants.js';
import Searchbox from '../Searchbox';
import Giphy from '../../services/Giphy'

class App extends React.Component {
    async handleInputChange (query) {
        let data = await Giphy.searchGif(query);
        console.log(data);
    };

    render() {
        return (
            <div className="app">
                <h1 className="pageTitle">Gif Search</h1>
                <Searchbox onInputChange={this.handleInputChange}/>
            </div>
        );
    }
}

export default App;
