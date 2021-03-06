import React, { Component } from 'react';
import './App.css';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'

import NewsDetailPage from './components/NewsDetailPage'
import Index from './components/Index';


window.the_url = "https://api.whusu.org";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Router history={hashHistory}>
                    <Route path="/" component={Index}/>
                    <Route path="category/:tag" component={Index}/>
                    <Route path="search/:search" component={Index}/>
                    <Route path="/news/:id" component={NewsDetailPage}/>
                </Router>
            </div>
        );
    }
}

export default App;
