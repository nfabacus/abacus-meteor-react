import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class AccountsUI extends Component {

	componentDidMount() {
		this.view = Blaze.render(Template.LoginModal,
			ReactDOM.findDOMNode(this.refs.container));
	}

	compoentWillUnmount() {
		Blaze.remove(this.view);
	}

	constructor(props, context) {
		super(props, context);

		this.state = {
			loginPanelOn: true
		};
	}

    _cancelLoginPanel(){
    	console.log('Cancel Button clicked! loginPanelOn? ', this.state.loginPanelOn);
    	var newLoginPanelState = !this.state.loginPanelOn;

    	this.setState({
        	loginPanelOn: newLoginPanelState
    	});
    	this.props.callbackParent(newLoginPanelState);
    }   

	render() {
		console.log('LoginPanelOn? ', this.state.loginPanelOn);
		if (this.state.loginPanelOn) {
			var loginPanelClass = "";
			console.log('Displaying loginPanel');
		} else {
			var loginPanelClass = "hideLoginPanel";
			console.log('Hiding loginPanel');
		}



		return <span ref="container" loginPanelClass="loginPanelClass" />
	}

}