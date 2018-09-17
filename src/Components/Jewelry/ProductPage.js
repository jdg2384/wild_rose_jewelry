// Redux Imports
import React, { Component } from 'react';
import CardDetail from '../Common/CardDetail.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';
// import './about.css';
import '../Common/common.css';
import {
    productGet,
} from '../../Actions';

class ProductPage extends Component {

    constructor(){
        super()
        this.renderProduct()
    }

    renderProduct(){
        productGet(1)
    }
    
    productRender(product){
        return product.map((jew, index) => {
            return(

                <div><h2>Product page</h2></div>
            //   <div key={index} className="card-wrap ">
            //       <div className="image-wrap">
            //           <img src={jew.image}/>
            //           <CardDetail jew={jew}/>
            //       </div>
            //   </div>
            )
        })
    }
  
    render() {
        const { jews } =this.props
        console.log('product page = ', this.props)
        return (
            <div>
                <div className="gallery-wrap">
                <br/><br/><br/><br/><br/><br/>
                <div><h2>Product page</h2></div>
                    {/* {this.productRender(jews)} */}
                </div>
            </div>
        );
    }
}
export default ProductPage;
