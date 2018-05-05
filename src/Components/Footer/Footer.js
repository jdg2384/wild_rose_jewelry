// Redux Imports
import React, { Component } from 'react';
//import { connect } from 'react-redux';
import Sticky from 'react-stickynode';
// CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';
import './footer.css';
//Images
import fish from '../../Images/fish.svg';
class Footer extends Component {
    
    render() {
        return (
            <div>
                <div>
                    <Sticky>
                        <footer>
                            <img src={fish} className="fishFooter" alt={'fish'}/> 
                        </footer>
                    </Sticky>
                </div>
            </div>
        );
    }
}

export default Footer;
