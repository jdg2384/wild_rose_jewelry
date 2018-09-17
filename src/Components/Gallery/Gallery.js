// Redux Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
// CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';
import './Gallery.css';
import '../Common/common.css';
//Images

class Gallery extends Component {

    jewelRender(jewelry){
      return jewelry.map((jew, index) => {
        return(
            <div key={index} className="card-wrap ">
                <div className="image-wrap">
                    <img src={jew.image}/>
                </div>
            </div>
        )
      })
    }

    render() {
        const { jews } =this.props
        return (
            <div>
                <div className="gallery-wrap">
                   {this.jewelRender(jews)}
                </div>
            </div>
        );
    }
}

export default Gallery;