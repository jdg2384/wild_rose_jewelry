// Redux Imports
import React, { Component } from 'react';
//import { connect } from 'react-redux';
// CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';
import './body.css';
//Components
import Header from '../Header/Header';


class Body extends Component {
    render() {
        return (
            <div>
                <Header/>
                {/* <About/>
                <Project/>
                <Footer/> */}
            </div>
        );
    }
}
export default Body;
