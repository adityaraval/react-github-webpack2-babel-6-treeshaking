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
                        <li className="list-group-item clearfix" key={i}>
                            {t.text}
                                <button type="button" className="btn btn-primary btn-xs" onClick={()=>this.removeTask(t._id)}><span className="glyphicon glyphicon-remove"></span>DELETE</button>
                        </li>
                    )
                })
            }
		</ul>
    );
  }
}

export default TaskList;