import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import LoginPanelCancelButton from './LoginPanelCancelButton.jsx';

export default class LoginForm extends Component {

  constructor(props, context) {

    super(props, context);
    this.state = {
      navSideBarOn: this.props.navSideBarOn,
      loginPanelSelected: this.props.loginPanelSelected,
      loginPanelOn: this.props.loginPanelOn
    };
  }

  _submitLogin(event) {
    event.preventDefault();
    console.log('submit button clicked!')
    var username = $('[name=login_username]').val();
    var password = $('[name=login_password]').val();


    console.log('user inputs: ', username, password);
    Meteor.loginWithPassword(username, password, function(err){
      if(err) {
        console.log(err.reason);
      } else {
        Bert.alert('You are now logged in!', 'success', 'growl-top-right');
        $('.cancel_action').trigger('click');
        FlowRouter.go('/');
      } 
    });
  }

  _gotoSignup() {
    this.state.loginPanelSelected = "signupForm";
    var loginPanelSelected = this.state.loginPanelSelected;
    this.props.callBackLPanelSelected (loginPanelSelected);
  }

  _callBackLoginPanel(data){
    var newState = data;
    this.setState({ loginPanelOn: newState });
    this.props.callBackLoginPanel(newState);
  }

	render() {    

		return (
			
      <center>
        <h1>Log in</h1>
        <div id="message_box" className="message_box">Please type in your username and password to enter.</div>

        <form method="post">
          <div className="block_connector">
            <label className="hidden" htmlFor="login_username">Username</label>
            <input type="text" className="input_style transparent-button" name="login_username" id="login_username" placeholder="Username"  />
            <label className="hidden" htmlFor="login_password">Password</label>
            <input type="password" className="input_style transparent-button" name="login_password" id="login_password" placeholder="Password" />
          
            <label className="hidden" htmlFor="submit">Submit</label><br/>
            <input id="Login" type="submit" className="input_style ghost-button lightblue_back" name="submit" value="Login" onClick={this._submitLogin.bind(this)} />
            
            <LoginPanelCancelButton 
              loginPanelOn = {this.state.loginPanelOn} 
              callBackLoginPanel = {this._callBackLoginPanel.bind(this)} />

            <p><a href="javascript:void(0);" className="underlinedLink" title="Go to signup" onClick={this._gotoSignup.bind(this)}>Sign up here</a> if you haven't.</p>
          </div>
        </form>

      </center>

		)
	}
}