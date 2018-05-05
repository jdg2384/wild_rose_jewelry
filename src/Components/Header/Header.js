// Redux Imports
import React, { Component } from 'react';
//import { connect } from 'react-redux';
// CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';
import './header.css';
//Image
import hat from '../../Images/hat.svg';

class Header extends Component {
    
    render() {
        return (
            <div>
                <div className="header">
                    <img src={hat} className="headerHat" alt={'hat Svg'}/>
                </div>
            </div>
        );
    }
}

export default Header;
