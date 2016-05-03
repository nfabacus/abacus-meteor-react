import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import NavButton from './NavButton.jsx';

export default class Header extends Component {
	constructor(props, context) {
		super(props, context);
			
		this.state = {
			navButtonOn: this.props.navButtonOn,
			loginPanelOn: this.props.loginPanelOn
		};
		
	}

	_callBackNav(data){
		var newState = data;
		this.setState({ navButtonOn: newState });
		this.props.callBackNav(newState);
	}
	_callBackLoginPanel(){
		var newState = !this.state.loginPanelOn;
		this.setState({ loginPanelOn: newState });
		console.log('LoginNewstate in Header(origin)', newState);
		this.props.callBackLoginPanel(newState);
		
	}

	render() {
	    this.state.loginPanelOn = this.props.loginPanelOn;
	    if(Meteor.user()) {
	    	var loginLink = "Logout";
	    } else {
	    	var loginLink = "Login/Signup";
	    }
		return (
			<header id="nav_header">
		        <span className="header_title"><a href="/">ABACUS LEARNING LAB</a></span>
		        <button id="toggle" className="transparent-button smallBtn">Start editing</button>
		        <button id="reset" className="transparent-button smallBtn">Reset content</button>
		        <button id="save" className="transparent-button smallBtn">Save content</button>
		        
		        {/* Nav Menu Hamburger Icon */}
		        <NavButton initialNavOn = {this.props.navButtonOn} callBack ={this._callBackNav.bind(this)} />

	            {/* Horizontal Nav */}
				<nav className="horizontal_nav">
				    <a href="/">Home</a>
					<a href="/resolutions">Resolutions</a>
					<a href="/about">About</a>
					<a href="/testpage">Test Page</a>
					<button id="loginToggleBtn" className="transparent-button smallBtn" onClick={this._callBackLoginPanel.bind(this)}>{loginLink}</button>
				</nav>
				
			</header>

		)
	}


}