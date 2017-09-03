import React,{Component} from 'react';
import TaskItem from './TaskItem';
class TaskList extends Component {
  constructor(props){
      super(props);
  }

  removeTask(id){
    this.props.deleteTask(id);
  }

  updateTask(id,text){
      this.props.updateTask(id,text);
  }

  render() {
    return (
        <ul className="list-group">
            {
                this.props.taskslist.map((t,i)=>{
                    return(
                       <TaskItem updateTask= {this.updateTask.bind(this)} removeTask = {this.removeTask.bind(this)} key = {i} text={t.text} id={t._id} isEditing={false}  />
                    )
                })
            }
		</ul>
    );
  }
}

export default TaskList;