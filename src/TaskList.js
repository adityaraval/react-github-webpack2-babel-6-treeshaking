import React,{Component} from 'react';
import TaskItem from './TaskItem';
class TaskList extends Component {
  constructor(props){
      super(props);
  }

  removeTask(id){
    this.props.deleteTask(id);
  }

  render() {
    return (
        <ul className="list-group">
            {
                this.props.taskslist.map((t,i)=>{
                    return(
                       <TaskItem removeTask = {this.removeTask.bind(this)} key = {i} text={t.text} id={t._id} />
                    )
                })
            }
		</ul>
    );
  }
}

export default TaskList;