import React,{Component} from 'react';
class TaskItem extends Component {

render() {
    return (
         <li className="list-group-item clearfix" >
        {this.props.text}
        <button type="button" className="btn btn-primary btn-xs" onClick={()=>this.props.removeTask(this.props.id)}><span className="glyphicon glyphicon-remove"></span>DELETE</button>
        </li>
    )
}
}

export default TaskItem;