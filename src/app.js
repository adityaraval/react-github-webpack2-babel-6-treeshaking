import React,{Component} from 'react';
import TaskBox from './TaskBox';
class App extends Component {
  render() {
    return (
        <div className="App container">
          <div className="row vert-offset-top-2">
            <div className="col-md-4" id="taskBox">
              <TaskBox />
            </div>
          </div>
        </div>
    );
  }
}

export default App;