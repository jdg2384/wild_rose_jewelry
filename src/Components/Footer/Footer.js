// Redux Imports
import React, { Component } from 'react';
//import { connect } from 'react-redux';
//import Sticky from 'react-stickynode';
import Sticky from 'react-sticky-el';
// CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';
import './footer.css';
//Images
//import fish from '../../Images/fish.svg';
class Footer extends Component {
    
    render() {
        return (
            <div>
                <div id="footer">
                    <Sticky>
                        <footer>
                            <div className="container-fluid">
                                <div className="col-md-12 text-center">
                                    <ul className="list-inline middleDiv">
                                        <li>
                                            <a target='blank' href="https://github.com/jdg2384">
                                                <i style={{fontSize: 75,}} className="fab fa-github-square"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a target='blank' href="https://www.facebook.com/joseph.grounds.3">
                                                <i style={{fontSize: 75,}} className="fab fa-facebook-square"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a target='blank' href="https://www.linkedin.com/in/joseph-grounds">
                                                <i style={{fontSize: 75,}} className="fab fa-linkedin-square"></i>
                                            </a>
                                        </li>
                                    </ul>
                                    {/* <img src={fish} className="fishFooter img-responsive" alt={'fish'}/>  */}
                                </div>
                            </div>
                        </footer>
                    </Sticky>
                </div>
            </div>
        );
    }
}

export default Footer;
