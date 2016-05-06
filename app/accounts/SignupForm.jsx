import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import LoginPanelCancelButton from './LoginPanelCancelButton.jsx';

export default class SignupForm extends Component {

  constructor(props, context) {

    super(props, context);
    this.state = {
    	navSideBarOn: this.props.navSideBarOn,
    	loginPanelSelected: this.props.loginPanelSelected,
    	loginPanelOn: this.props.loginPanelOn
    };
  }

    _submitSignup(event) {
		event.preventDefault();
		console.log('submit button clicked!')
		var username = $('[name=username]').val();
		var email = $('[name=email]').val();
		var password = $('[name=password]').val();
		var password_confirm = $('[name=password_confirm]').val();
		var firstname = $('[name=firstname]').val();
		var surname = $('[name=surname]').val();

		console.log('user inputs: ', username, email, password, password_confirm, firstname, surname);
		var userInfo = {
			username: username,
			email: email,
			password: password,
			password_confirm: password_confirm,
			firstname: firstname,
			surname: surname
		};

		Accounts.createUser({
			username: userInfo.username,
			password: userInfo.password,
			email: userInfo.email,
			firstname: userInfo.firstname,
			surname: userInfo.surname
			
		}, function(err) {
			if (err) {
				console.log(err.reason);
				console.log("error!!");
			} else {
        Bert.alert('Success! You are signed up and now logged in!', 'success', 'growl-top-right');
        $('.cancel_action').trigger('click');
        FlowRouter.go('/');
			}
		});
	}

	_gotoLogin() {
	    this.state.loginPanelSelected = "loginForm";
	    var loginPanelSelected = this.state.loginPanelSelected;
	    this.props.callBackLPanelSelected (loginPanelSelected);
  	}

	_callBackLoginPanel(data){
		var newState = data;
		this.setState({ loginPanelOn: newState });
		this.props.callBackLoginPanel(newState);
	}

	render() {
		var contentClass;

	    if(this.props.navSideBarOn) {
	     	contentClass = "";
	    } else {
	    	contentClass = "contentNoNav";
	    }

		return (
			
			<center className = { contentClass }>

				<nav>

					<h1>Create Parent Account</h1>
				    <div className="message_box"><h3>Parent? Please register yourself first.</h3></div>


					<form method="post" className="signup_Form">
						<div className="block_connector">
						  <label className="hidden" htmlFor="username">Username</label>
						  <input type="text" className="input_style transparent-button" name="username" id="username" placeholder="Username"  />

						  <label className="hidden" htmlFor="password">Password</label>
						  <input type="password" className="input_style transparent-button" name="password" id="password" placeholder="Password" />

						  <label className="hidden" htmlFor="password_confirm">Password</label>
						  <input type="password" className="input_style transparent-button" name="password_confirm" id="password_confirm" placeholder="Repeat password" />

						  <label className="hidden" htmlFor="email">email</label>
						  <input type="email" className="input_style transparent-button" name="email" id="email" placeholder="Email" />

						  <label className="hidden" htmlFor="firstname">First name</label>
						  <input type="text" className="input_style transparent-button" name="firstname" id="firstname" placeholder="First name" />

						  <label className="hidden" htmlFor="surname">Surname</label>
						  <input type="text" className="input_style transparent-button" name="surname" id="surname" placeholder="Surname" />

						  <label className="hidden" htmlFor="submit">Submit</label><br/>
						  <input id="Signup" type="submit" className="input_style ghost-button lightblue_back" name="submit" value="Signup" onClick={this._submitSignup.bind(this)} />

			              <LoginPanelCancelButton 
				              loginPanelOn = {this.state.loginPanelOn} 
				              callBackLoginPanel = {this._callBackLoginPanel.bind(this)} />

						  <p><a href="javascript:void(0);" className="underlinedLink" title="Go to login" onClick={this._gotoLogin.bind(this)}>Login here</a> if you already signed up.</p>
						</div>
					</form>
				</nav>


			</center>



		)
	}
}