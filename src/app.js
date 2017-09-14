import React,{Component} from 'react';
import SideBar from './SideBar';
import MainContent from './MainContent';


import Home from './Home'
import About from './About'
class App extends Component {
  
  constructor(props){
    super();
    this.state = {currentComponent:'Home'}
    this.renderComponent = this.renderComponent.bind(this);
  }

  renderComponent(cname){
    this.setState({currentComponent:cname});
  }

  render() {
    return (
        <div className="container">
            <div className="row profile">
              <div className="col-md-3">
                <SideBar renderComponent={this.renderComponent}  />
              </div>
              <div className="col-md-9">
                <MainContent currentComponent={this.state.currentComponent}  />
              </div>
            </div>
        </div>
    );
  }
}

export default App;