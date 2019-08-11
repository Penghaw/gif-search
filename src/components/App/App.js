import React from 'react';
import './App.css';
import '../../helpers/constants.js';
import Searchbox from '../Searchbox';
import GifList from '../GifList';
import Giphy from '../../services/Giphy';
import LoadingSpinner from '../LoadingSpinner';
import BackToTop from '../BackToTop';

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            gifList: [],
            isLoading: false
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.scrollWatcher = this.scrollWatcher.bind(this);
    }

    async handleInputChange(query) {
        this.setState({isLoading: true});
        let gifList = await Giphy.searchGif(query);
        this.setState({gifList: gifList, isLoading: false});
    };

    async handleScrollBottom() {
        if (this.state.gifList.length >= 0) {
            this.setState({isLoading: true});
            let gifList = await Giphy.searchGif(1, 25, this.state.gifList.length);
            this.setState(state => {
                const list = state.gifList.concat(gifList);
                return {gifList: list, isLoading: false};
            })
        }
    }

    scrollWatcher() {
        const windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        const body = document.body;
        const html = document.documentElement;
        const docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        const windowBottom = windowHeight + window.pageYOffset;
        if (windowBottom >= docHeight) {
            this.handleScrollBottom();
        } else {
            this.setState({
                message: 'not at bottom'
            });
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.scrollWatcher);
        this.handleInputChange();
    }

    render() {
        return (
            <div className="app">
                <h1 className="pageTitle">Gif Search</h1>
                <Searchbox onInputChange={this.handleInputChange}/>
                <hr/>
                <GifList gifList={this.state.gifList}/>
                <LoadingSpinner isLoading={this.state.isLoading}/>
                <BackToTop/>
            </div>
        );
    }
}

export default App;
