import React,{Component} from 'react';
class TaskItem extends Component {

constructor(props){
    super(props)
    this.state = {isEditing:this.props.isEditing,text:this.props.text}
    this.onChangeTask = this.onChangeTask.bind(this);
}

renderConditionally(){
     if(this.state.isEditing==false){
            return(this.props.text);
        }else{
            return (<input type="text" value={this.state.text} onChange={this.onChangeTask} />);
        }
}

editButton(){
    this.setState({isEditing:true,text:this.props.text})
}
saveButton(id){
    this.props.updateTask(id,this.state.text);
        this.setState({isEditing:false,text:""});
}

onChangeTask(event){
    console.log(event.target.value);
    this.setState({text:event.target.value})
}

conditionallyRenderButton(){
    if(this.state.isEditing){
        return(
            <button type="button" className="btn btn-success btn-xs" onClick={()=>this.saveButton(this.props.id)}><span className="glyphicon glyphicon-save"></span>SAVE</button>
        );
    }else{
        return(
            <button type="button" className="btn btn-primary btn-xs" onClick={()=>this.editButton()}><span className="glyphicon glyphicon-edit"></span>EDIT</button>
        );
    }
}

render() {
    return (
        <li className="list-group-item clearfix" >
        {this.renderConditionally()}
        <button type="button" className="btn btn-danger btn-xs" onClick={()=>this.props.removeTask(this.props.id)}><span className="glyphicon glyphicon-remove"></span>DELETE</button>
        {
            this.conditionallyRenderButton()
        }
        </li>
    )
}
}

export default TaskItem;