import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import LoginForm from './LoginForm.jsx';
import SignupForm from './SignupForm.jsx';

export default class AccountsUI extends Component {

	constructor(props, context) {

		super(props, context);
		this.state = {
			navSideBarOn: this.props.navSideBarOn,
			loginPanelOn: this.props.loginPanelOn,
			loginPanelSelected: 'loginForm'
		};
	}


    _callBackLPanelSelected(data) {
    	var newState = data;
    	this.setState({
    		loginPanelSelected: newState
    	});
    	this.props.callBackLoginPanel(newState);
    }

    _callBackLoginPanel(data) {
    	var newState = data;
        this.setState({ loginPanelOn: newState });
        this.props.callBackLoginPanel(newState);

    }

	render() {
		console.log('props for LoginPanel in Account UI is :', this.props.loginPanelOn);
		console.log('state for loginPanelSelected is: ', this.state.loginPanelSelected);
		let panelSelected;
 	
 	// hide and show loginPanel
    if (this.props.loginPanelOn) {
			var loginPanelClass = "";
		} else {
			var loginPanelClass = "hidden";
		}

	// show loginForm or SignupForm
	if (this.state.loginPanelSelected == "loginForm") {
		panelSelected = ( <LoginForm 
							navSideBarOn = {this.props.navSideBarOn}
							loginPanelOn = {this.state.loginPanelOn} 
              				callBackLoginPanel = {this._callBackLoginPanel.bind(this)} 
              				loginPanelSelected = {this.state.loginPanelSelected} 
              				callBackLPanelSelected={ this._callBackLPanelSelected.bind(this) }/> )
	}

	if (this.state.loginPanelSelected == "signupForm") {
		panelSelected = ( <SignupForm 
							navSideBarOn = {this.props.navSideBarOn}
							loginPanelOn = {this.state.loginPanelOn} 
              				callBackLoginPanel = {this._callBackLoginPanel.bind(this)} 
              				loginPanelSelected = {this.state.loginPanelSelected} 
              				callBackLPanelSelected={ this._callBackLPanelSelected.bind(this) } /> )
	}


       return (
       	<div id="loginPanel" className={ loginPanelClass }>
	       	<center>
	       	{ panelSelected } 
	       	</center>
       	</div>
       	)
	}

}