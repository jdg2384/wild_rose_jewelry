// Redux Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
// CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';
import './projectDetail.css';
import '../Common/common.css'
// Actions
import {
    projectInfo,
} from '../../Actions';
// Router
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";

class ProjectDetail extends Component {
    componentDidMount() {
        this.props.projectInfo()
    }
    renderProject =()=>{
        let projectId = Number(this.props.location.pathname.match(/[0-9]/gi)[0]);
        let projects = this.props.info;
        if(!projects){
            return <h1>...Loading</h1>
        }
        else{
            return(
                this.props.info.map(item => {
                    //console.log('image',item)
                    console.log('Props',this.props)
                    if(projectId===item.id){
                        return(
                            <div key={item.id}>
                                <div className="container-fluid noPadding">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <img src={item.image} className="text-center projectImage" alt={item.title}/>
                                        </div>
                                        <div className="col-md-12">
                                            <h1>{item.title}</h1>
                                        </div>
                                        <div className="col-md-6 description">
                                            <h2>{item.description}</h2>
                                        </div>
                                        <div className="col-md-6 bullets">
                                            <h3>{item.title}</h3>
                                        </div>
                                        <div className="col-md-12">
                                            <img src={item.image_two} className="text-center projectImage" alt={'hat Svg'}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ) 
                    }
                })  
            ) 
        }

    }
    render() {
        return (
            <div>
                {this.renderProject()}  
            </div>
        );
    }
}
const mapStateToProps = state => {
    let { info } = state.projects
    //console.log(state.projects)
    return { 
       info,
    };
};
export default connect(mapStateToProps, {
    projectInfo,
})(ProjectDetail);

