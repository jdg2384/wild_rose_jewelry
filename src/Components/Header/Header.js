import React, { Component } from 'react';
// CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';
import './header.css';
import '../Common/common.css';
//Image
import River from '../../Images/headerPic3.png';

class Header extends Component {
    render() {
        return (
            <div>
                <div id="header" className="header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 grad text-center">
                                <img src={River} className="River text-center img-responsive" alt={'River'}/> 
                                <h1 className="fontBackG">Joseph</h1>
                                <br/>
                                <h1 className="fontBackG">Grounds</h1>   
                            </div>
                            <div className="col-md-6"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;
