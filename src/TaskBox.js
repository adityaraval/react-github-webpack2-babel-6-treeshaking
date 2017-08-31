import React,{Component} from 'react';
import {connect} from 'react-redux';
import {getTasks,postTask} from './actions/actions';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
var Loader = require('halogen/PulseLoader');

class TaskBox extends Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    this.props.getMyTasks();
  }

  renderLoader(){
      if(this.props.isTasksLoaded){

      }else{
        return(<Loader color="#26A65B" size="16px" margin="4px"/>);
      }
  }

  render() {
    return (
        <div className="well">
            <h1>TaskBox</h1>
            {
              this.renderLoader()
            }
            <TaskList taskslist={this.props.tasks} />
            <TaskForm addTask={this.props.postMyTask} />
        </div>
    );
  }
}

function mapDispatchToProps(dispatch,ownProps){
  return {
    getMyTasks:()=>dispatch(getTasks()),
    postMyTask:(taskContent)=>dispatch(postTask(taskContent))
  }
}
function mapStateToProps(state,ownProps){
  console.log(state)
  return {tasks:state.tasks.tasks,isTasksLoaded:state.tasks.isTasksLoaded}
}
export default connect(mapStateToProps,mapDispatchToProps)(TaskBox);
