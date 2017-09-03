import React,{Component} from 'react';
class TaskForm extends Component {

constructor(props){
    super(props);
    this.doSubmit = this.doSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
       newTask:{
        text:""
       } 
    }
}

 doSubmit(event){
     event.preventDefault();
     this.props.addTask(this.state.newTask.text);
 }
 
 handleChange(event){
    this.setState({newTask:{text:event.target.value}});
 }
 render() {
    return (
        <div className="clearfix">
            <form className="todoForm form-horizontal" onSubmit={this.doSubmit}>
                <div className="form-group">
                    <label htmlFor="task" className="col-md-2 control-label">Task</label>
                    <div className="col-md-10">
                        <input value={this.state.newTask.text} onChange={this.handleChange} type="text" id="task" ref="task" className="form-control" placeholder="What do you need to do?" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-10 col-md-offset-2 text-right">
                        <input type="submit" value="Save Item" className="btn btn-primary" />
                    </div>
                </div>
            </form>
        </div>
    );
  }
}

export default TaskForm;