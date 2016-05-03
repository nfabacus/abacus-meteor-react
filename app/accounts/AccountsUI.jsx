import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class AccountsUI extends Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			loginPanelOn: this.props.loginPanelOn
		};
	}

	componentDidMount() {
		this.view = Blaze.render(Template.LoginModal,
			ReactDOM.findDOMNode(this.refs.container));
	}

	compoentWillUnmount() {
		Blaze.remove(this.view);
	}


    _cancelLoginPanel() {
      var newState = false;
      this.setState({
      	loginPanelOn: newState
      });
      
      this.props.callBackLoginPanel(newState);

    }


    // _submitSignup(event) {
    // 	event.preventDefault();
    // 	console.log('submit button clicked!')
    // 	var email = $('[name=email]').val();
    // 	var password = $('[name=password]').val();
    // 	console.log('email is', email, ' password is ', password)
    // 	var userInfo = {
    // 		email: email,
    // 		password: password
    // 	}

    // 	Meteor.call('registerUserInfo', userInfo);

    // }


	render() {
		console.log('props for LoginPanel in Account UI is :', this.props.loginPanelOn);
 		
    if (this.props.loginPanelOn) {
			var loginPanelClass = "";
		} else {
			var loginPanelClass = "hidden";
		}

       return (
       	<div id="loginPanel" className={loginPanelClass}>
	       	<center>
	       	<span ref="container" />
         	<button className="cancel_action input_style ghost-button red_back" onClick={this._cancelLoginPanel.bind(this)}>Cancel</button>
	       	</center>
       	</div>
       	)
	}

}