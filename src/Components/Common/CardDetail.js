// Redux Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
// CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';
// import './Gallery.css';
import '../Common/common.css';
//Images

class CardDetail extends Component {

    // jewelRender(jewelry){
    //   return jewelry.map((jew, index) => {
    //     console.log('map=',jew)
    //     return(
    //         <div key={index} className="card-wrap ">
    //             <div className="image-wrap">
    //                 <img src={jew.image}/>
    //                 <div className="card-detail-wrap">
    //                     <h4>{jew.title}</h4>
    //                     <p>{jew.summary}</p>
    //                     <p>${jew.price}</p>
    //                 </div>
    //                 {/* <CardDetail/> */}
    //             </div>
    //         </div>
    //     )
    //   })
    // }

    render() {
        const { jew } =this.props
        return (
            <div>
                <div className="card-detail-wrap">
                    <h4>{jew.title}</h4>
                    <p>{jew.summary}</p>
                    <p>${jew.price}</p>
                </div>    
                
            </div>
        );
    }
}

export default CardDetail;