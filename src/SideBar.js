import React,{Component} from 'react';
import { Link } from 'react-router-dom';

class SideBar extends Component {
  
  constructor(props){
    super();
	}
	
	changeComponent(cname){
		this.props.renderComponent(cname);
	}

  render() {
    return (
			<div className="profile-sidebar">
				<div className="profile-userpic">
					<img src="http://keenthemes.com/preview/metronic/theme/assets/admin/pages/media/profile/profile_user.jpg" className="img-responsive" alt="" />
				</div>
				<div className="profile-usertitle">
					<div className="profile-usertitle-name">
						Marcus Doe
					</div>
					<div className="profile-usertitle-job">
						Developer
					</div>
				</div>
				<div className="profile-userbuttons">
					<button type="button" className="btn btn-success btn-sm">Follow</button>
					<button type="button" className="btn btn-danger btn-sm">Message</button>
				</div>
				<div className="profile-usermenu">
					<ul className="nav">
						<li className="active">
						<a href='#' onClick={() => this.changeComponent('Home')}><i className="glyphicon glyphicon-home"></i>Home</a>
						</li>
						<li>
						<a href='#' onClick={() => this.changeComponent('About')}><i className="glyphicon glyphicon-home"></i>About</a>
						</li>
						<li>
						<a href='#' onClick={() => this.changeComponent('Task')}><i className="glyphicon glyphicon-home"></i>Tasks</a>
						</li>
					</ul>
				</div>
			</div>
    );
  }
}

export default SideBar;