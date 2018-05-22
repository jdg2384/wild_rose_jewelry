import React, { Component } from 'react';
// Router
import {
    Route,
} from "react-router-dom";
import './App.css';
import Body from './Body/Body.js';
import ProjectDetail from './ProjectDetail/ProjectDetail.js';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Route exact path="/" component={Body}/>
                <Route path="/projectDetail" component={ProjectDetail} />
            </div>
        );
    }
}
export default App;
