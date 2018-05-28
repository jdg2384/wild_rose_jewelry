// Redux Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
//import Sticky from 'react-stickynode';
import Sticky from 'react-sticky-el';
// CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';
import './project.css';
import '../Common/common.css';
//Images
import hat from '../../Images/hat.svg';
// Redux Actions
import {
    projectInfo,
    onHoverRender,
} from '../../Actions';
// Router
import {
    Link,
} from "react-router-dom";

class Project extends Component {

    componentDidMount() {
        this.props.projectInfo()
        this.props.onHoverRender()
    }
    
    renderList=()=>{
        let projectData = this.props.info;
        if(!projectData){return <div>Loading...</div>}
        else{
            return (
                <div>
                    <div className="col-md-6 greenParent text-center curveTwo">
                        <Sticky>
                            <div className="col-md-12 text-center green curve"> 
                                <img src={hat} className=" text-center hat" alt={'hat Svg'} />
                                <h2 className="h2Backgrounds">Portfolio</h2>
                            </div>
                        </Sticky>
                    </div>
                    <div className="col-md-6 projectBorder text-center curveTwo color">
                        { this.props.info.map(item => {
                            return (
                                <div className="projectLink" key={item.id}>
                                    <Link key={item.id} to={`/projectDetail/${item.title}/${item.id}`}>
                                        <div className="projectImgParent">
                                            <div className="projectImg"
                                                style={{backgroundImage: "url(" + item.image + ")"}}
                                            >
                                            <img src={item.image_two} className=" text-center logo" alt={item.title} />
                                            {/* <h2>{item.title}</h2>   */}
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )
        }
    }
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="row">
                        {this.renderList()}  
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => {
    console.log('state = ',state.projects.hover)
    let { info, hover } = state.projects
    return { 
       info,
       hover,
    };
};
export default connect(mapStateToProps, {
    projectInfo,
    onHoverRender
})(Project);
