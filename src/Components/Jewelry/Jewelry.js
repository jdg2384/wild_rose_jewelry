// Redux Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import CardDetail from '../Common/CardDetail.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';
// import './about.css';
import '../Common/common.css';
import {
    productGet,
} from '../../Actions';


class Jewelry extends Component {

    productId(id){
        this.props.productGet(id)    
    }

    jewelRender(jewelry){
        return jewelry.map((jew, index) => {
          return(
            <div onClick={()=> this.productId(jew.id)} key={index} className="card-wrap ">
                <Link to={`/product/${jew.id}`}>
                    <div className="image-wrap">
                        <img alt={jew.title} src={jew.image}/>
                        <CardDetail jew={jew} />
                    </div>
                </Link>
            </div>
          )
        })
    }
  
    render() {
        const { jews } =this.props
        console.log(this.props)
        return (
            <div>
                <div className="gallery-wrap">
                    {this.jewelRender(jews)}
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    let { info, data, one } = state.projects
    return { 
       info,
       data,
       one
    };
};
export default connect(mapStateToProps, {
    productGet,
})(Jewelry);
