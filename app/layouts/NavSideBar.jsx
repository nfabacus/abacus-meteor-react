import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class NavSideBar extends Component {
	constructor(props, context) {
		super(props, context);
		this._callBackLogin = this._callBackLogin.bind(this);
		
		this.state = {
			loginPanelOn: this.props.loginPanelOn
		};
	}

	_callBackLogin(data){
		var newState = !this.state.loginPanelOn;
		this.setState({ loginPanelOn: newState });
		this.props.callBackLogin(newState);
	}

	render() {
	    if(this.props.navSideBarOn) {
	    	navSideBarClass = "";
	    } else {
	    	navSideBarClass = "navHide";
	    }

		return (

	      <nav id="nav" className={navSideBarClass}>         
	        <ul id="mainnav">
	          <li><a href="/">Home</a></li>
	          <li><a href="section_1">Vision</a></li>
	          <li><a href="section_2">Courses</a></li>
	          <li><a href="section_3">News</a></li>
	          <li><a href="section_4">Creativity</a></li>
	          <li><a href="section_5">Contact</a></li>
	          <li><button onClick={this._callBackLogin}>Login/Signin</button></li>
	           
	        </ul>
	     </nav>

		)
	}
}