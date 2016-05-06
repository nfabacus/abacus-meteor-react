import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class LoginLogoutButton extends TrackerReact(Component) {
	constructor(props, context) {
		super(props, context);
		
		this.state = {
			loginPanelOn: this.props.loginPanelOn
		};
	}

	getUserData() {
		var currentUser = Meteor.user();
		return currentUser;
	}

	_callBackLoginPanel(){
		var newState = !this.state.loginPanelOn;
		this.setState({ loginPanelOn: newState });
		this.props.callBackLoginPanel(newState);
	}

	_handleLogout() {
		Meteor.logout();
		Bert.alert('You are now logged out. Bye for now!', 'success', 'growl-top-right');
	}

	render() {
		let currentUser = this.getUserData();

	    let loginButton;
	    let title = this.props.title;

	    
	    if(currentUser) {
	    	loginButton = ( <span id="loginToggleBtn" onClick={this._handleLogout.bind(this)}>Logout</span> )
	    } else {
	    	if (title) {
	    	loginButton = ( <span id="loginToggleBtn" onClick={this._callBackLoginPanel.bind(this)}>{title}</span> )
	    	} else {
	    	loginButton = ( <span id="loginToggleBtn" onClick={this._callBackLoginPanel.bind(this)}>Login/Signup</span> )
	    	}
	    }

		return (
			<span>{ loginButton }</span>
		)
	}
}