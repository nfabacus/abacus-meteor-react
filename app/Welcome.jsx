import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import LoginLogoutButton from './accounts/LoginLogoutButton.jsx';

export default class Welcome extends Component {
	constructor(props, context) {
		super(props, context);
		console.log(this.props);
		this.state = {
			loginPanelOn: this.props.loginPanelOn,
			navSideBarOn: this.props.navSideBarOn
		};
	}

	_callBackLoginPanel(data){
		var newState = data;
		this.setState({ loginPanelOn: newState });
		this.props.callBackLoginPanel(newState);
	}
	
	render() {
		DocHead.setTitle('Welcome | Abacus Learing Lab');

		console.log('LoginPanelOn props in Welcome', this.props.loginpanelOn);
		console.log('navSideBarOn state in Welcome', this.state.loginpanelOn);

		return (
			<ReactCSSTransitionGroup
				component="div"
				transitionName="route"
				transitionEnterTimeout={600}
				transitionAppearTimeout={600}
				transitionLeaveTimeout={400}
				transitionAppear={true}>

		<header id="big_header">
		<center>
		  <h1 id="big_title">ABACUS LEARNING LAB</h1>

		<nav className="hide_onclick sub_menu">
			<p><a className="strapline" className="fadein">The place to learn & practice abacus and maths!</a></p>

			<div className="block_connector">
				<p> <a href="/about" className="page_link ghost-button lightblue_back introButtonWidth">Learn more</a></p>
				<p> <a href="signup" className="sub_option ghost-button red_back introButtonWidth">Sign up</a></p>
				<p> <a href="" className="ghost-button lime_back introButtonWidth">Find us</a></p>
			</div>
			<div className="block_connector">
				<p> <a href="" className="ghost-button purple_back introButtonWidth">Chat with us</a></p>
				<p> <a href="" className="ghost-button orange_back introButtonWidth">Call us</a></p>
				<p> <a href="" className="ghost-button green_back introButtonWidth">Email us</a></p>
			</div> 
			<p>
				<a href="javascript:void(0);" className="sub_option ghost-button lightblue_back introButtonWidth">
				<LoginLogoutButton 
					loginPanelOn = {this.state.loginPanelOn} 
					callBackLoginPanel = {this._callBackLoginPanel.bind(this)}
					title = {"Log In"} />
				</a>
			</p>
		</nav>


		</center>
		</header>


			</ReactCSSTransitionGroup>
		)
	}
}