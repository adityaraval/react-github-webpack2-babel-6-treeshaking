import React,{Component} from 'react';
import {connect} from 'react-redux';
import {getTasks,postTask} from './actions/actions';
import TaskList from './TaskList';
import TaskForm from './TaskForm';

class TaskBox extends Component {
  constructor(props){
    super(props);
    this.state = {
      isTasksLoaded:false
    }
  }
  componentDidMount(){
    this.props.getMyTasks();
  }

  render() {
    return (
        <div className="well">
            <h1>TaskBox</h1>
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
  return {tasks:state.tasks}
}
export default connect(mapStateToProps,mapDispatchToProps)(TaskBox);
