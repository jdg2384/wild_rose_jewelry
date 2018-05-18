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
    toggle
} from '../../Actions';
// Router
import {
    BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";

class Project extends Component {

    componentDidMount() {
        this.props.projectInfo()
    }
    
    renderList=()=>{
        let projectData = this.props.info;
        let reducerToggle = this.props.reducerToggle
        if(!projectData || !reducerToggle === null){return <div>Loading...</div>}
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
                                <Link to={`/projectDetail/${item.title}/${item.id}`}>
                                    <img src={item.image} className="text-center projectImg" alt={'hat Svg'}/>
                                </Link>
                            )
                        })}
                    </div>
                </div>
            )
        }
    }
    render() {
        //console.log('sticky',Sticky)
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
    let { info, Dateify, Hoist, testOne, testTwo , reducerToggle } = state.projects
    //console.log(state.projects)
    return { 
       info,
       Dateify, 
       Hoist, 
       testOne, 
       testTwo,
       reducerToggle
    };
};
export default connect(mapStateToProps, {
    projectInfo,
    toggle
})(Project);

//(event)=> this.props.checkListPatch(pipeDriveApiOne.id,{'org_person_email': event.target.checked })