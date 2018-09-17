import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
  } from "react-router-dom";
import './App.css';
import {
    projectInfo,
    productGet
} from '../Actions';
import Navbar from './Common/Navbar.js';
import Footer from './Common/Footer.js';
import Body from './Body/Body.js';
import About from './About/About.js';
import Gallery from './Gallery/Gallery.js';
import Jewelry from './Jewelry/Jewelry.js';
import ProductPage from './Jewelry/ProductPage';

class App extends Component {

    componentDidMount(){
      this.props.projectInfo()
    }
    render() {
        const { info, data, one } = this.props
        return (
            <Router>
                <div className="App">
                    <Navbar/>
                        <div className="app-wrap">
                            <Route exact path="/" component={Body}/>
                            <Route path="/about" component={About} />
                            <Route path="/gallery" render={(props) => <Gallery {...props} jews={info} />} />
                            <Route path="/jewelry" render={(props) => <Jewelry {...props} jews={info} />} />
                            <Route path="/product/:product_title" component={ProductPage} />
                        </div>
                    <Footer/>
                {/* <Route path="/projectDetail" component={ProjectDetail} /> */}
                </div>
            </Router>
        );
    }
}
const mapStateToProps = state => {
    let { info, data, one} = state.projects
    return { 
       info,
       data,
       one
    };
};
export default connect(mapStateToProps, {
    projectInfo,
    productGet
})(App);
