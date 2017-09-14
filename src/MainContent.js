import React,{Component} from 'react';
import Home from './Home';
import About from './About';
import TaskBox from './TaskBox';

class MainContent extends Component {
  
  constructor(props){
    super();
  }

  conditionallyRendering(){
    if(this.props.currentComponent==='Home'){
      return(
        <Home />
      );
    }
    if(this.props.currentComponent==='About'){
      return(
        <About />
      );
    }
    if(this.props.currentComponent==='Task'){
      return(
        <TaskBox />
      );
    }

  }

  render() {
    return (
        <div className="profile-content">
        {this.conditionallyRendering()}
        </div>
    );
  }
}

export default MainContent;