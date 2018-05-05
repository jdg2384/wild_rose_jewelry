// Redux Imports
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sticky from 'react-stickynode';
// CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';
import './project.css';
//Images
import hat from '../../Images/hat.svg';
// Redux Actions
import {
    projectInfo,
    toggle
} from '../../Actions';
class Project extends Component {
    componentDidMount() {
        this.props.projectInfo()
        this.props.toggle()
    }
    renderList=()=>{
        let projectData = this.props.info;
        let reducerToggle = this.props.reducerToggle
        if(!projectData || !reducerToggle === null){return <div>Loading...</div>}
        else{
            //console.log('props else ',this.props.reducerToggle)
            return (
                <div>
                    <div 
                        className={
                            reducerToggle ? "col-md-3 text-center green curve" 
                            : "col-md-6 text-center green curveTwo"
                        }
                    >
                        <Sticky bottomBoundary={4854}>
                        {/* <div className="container-fluid">
                            <div className="row"> */}
                                <div className={"text-center greenTwo curve"}> 
                                    <img src={hat} className="hat" alt={'hat Svg'} />
                                </div>
                            {/* </div>
                            </div> */}
                        </Sticky>
                    </div>
                    <div className={reducerToggle ? "col-md-9 text-center curve color" : "col-md-6 text-center curveTwo color"}>
                        { this.props.info.map(item => {
                            return (
                                <div 
                                    onClick={()=> this.props.toggle(!reducerToggle)}
                                    key={item.id}
                                    className="picture" 
                                    style={{backgroundImage: "url(" + item.image + ")", height:600, width: '100%'}}
                                >
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
    let { info, reducerToggle } = state.projects
    
    return { 
       info,
       reducerToggle,
    };
};
export default connect(mapStateToProps, {
    projectInfo,
    toggle
})(Project);

//(event)=> this.props.checkListPatch(pipeDriveApiOne.id,{'org_person_email': event.target.checked })