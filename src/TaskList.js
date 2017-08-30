import React,{Component} from 'react';
import TaskItem from './TaskItem';
class TaskList extends Component {
  constructor(props){
      super(props);
  }
  componentDidMount(){
      console.log(this.props.taskslist)
  }

  render() {
    return (
        <ul className="list-group">
            <li className="list-group-item clearfix">Tasks</li>
            {
                this.props.taskslist.map((t,i)=>{
                    return(
                        <li className="list-group-item clearfix" key={i}>{t.text}</li>
                    )
                })
            }
		</ul>
    );
  }
}

export default TaskList;