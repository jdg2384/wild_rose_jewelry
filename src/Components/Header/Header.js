import React, { Component } from 'react';
// CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';
import './header.css';
import '../Common/common.css';
//Image
import Flower from '../../Images/logo.png';

class Header extends Component {
    render() {
        return (
            <div>
                <div id="header" className="header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-12 grad text-center">
                                <div className="divMiddle">
                                    <img src={Flower} className="River text-center img-responsive" alt={'River'}/> 
                                    <h1 className="">Wild Rose Jewelry</h1> 
                                    <h2 className="">Coming Soon!</h2> 
                                    <ul className="list-inline middleDiv">
                                        <li>
                                            <a target='blank' href="mailto:kgrounds39@.com">
                                                <i style={{fontSize: 55,}} className="fab fa fa-envelope"></i>
                                            </a>
                                        </li>
                                        {/* <li>
                                            <a target='blank' href="https://www.facebook.com/joseph.grounds.3">
                                                <i style={{fontSize: 55,}} className="fab fa-facebook-square"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a target='blank' href="https://www.linkedin.com/in/joseph-grounds">
                                                <i style={{fontSize: 55,}} className="fab fa-linkedin-square"></i>
                                            </a>
                                        </li> */}
                                    </ul> 
                                </div> 
                            </div>
                            {/* <div className="col-md-6"></div> */}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
