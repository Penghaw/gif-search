import React from 'react';
import './App.css';
import '../../helpers/constants.js';
import Searchbox from '../Searchbox';

class App extends React.Component {
    render() {
        return (
            <div className="app">
                <h1 className="pageTitle">Gif Search</h1>
                <Searchbox/>
            </div>
        );
    }
}

export default App;
