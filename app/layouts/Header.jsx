import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import NavButton from './NavButton.jsx';
import LoginLogoutButton from '../accounts/LoginLogoutButton.jsx';

export default class Header extends Component {
	constructor(props, context) {
		super(props, context);
			
		this.state = {
			navButtonOn: this.props.navButtonOn,
			loginPanelOn: this.props.loginPanelOn
		};
		
	}

	_callBackLoginPanel(data){
		var newState = data;
		this.setState({ loginPanelOn: newState });
		this.props.callBackLoginPanel(newState);
	}

	_callBackNav(data){
		var newState = data;
		this.setState({ navButtonOn: newState });
		this.props.callBackNav(newState);
	}

	render() {

	    this.state.loginPanelOn = this.props.loginPanelOn;

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
					<a href="javascript:void(0);" className="transparent-button smallBtn" >
						<LoginLogoutButton 
							loginPanelOn = {this.state.loginPanelOn} 
	              			callBackLoginPanel = {this._callBackLoginPanel.bind(this)} />
	              	</a>
				</nav>
			</header>

		)
	}


}