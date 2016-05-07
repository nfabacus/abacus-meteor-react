var require = meteorInstall({"app":{"accounts":{"AccountsUI.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","react-dom","meteor/ultimatejs:tracker-react","react-addons-css-transition-group","./LoginForm.jsx","./SignupForm.jsx",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// app/accounts/AccountsUI.jsx                                                                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                         //
                                                                                                                      //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                //
                                                                                                                      //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                           //
                                                                                                                      //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                  //
                                                                                                                      //
var _react = require('react');                                                                                        // 1
                                                                                                                      //
var _react2 = _interopRequireDefault(_react);                                                                         //
                                                                                                                      //
var _reactDom = require('react-dom');                                                                                 // 2
                                                                                                                      //
var _reactDom2 = _interopRequireDefault(_reactDom);                                                                   //
                                                                                                                      //
var _ultimatejsTrackerReact = require('meteor/ultimatejs:tracker-react');                                             // 3
                                                                                                                      //
var _ultimatejsTrackerReact2 = _interopRequireDefault(_ultimatejsTrackerReact);                                       //
                                                                                                                      //
var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');                                    // 4
                                                                                                                      //
var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);                         //
                                                                                                                      //
var _LoginForm = require('./LoginForm.jsx');                                                                          // 5
                                                                                                                      //
var _LoginForm2 = _interopRequireDefault(_LoginForm);                                                                 //
                                                                                                                      //
var _SignupForm = require('./SignupForm.jsx');                                                                        // 6
                                                                                                                      //
var _SignupForm2 = _interopRequireDefault(_SignupForm);                                                               //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
var AccountsUI = function (_Component) {                                                                              //
	(0, _inherits3['default'])(AccountsUI, _Component);                                                                  //
                                                                                                                      //
	function AccountsUI(props, context) {                                                                                // 10
		(0, _classCallCheck3['default'])(this, AccountsUI);                                                                 //
                                                                                                                      //
		var _this = (0, _possibleConstructorReturn3['default'])(this, _Component.call(this, props, context));               //
                                                                                                                      //
		_this.state = {                                                                                                     // 13
			navSideBarOn: _this.props.navSideBarOn,                                                                            // 14
			loginPanelOn: _this.props.loginPanelOn,                                                                            // 15
			loginPanelSelected: 'loginForm'                                                                                    // 16
		};                                                                                                                  //
		return _this;                                                                                                       //
	}                                                                                                                    //
                                                                                                                      //
	AccountsUI.prototype._callBackLPanelSelected = function () {                                                         // 8
		function _callBackLPanelSelected(data) {                                                                            //
			var newState = data;                                                                                               // 22
			this.setState({                                                                                                    // 23
				loginPanelSelected: newState                                                                                      // 24
			});                                                                                                                //
			this.props.callBackLoginPanel(newState);                                                                           // 26
		}                                                                                                                   //
                                                                                                                      //
		return _callBackLPanelSelected;                                                                                     //
	}();                                                                                                                 //
                                                                                                                      //
	AccountsUI.prototype._callBackLoginPanel = function () {                                                             // 8
		function _callBackLoginPanel(data) {                                                                                //
			var newState = data;                                                                                               // 30
			this.setState({ loginPanelOn: newState });                                                                         // 31
			this.props.callBackLoginPanel(newState);                                                                           // 32
		}                                                                                                                   //
                                                                                                                      //
		return _callBackLoginPanel;                                                                                         //
	}();                                                                                                                 //
                                                                                                                      //
	AccountsUI.prototype.render = function () {                                                                          // 8
		function render() {                                                                                                 //
			console.log('props for LoginPanel in Account UI is :', this.props.loginPanelOn);                                   // 37
			console.log('state for loginPanelSelected is: ', this.state.loginPanelSelected);                                   // 38
			var panelSelected = void 0;                                                                                        // 39
                                                                                                                      //
			// hide and show loginPanel                                                                                        //
			if (this.props.loginPanelOn) {                                                                                     // 36
				var loginPanelClass = "";                                                                                         // 43
			} else {                                                                                                           //
				var loginPanelClass = "hidden";                                                                                   // 45
			}                                                                                                                  //
                                                                                                                      //
			// show loginForm or SignupForm                                                                                    //
			if (this.state.loginPanelSelected == "loginForm") {                                                                // 36
				panelSelected = _react2['default'].createElement(_LoginForm2['default'], {                                        // 50
					navSideBarOn: this.props.navSideBarOn,                                                                           // 51
					loginPanelOn: this.state.loginPanelOn,                                                                           // 52
					callBackLoginPanel: this._callBackLoginPanel.bind(this),                                                         // 53
					loginPanelSelected: this.state.loginPanelSelected,                                                               // 54
					callBackLPanelSelected: this._callBackLPanelSelected.bind(this) });                                              // 55
			}                                                                                                                  //
                                                                                                                      //
			if (this.state.loginPanelSelected == "signupForm") {                                                               // 58
				panelSelected = _react2['default'].createElement(_SignupForm2['default'], {                                       // 59
					navSideBarOn: this.props.navSideBarOn,                                                                           // 60
					loginPanelOn: this.state.loginPanelOn,                                                                           // 61
					callBackLoginPanel: this._callBackLoginPanel.bind(this),                                                         // 62
					loginPanelSelected: this.state.loginPanelSelected,                                                               // 63
					callBackLPanelSelected: this._callBackLPanelSelected.bind(this) });                                              // 64
			}                                                                                                                  //
                                                                                                                      //
			return _react2['default'].createElement(                                                                           // 68
				'div',                                                                                                            //
				{ id: 'loginPanel', className: loginPanelClass },                                                                 //
				_react2['default'].createElement(                                                                                 //
					'center',                                                                                                        //
					null,                                                                                                            //
					panelSelected                                                                                                    //
				)                                                                                                                 //
			);                                                                                                                 //
		}                                                                                                                   //
                                                                                                                      //
		return render;                                                                                                      //
	}();                                                                                                                 //
                                                                                                                      //
	return AccountsUI;                                                                                                   //
}(_react.Component);                                                                                                  //
                                                                                                                      //
exports['default'] = AccountsUI;                                                                                      //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"LoginForm.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","react-dom","meteor/ultimatejs:tracker-react","react-addons-css-transition-group","./LoginPanelCancelButton.jsx",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// app/accounts/LoginForm.jsx                                                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                         //
                                                                                                                      //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                //
                                                                                                                      //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                           //
                                                                                                                      //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                  //
                                                                                                                      //
var _react = require('react');                                                                                        // 1
                                                                                                                      //
var _react2 = _interopRequireDefault(_react);                                                                         //
                                                                                                                      //
var _reactDom = require('react-dom');                                                                                 // 2
                                                                                                                      //
var _reactDom2 = _interopRequireDefault(_reactDom);                                                                   //
                                                                                                                      //
var _ultimatejsTrackerReact = require('meteor/ultimatejs:tracker-react');                                             // 3
                                                                                                                      //
var _ultimatejsTrackerReact2 = _interopRequireDefault(_ultimatejsTrackerReact);                                       //
                                                                                                                      //
var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');                                    // 4
                                                                                                                      //
var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);                         //
                                                                                                                      //
var _LoginPanelCancelButton = require('./LoginPanelCancelButton.jsx');                                                // 5
                                                                                                                      //
var _LoginPanelCancelButton2 = _interopRequireDefault(_LoginPanelCancelButton);                                       //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
var LoginForm = function (_Component) {                                                                               //
  (0, _inherits3['default'])(LoginForm, _Component);                                                                  //
                                                                                                                      //
  function LoginForm(props, context) {                                                                                // 9
    (0, _classCallCheck3['default'])(this, LoginForm);                                                                //
                                                                                                                      //
    var _this = (0, _possibleConstructorReturn3['default'])(this, _Component.call(this, props, context));             //
                                                                                                                      //
    _this.state = {                                                                                                   // 12
      navSideBarOn: _this.props.navSideBarOn,                                                                         // 13
      loginPanelSelected: _this.props.loginPanelSelected,                                                             // 14
      loginPanelOn: _this.props.loginPanelOn                                                                          // 15
    };                                                                                                                //
    return _this;                                                                                                     //
  }                                                                                                                   //
                                                                                                                      //
  LoginForm.prototype._submitLogin = function () {                                                                    // 7
    function _submitLogin(event) {                                                                                    //
      event.preventDefault();                                                                                         // 20
      console.log('submit button clicked!');                                                                          // 21
      var username = $('[name=login_username]').val();                                                                // 22
      var password = $('[name=login_password]').val();                                                                // 23
                                                                                                                      //
      console.log('user inputs: ', username, password);                                                               // 26
      Meteor.loginWithPassword(username, password, function (err) {                                                   // 27
        if (err) {                                                                                                    // 28
          console.log(err.reason);                                                                                    // 29
        } else {                                                                                                      //
          Bert.alert('You are now logged in!', 'success', 'growl-top-right');                                         // 31
          $('.cancel_action').trigger('click');                                                                       // 32
          FlowRouter.go('/');                                                                                         // 33
        }                                                                                                             //
      });                                                                                                             //
    }                                                                                                                 //
                                                                                                                      //
    return _submitLogin;                                                                                              //
  }();                                                                                                                //
                                                                                                                      //
  LoginForm.prototype._gotoSignup = function () {                                                                     // 7
    function _gotoSignup() {                                                                                          //
      this.state.loginPanelSelected = "signupForm";                                                                   // 39
      var loginPanelSelected = this.state.loginPanelSelected;                                                         // 40
      this.props.callBackLPanelSelected(loginPanelSelected);                                                          // 41
    }                                                                                                                 //
                                                                                                                      //
    return _gotoSignup;                                                                                               //
  }();                                                                                                                //
                                                                                                                      //
  LoginForm.prototype._callBackLoginPanel = function () {                                                             // 7
    function _callBackLoginPanel(data) {                                                                              //
      var newState = data;                                                                                            // 45
      this.setState({ loginPanelOn: newState });                                                                      // 46
      this.props.callBackLoginPanel(newState);                                                                        // 47
    }                                                                                                                 //
                                                                                                                      //
    return _callBackLoginPanel;                                                                                       //
  }();                                                                                                                //
                                                                                                                      //
  LoginForm.prototype.render = function () {                                                                          // 7
    function render() {                                                                                               //
                                                                                                                      //
      return _react2['default'].createElement(                                                                        // 52
        'center',                                                                                                     //
        null,                                                                                                         //
        _react2['default'].createElement(                                                                             //
          'h1',                                                                                                       //
          null,                                                                                                       //
          'Log in'                                                                                                    //
        ),                                                                                                            //
        _react2['default'].createElement(                                                                             //
          'div',                                                                                                      //
          { id: 'message_box', className: 'message_box' },                                                            //
          'Please type in your username and password to enter.'                                                       //
        ),                                                                                                            //
        _react2['default'].createElement(                                                                             //
          'form',                                                                                                     //
          { method: 'post' },                                                                                         //
          _react2['default'].createElement(                                                                           //
            'div',                                                                                                    //
            { className: 'block_connector' },                                                                         //
            _react2['default'].createElement(                                                                         //
              'label',                                                                                                //
              { className: 'hidden', htmlFor: 'login_username' },                                                     //
              'Username'                                                                                              //
            ),                                                                                                        //
            _react2['default'].createElement('input', { type: 'text', className: 'input_style transparent-button', name: 'login_username', id: 'login_username', placeholder: 'Username' }),
            _react2['default'].createElement(                                                                         //
              'label',                                                                                                //
              { className: 'hidden', htmlFor: 'login_password' },                                                     //
              'Password'                                                                                              //
            ),                                                                                                        //
            _react2['default'].createElement('input', { type: 'password', className: 'input_style transparent-button', name: 'login_password', id: 'login_password', placeholder: 'Password' }),
            _react2['default'].createElement(                                                                         //
              'label',                                                                                                //
              { className: 'hidden', htmlFor: 'submit' },                                                             //
              'Submit'                                                                                                //
            ),                                                                                                        //
            _react2['default'].createElement('br', null),                                                             //
            _react2['default'].createElement('input', { id: 'Login', type: 'submit', className: 'input_style ghost-button lightblue_back', name: 'submit', value: 'Login', onClick: this._submitLogin.bind(this) }),
            _react2['default'].createElement(_LoginPanelCancelButton2['default'], {                                   //
              loginPanelOn: this.state.loginPanelOn,                                                                  // 69
              callBackLoginPanel: this._callBackLoginPanel.bind(this) }),                                             // 70
            _react2['default'].createElement(                                                                         //
              'p',                                                                                                    //
              null,                                                                                                   //
              _react2['default'].createElement(                                                                       //
                'a',                                                                                                  //
                { href: 'javascript:void(0);', className: 'underlinedLink', title: 'Go to signup', onClick: this._gotoSignup.bind(this) },
                'Sign up here'                                                                                        //
              ),                                                                                                      //
              ' if you haven\'t.'                                                                                     //
            )                                                                                                         //
          )                                                                                                           //
        )                                                                                                             //
      );                                                                                                              //
    }                                                                                                                 //
                                                                                                                      //
    return render;                                                                                                    //
  }();                                                                                                                //
                                                                                                                      //
  return LoginForm;                                                                                                   //
}(_react.Component);                                                                                                  //
                                                                                                                      //
exports['default'] = LoginForm;                                                                                       //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"LoginLogoutButton.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","react-dom","meteor/ultimatejs:tracker-react","react-addons-css-transition-group",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// app/accounts/LoginLogoutButton.jsx                                                                                 //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                         //
                                                                                                                      //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                //
                                                                                                                      //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                           //
                                                                                                                      //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                  //
                                                                                                                      //
var _react = require('react');                                                                                        // 1
                                                                                                                      //
var _react2 = _interopRequireDefault(_react);                                                                         //
                                                                                                                      //
var _reactDom = require('react-dom');                                                                                 // 2
                                                                                                                      //
var _reactDom2 = _interopRequireDefault(_reactDom);                                                                   //
                                                                                                                      //
var _ultimatejsTrackerReact = require('meteor/ultimatejs:tracker-react');                                             // 3
                                                                                                                      //
var _ultimatejsTrackerReact2 = _interopRequireDefault(_ultimatejsTrackerReact);                                       //
                                                                                                                      //
var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');                                    // 4
                                                                                                                      //
var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);                         //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
var LoginLogoutButton = function (_TrackerReact) {                                                                    //
	(0, _inherits3['default'])(LoginLogoutButton, _TrackerReact);                                                        //
                                                                                                                      //
	function LoginLogoutButton(props, context) {                                                                         // 7
		(0, _classCallCheck3['default'])(this, LoginLogoutButton);                                                          //
                                                                                                                      //
		var _this = (0, _possibleConstructorReturn3['default'])(this, _TrackerReact.call(this, props, context));            //
                                                                                                                      //
		_this.state = {                                                                                                     // 10
			loginPanelOn: _this.props.loginPanelOn                                                                             // 11
		};                                                                                                                  //
		return _this;                                                                                                       //
	}                                                                                                                    //
                                                                                                                      //
	LoginLogoutButton.prototype.getUserData = function () {                                                              // 6
		function getUserData() {                                                                                            //
			var currentUser = Meteor.user();                                                                                   // 16
			return currentUser;                                                                                                // 17
		}                                                                                                                   //
                                                                                                                      //
		return getUserData;                                                                                                 //
	}();                                                                                                                 //
                                                                                                                      //
	LoginLogoutButton.prototype._callBackLoginPanel = function () {                                                      // 6
		function _callBackLoginPanel() {                                                                                    //
			var newState = !this.state.loginPanelOn;                                                                           // 21
			this.setState({ loginPanelOn: newState });                                                                         // 22
			this.props.callBackLoginPanel(newState);                                                                           // 23
		}                                                                                                                   //
                                                                                                                      //
		return _callBackLoginPanel;                                                                                         //
	}();                                                                                                                 //
                                                                                                                      //
	LoginLogoutButton.prototype._handleLogout = function () {                                                            // 6
		function _handleLogout() {                                                                                          //
			Meteor.logout();                                                                                                   // 27
			Bert.alert('You are now logged out. Bye for now!', 'success', 'growl-top-right');                                  // 28
		}                                                                                                                   //
                                                                                                                      //
		return _handleLogout;                                                                                               //
	}();                                                                                                                 //
                                                                                                                      //
	LoginLogoutButton.prototype.render = function () {                                                                   // 6
		function render() {                                                                                                 //
			var currentUser = this.getUserData();                                                                              // 32
                                                                                                                      //
			var loginButton = void 0;                                                                                          // 34
			var title = this.props.title;                                                                                      // 35
                                                                                                                      //
			if (currentUser) {                                                                                                 // 38
				loginButton = _react2['default'].createElement(                                                                   // 39
					'span',                                                                                                          //
					{ id: 'loginToggleBtn', onClick: this._handleLogout.bind(this) },                                                //
					'Logout'                                                                                                         //
				);                                                                                                                //
			} else {                                                                                                           //
				if (title) {                                                                                                      // 41
					loginButton = _react2['default'].createElement(                                                                  // 42
						'span',                                                                                                         //
						{ id: 'loginToggleBtn', onClick: this._callBackLoginPanel.bind(this) },                                         //
						title                                                                                                           //
					);                                                                                                               //
				} else {                                                                                                          //
					loginButton = _react2['default'].createElement(                                                                  // 44
						'span',                                                                                                         //
						{ id: 'loginToggleBtn', onClick: this._callBackLoginPanel.bind(this) },                                         //
						'Login/Signup'                                                                                                  //
					);                                                                                                               //
				}                                                                                                                 //
			}                                                                                                                  //
                                                                                                                      //
			return _react2['default'].createElement(                                                                           // 48
				'span',                                                                                                           //
				null,                                                                                                             //
				loginButton                                                                                                       //
			);                                                                                                                 //
		}                                                                                                                   //
                                                                                                                      //
		return render;                                                                                                      //
	}();                                                                                                                 //
                                                                                                                      //
	return LoginLogoutButton;                                                                                            //
}((0, _ultimatejsTrackerReact2['default'])(_react.Component));                                                        //
                                                                                                                      //
exports['default'] = LoginLogoutButton;                                                                               //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"LoginPanelCancelButton.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","react-dom","meteor/ultimatejs:tracker-react","react-addons-css-transition-group",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// app/accounts/LoginPanelCancelButton.jsx                                                                            //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                         //
                                                                                                                      //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                //
                                                                                                                      //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                           //
                                                                                                                      //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                  //
                                                                                                                      //
var _react = require('react');                                                                                        // 1
                                                                                                                      //
var _react2 = _interopRequireDefault(_react);                                                                         //
                                                                                                                      //
var _reactDom = require('react-dom');                                                                                 // 2
                                                                                                                      //
var _reactDom2 = _interopRequireDefault(_reactDom);                                                                   //
                                                                                                                      //
var _ultimatejsTrackerReact = require('meteor/ultimatejs:tracker-react');                                             // 3
                                                                                                                      //
var _ultimatejsTrackerReact2 = _interopRequireDefault(_ultimatejsTrackerReact);                                       //
                                                                                                                      //
var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');                                    // 4
                                                                                                                      //
var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);                         //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
var LoginPanelCancelButton = function (_Component) {                                                                  //
  (0, _inherits3['default'])(LoginPanelCancelButton, _Component);                                                     //
                                                                                                                      //
  function LoginPanelCancelButton(props, context) {                                                                   // 8
    (0, _classCallCheck3['default'])(this, LoginPanelCancelButton);                                                   //
                                                                                                                      //
    var _this = (0, _possibleConstructorReturn3['default'])(this, _Component.call(this, props, context));             //
                                                                                                                      //
    _this.state = {                                                                                                   // 11
      loginPanelOn: _this.props.loginPanelOn                                                                          // 12
    };                                                                                                                //
    return _this;                                                                                                     //
  }                                                                                                                   //
                                                                                                                      //
  LoginPanelCancelButton.prototype._cancelLoginPanel = function () {                                                  // 6
    function _cancelLoginPanel(e) {                                                                                   //
      e.preventDefault();                                                                                             // 17
      var newState = false;                                                                                           // 18
      this.setState({                                                                                                 // 19
        loginPanelOn: newState                                                                                        // 20
      });                                                                                                             //
                                                                                                                      //
      this.props.callBackLoginPanel(newState);                                                                        // 23
    }                                                                                                                 //
                                                                                                                      //
    return _cancelLoginPanel;                                                                                         //
  }();                                                                                                                //
                                                                                                                      //
  LoginPanelCancelButton.prototype.render = function () {                                                             // 6
    function render() {                                                                                               //
                                                                                                                      //
      if (this.props.loginPanelOn) {                                                                                  // 29
        var loginPanelClass = "";                                                                                     // 30
      } else {                                                                                                        //
        var loginPanelClass = "hidden";                                                                               // 32
      }                                                                                                               //
                                                                                                                      //
      return _react2['default'].createElement(                                                                        // 35
        'button',                                                                                                     //
        { className: 'cancel_action input_style ghost-button red_back', onClick: this._cancelLoginPanel.bind(this) },
        'Cancel'                                                                                                      //
      );                                                                                                              //
    }                                                                                                                 //
                                                                                                                      //
    return render;                                                                                                    //
  }();                                                                                                                //
                                                                                                                      //
  return LoginPanelCancelButton;                                                                                      //
}(_react.Component);                                                                                                  //
                                                                                                                      //
exports['default'] = LoginPanelCancelButton;                                                                          //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"SignupForm.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","react-dom","meteor/ultimatejs:tracker-react","react-addons-css-transition-group","./LoginPanelCancelButton.jsx",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// app/accounts/SignupForm.jsx                                                                                        //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                         //
                                                                                                                      //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                //
                                                                                                                      //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                           //
                                                                                                                      //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                  //
                                                                                                                      //
var _react = require('react');                                                                                        // 1
                                                                                                                      //
var _react2 = _interopRequireDefault(_react);                                                                         //
                                                                                                                      //
var _reactDom = require('react-dom');                                                                                 // 2
                                                                                                                      //
var _reactDom2 = _interopRequireDefault(_reactDom);                                                                   //
                                                                                                                      //
var _ultimatejsTrackerReact = require('meteor/ultimatejs:tracker-react');                                             // 3
                                                                                                                      //
var _ultimatejsTrackerReact2 = _interopRequireDefault(_ultimatejsTrackerReact);                                       //
                                                                                                                      //
var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');                                    // 4
                                                                                                                      //
var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);                         //
                                                                                                                      //
var _LoginPanelCancelButton = require('./LoginPanelCancelButton.jsx');                                                // 5
                                                                                                                      //
var _LoginPanelCancelButton2 = _interopRequireDefault(_LoginPanelCancelButton);                                       //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
var SignupForm = function (_Component) {                                                                              //
	(0, _inherits3['default'])(SignupForm, _Component);                                                                  //
                                                                                                                      //
	function SignupForm(props, context) {                                                                                // 9
		(0, _classCallCheck3['default'])(this, SignupForm);                                                                 //
                                                                                                                      //
		var _this = (0, _possibleConstructorReturn3['default'])(this, _Component.call(this, props, context));               //
                                                                                                                      //
		_this.state = {                                                                                                     // 12
			navSideBarOn: _this.props.navSideBarOn,                                                                            // 13
			loginPanelSelected: _this.props.loginPanelSelected,                                                                // 14
			loginPanelOn: _this.props.loginPanelOn                                                                             // 15
		};                                                                                                                  //
		return _this;                                                                                                       //
	}                                                                                                                    //
                                                                                                                      //
	SignupForm.prototype._submitSignup = function () {                                                                   // 7
		function _submitSignup(event) {                                                                                     //
			event.preventDefault();                                                                                            // 20
			console.log('submit button clicked!');                                                                             // 21
			var username = $('[name=username]').val();                                                                         // 22
			var email = $('[name=email]').val();                                                                               // 23
			var password = $('[name=password]').val();                                                                         // 24
			var password_confirm = $('[name=password_confirm]').val();                                                         // 25
			var firstname = $('[name=firstname]').val();                                                                       // 26
			var surname = $('[name=surname]').val();                                                                           // 27
                                                                                                                      //
			console.log('user inputs: ', username, email, password, password_confirm, firstname, surname);                     // 29
			var userInfo = {                                                                                                   // 30
				username: username,                                                                                               // 31
				email: email,                                                                                                     // 32
				password: password,                                                                                               // 33
				password_confirm: password_confirm,                                                                               // 34
				firstname: firstname,                                                                                             // 35
				surname: surname                                                                                                  // 36
			};                                                                                                                 //
                                                                                                                      //
			Accounts.createUser({                                                                                              // 39
				username: userInfo.username,                                                                                      // 40
				password: userInfo.password,                                                                                      // 41
				email: userInfo.email,                                                                                            // 42
				firstname: userInfo.firstname,                                                                                    // 43
				surname: userInfo.surname                                                                                         // 44
                                                                                                                      //
			}, function (err) {                                                                                                //
				if (err) {                                                                                                        // 47
					console.log(err.reason);                                                                                         // 48
					console.log("error!!");                                                                                          // 49
				} else {                                                                                                          //
					Bert.alert('Success! You are signed up and now logged in!', 'success', 'growl-top-right');                       // 51
					$('.cancel_action').trigger('click');                                                                            // 52
					FlowRouter.go('/');                                                                                              // 53
				}                                                                                                                 //
			});                                                                                                                //
		}                                                                                                                   //
                                                                                                                      //
		return _submitSignup;                                                                                               //
	}();                                                                                                                 //
                                                                                                                      //
	SignupForm.prototype._gotoLogin = function () {                                                                      // 7
		function _gotoLogin() {                                                                                             //
			this.state.loginPanelSelected = "loginForm";                                                                       // 59
			var loginPanelSelected = this.state.loginPanelSelected;                                                            // 60
			this.props.callBackLPanelSelected(loginPanelSelected);                                                             // 61
		}                                                                                                                   //
                                                                                                                      //
		return _gotoLogin;                                                                                                  //
	}();                                                                                                                 //
                                                                                                                      //
	SignupForm.prototype._callBackLoginPanel = function () {                                                             // 7
		function _callBackLoginPanel(data) {                                                                                //
			var newState = data;                                                                                               // 65
			this.setState({ loginPanelOn: newState });                                                                         // 66
			this.props.callBackLoginPanel(newState);                                                                           // 67
		}                                                                                                                   //
                                                                                                                      //
		return _callBackLoginPanel;                                                                                         //
	}();                                                                                                                 //
                                                                                                                      //
	SignupForm.prototype.render = function () {                                                                          // 7
		function render() {                                                                                                 //
			var contentClass;                                                                                                  // 71
                                                                                                                      //
			if (this.props.navSideBarOn) {                                                                                     // 73
				contentClass = "";                                                                                                // 74
			} else {                                                                                                           //
				contentClass = "contentNoNav";                                                                                    // 76
			}                                                                                                                  //
                                                                                                                      //
			return _react2['default'].createElement(                                                                           // 79
				'center',                                                                                                         //
				{ className: contentClass },                                                                                      //
				_react2['default'].createElement(                                                                                 //
					'nav',                                                                                                           //
					null,                                                                                                            //
					_react2['default'].createElement(                                                                                //
						'h1',                                                                                                           //
						null,                                                                                                           //
						'Create Parent Account'                                                                                         //
					),                                                                                                               //
					_react2['default'].createElement(                                                                                //
						'div',                                                                                                          //
						{ className: 'message_box' },                                                                                   //
						_react2['default'].createElement(                                                                               //
							'h3',                                                                                                          //
							null,                                                                                                          //
							'Parent? Please register yourself first.'                                                                      //
						)                                                                                                               //
					),                                                                                                               //
					_react2['default'].createElement(                                                                                //
						'form',                                                                                                         //
						{ method: 'post', className: 'signup_Form' },                                                                   //
						_react2['default'].createElement(                                                                               //
							'div',                                                                                                         //
							{ className: 'block_connector' },                                                                              //
							_react2['default'].createElement(                                                                              //
								'label',                                                                                                      //
								{ className: 'hidden', htmlFor: 'username' },                                                                 //
								'Username'                                                                                                    //
							),                                                                                                             //
							_react2['default'].createElement('input', { type: 'text', className: 'input_style transparent-button', name: 'username', id: 'username', placeholder: 'Username' }),
							_react2['default'].createElement(                                                                              //
								'label',                                                                                                      //
								{ className: 'hidden', htmlFor: 'password' },                                                                 //
								'Password'                                                                                                    //
							),                                                                                                             //
							_react2['default'].createElement('input', { type: 'password', className: 'input_style transparent-button', name: 'password', id: 'password', placeholder: 'Password' }),
							_react2['default'].createElement(                                                                              //
								'label',                                                                                                      //
								{ className: 'hidden', htmlFor: 'password_confirm' },                                                         //
								'Password'                                                                                                    //
							),                                                                                                             //
							_react2['default'].createElement('input', { type: 'password', className: 'input_style transparent-button', name: 'password_confirm', id: 'password_confirm', placeholder: 'Repeat password' }),
							_react2['default'].createElement(                                                                              //
								'label',                                                                                                      //
								{ className: 'hidden', htmlFor: 'email' },                                                                    //
								'email'                                                                                                       //
							),                                                                                                             //
							_react2['default'].createElement('input', { type: 'email', className: 'input_style transparent-button', name: 'email', id: 'email', placeholder: 'Email' }),
							_react2['default'].createElement(                                                                              //
								'label',                                                                                                      //
								{ className: 'hidden', htmlFor: 'firstname' },                                                                //
								'First name'                                                                                                  //
							),                                                                                                             //
							_react2['default'].createElement('input', { type: 'text', className: 'input_style transparent-button', name: 'firstname', id: 'firstname', placeholder: 'First name' }),
							_react2['default'].createElement(                                                                              //
								'label',                                                                                                      //
								{ className: 'hidden', htmlFor: 'surname' },                                                                  //
								'Surname'                                                                                                     //
							),                                                                                                             //
							_react2['default'].createElement('input', { type: 'text', className: 'input_style transparent-button', name: 'surname', id: 'surname', placeholder: 'Surname' }),
							_react2['default'].createElement(                                                                              //
								'label',                                                                                                      //
								{ className: 'hidden', htmlFor: 'submit' },                                                                   //
								'Submit'                                                                                                      //
							),                                                                                                             //
							_react2['default'].createElement('br', null),                                                                  //
							_react2['default'].createElement('input', { id: 'Signup', type: 'submit', className: 'input_style ghost-button lightblue_back', name: 'submit', value: 'Signup', onClick: this._submitSignup.bind(this) }),
							_react2['default'].createElement(_LoginPanelCancelButton2['default'], {                                        //
								loginPanelOn: this.state.loginPanelOn,                                                                        // 113
								callBackLoginPanel: this._callBackLoginPanel.bind(this) }),                                                   // 114
							_react2['default'].createElement(                                                                              //
								'p',                                                                                                          //
								null,                                                                                                         //
								_react2['default'].createElement(                                                                             //
									'a',                                                                                                         //
									{ href: 'javascript:void(0);', className: 'underlinedLink', title: 'Go to login', onClick: this._gotoLogin.bind(this) },
									'Login here'                                                                                                 //
								),                                                                                                            //
								' if you already signed up.'                                                                                  //
							)                                                                                                              //
						)                                                                                                               //
					)                                                                                                                //
				)                                                                                                                 //
			);                                                                                                                 //
		}                                                                                                                   //
                                                                                                                      //
		return render;                                                                                                      //
	}();                                                                                                                 //
                                                                                                                      //
	return SignupForm;                                                                                                   //
}(_react.Component);                                                                                                  //
                                                                                                                      //
exports['default'] = SignupForm;                                                                                      //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"layouts":{"Footer.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/ultimatejs:tracker-react","react-addons-css-transition-group",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// app/layouts/Footer.jsx                                                                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                         //
                                                                                                                      //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                //
                                                                                                                      //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                           //
                                                                                                                      //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                  //
                                                                                                                      //
var _react = require('react');                                                                                        // 1
                                                                                                                      //
var _react2 = _interopRequireDefault(_react);                                                                         //
                                                                                                                      //
var _ultimatejsTrackerReact = require('meteor/ultimatejs:tracker-react');                                             // 2
                                                                                                                      //
var _ultimatejsTrackerReact2 = _interopRequireDefault(_ultimatejsTrackerReact);                                       //
                                                                                                                      //
var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');                                    // 3
                                                                                                                      //
var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);                         //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
var Footer = function (_Component) {                                                                                  //
	(0, _inherits3['default'])(Footer, _Component);                                                                      //
                                                                                                                      //
	function Footer() {                                                                                                  //
		(0, _classCallCheck3['default'])(this, Footer);                                                                     //
		return (0, _possibleConstructorReturn3['default'])(this, _Component.apply(this, arguments));                        //
	}                                                                                                                    //
                                                                                                                      //
	Footer.prototype.render = function () {                                                                              //
		function render() {                                                                                                 //
			if (this.props.navSideBarOn) {                                                                                     // 8
				footerClass = "";                                                                                                 // 9
			} else {                                                                                                           //
				footerClass = "footerNoNav";                                                                                      // 11
			}                                                                                                                  //
                                                                                                                      //
			return _react2['default'].createElement(                                                                           // 14
				'footer',                                                                                                         //
				{ id: 'footer', className: footerClass },                                                                         //
				_react2['default'].createElement(                                                                                 //
					'ul',                                                                                                            //
					null,                                                                                                            //
					_react2['default'].createElement(                                                                                //
						'li',                                                                                                           //
						null,                                                                                                           //
						_react2['default'].createElement('a', { href: 'https://www.youtube.com/user/abacuslearning?feature=watch', className: 'fa fa-youtube' })
					),                                                                                                               //
					_react2['default'].createElement(                                                                                //
						'li',                                                                                                           //
						null,                                                                                                           //
						_react2['default'].createElement('a', { href: 'https://www.facebook.com/Abacus-Maths-Learning-Course-211119545628882/timeline/', className: 'fa fa-facebook' })
					),                                                                                                               //
					_react2['default'].createElement(                                                                                //
						'li',                                                                                                           //
						null,                                                                                                           //
						_react2['default'].createElement('a', { href: 'https://plus.google.com/+AbacusmathsInfo/about', className: 'fa fa-google-plus' })
					),                                                                                                               //
					_react2['default'].createElement(                                                                                //
						'li',                                                                                                           //
						null,                                                                                                           //
						_react2['default'].createElement('a', { href: 'https://twitter.com/abacusmaths', target: '_blank', className: 'fa fa-twitter' })
					),                                                                                                               //
					_react2['default'].createElement(                                                                                //
						'li',                                                                                                           //
						null,                                                                                                           //
						_react2['default'].createElement('a', { href: 'https://www.linkedin.com/in/noby-fujioka-6741656', target: '_blank', className: 'fa fa-linkedin' })
					),                                                                                                               //
					_react2['default'].createElement(                                                                                //
						'li',                                                                                                           //
						null,                                                                                                           //
						_react2['default'].createElement('a', { href: 'mailto:contact@abacusmaths.info', target: '_blank', className: 'fa fa-envelope-o' })
					)                                                                                                                //
				),                                                                                                                //
				_react2['default'].createElement(                                                                                 //
					'ul',                                                                                                            //
					null,                                                                                                            //
					_react2['default'].createElement(                                                                                //
						'li',                                                                                                           //
						{ className: 'copyright' },                                                                                     //
						'© Abacus Learning Lab'                                                                                         //
					)                                                                                                                //
				)                                                                                                                 //
			);                                                                                                                 //
		}                                                                                                                   //
                                                                                                                      //
		return render;                                                                                                      //
	}();                                                                                                                 //
                                                                                                                      //
	return Footer;                                                                                                       //
}(_react.Component);                                                                                                  //
                                                                                                                      //
exports['default'] = Footer;                                                                                          //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"Header.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/ultimatejs:tracker-react","react-addons-css-transition-group","./NavButton.jsx","../accounts/LoginLogoutButton.jsx",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// app/layouts/Header.jsx                                                                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                         //
                                                                                                                      //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                //
                                                                                                                      //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                           //
                                                                                                                      //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                  //
                                                                                                                      //
var _react = require('react');                                                                                        // 1
                                                                                                                      //
var _react2 = _interopRequireDefault(_react);                                                                         //
                                                                                                                      //
var _ultimatejsTrackerReact = require('meteor/ultimatejs:tracker-react');                                             // 2
                                                                                                                      //
var _ultimatejsTrackerReact2 = _interopRequireDefault(_ultimatejsTrackerReact);                                       //
                                                                                                                      //
var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');                                    // 3
                                                                                                                      //
var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);                         //
                                                                                                                      //
var _NavButton = require('./NavButton.jsx');                                                                          // 4
                                                                                                                      //
var _NavButton2 = _interopRequireDefault(_NavButton);                                                                 //
                                                                                                                      //
var _LoginLogoutButton = require('../accounts/LoginLogoutButton.jsx');                                                // 5
                                                                                                                      //
var _LoginLogoutButton2 = _interopRequireDefault(_LoginLogoutButton);                                                 //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
var Header = function (_TrackerReact) {                                                                               //
	(0, _inherits3['default'])(Header, _TrackerReact);                                                                   //
                                                                                                                      //
	function Header(props, context) {                                                                                    // 8
		(0, _classCallCheck3['default'])(this, Header);                                                                     //
                                                                                                                      //
		var _this = (0, _possibleConstructorReturn3['default'])(this, _TrackerReact.call(this, props, context));            //
                                                                                                                      //
		_this.state = {                                                                                                     // 11
			navButtonOn: _this.props.navButtonOn,                                                                              // 12
			loginPanelOn: _this.props.loginPanelOn                                                                             // 13
		};                                                                                                                  //
                                                                                                                      //
		return _this;                                                                                                       //
	}                                                                                                                    //
                                                                                                                      //
	Header.prototype._callBackLoginPanel = function () {                                                                 // 7
		function _callBackLoginPanel(data) {                                                                                //
			var newState = data;                                                                                               // 19
			this.setState({ loginPanelOn: newState });                                                                         // 20
			this.props.callBackLoginPanel(newState);                                                                           // 21
		}                                                                                                                   //
                                                                                                                      //
		return _callBackLoginPanel;                                                                                         //
	}();                                                                                                                 //
                                                                                                                      //
	Header.prototype._callBackNav = function () {                                                                        // 7
		function _callBackNav(data) {                                                                                       //
			var newState = data;                                                                                               // 25
			this.setState({ navButtonOn: newState });                                                                          // 26
			this.props.callBackNav(newState);                                                                                  // 27
		}                                                                                                                   //
                                                                                                                      //
		return _callBackNav;                                                                                                //
	}();                                                                                                                 //
                                                                                                                      //
	Header.prototype.render = function () {                                                                              // 7
		function render() {                                                                                                 //
                                                                                                                      //
			this.state.loginPanelOn = this.props.loginPanelOn;                                                                 // 32
                                                                                                                      //
			return _react2['default'].createElement(                                                                           // 34
				'header',                                                                                                         //
				{ id: 'nav_header' },                                                                                             //
				_react2['default'].createElement(                                                                                 //
					'span',                                                                                                          //
					{ className: 'header_title' },                                                                                   //
					_react2['default'].createElement(                                                                                //
						'a',                                                                                                            //
						{ href: '/' },                                                                                                  //
						'ABACUS LEARNING LAB'                                                                                           //
					)                                                                                                                //
				),                                                                                                                //
				_react2['default'].createElement(                                                                                 //
					'button',                                                                                                        //
					{ id: 'toggle', className: 'transparent-button smallBtn' },                                                      //
					'Start editing'                                                                                                  //
				),                                                                                                                //
				_react2['default'].createElement(                                                                                 //
					'button',                                                                                                        //
					{ id: 'reset', className: 'transparent-button smallBtn' },                                                       //
					'Reset content'                                                                                                  //
				),                                                                                                                //
				_react2['default'].createElement(                                                                                 //
					'button',                                                                                                        //
					{ id: 'save', className: 'transparent-button smallBtn' },                                                        //
					'Save content'                                                                                                   //
				),                                                                                                                //
				_react2['default'].createElement(_NavButton2['default'], { initialNavOn: this.props.navButtonOn, callBack: this._callBackNav.bind(this) }),
				_react2['default'].createElement(                                                                                 //
					'nav',                                                                                                           //
					{ className: 'horizontal_nav' },                                                                                 //
					_react2['default'].createElement(                                                                                //
						'a',                                                                                                            //
						{ href: '/' },                                                                                                  //
						'Home'                                                                                                          //
					),                                                                                                               //
					_react2['default'].createElement(                                                                                //
						'a',                                                                                                            //
						{ href: '/resolutions' },                                                                                       //
						'Resolutions'                                                                                                   //
					),                                                                                                               //
					_react2['default'].createElement(                                                                                //
						'a',                                                                                                            //
						{ href: '/about' },                                                                                             //
						'About'                                                                                                         //
					),                                                                                                               //
					_react2['default'].createElement(                                                                                //
						'a',                                                                                                            //
						{ href: '/testpage' },                                                                                          //
						'Test Page'                                                                                                     //
					),                                                                                                               //
					_react2['default'].createElement(                                                                                //
						'a',                                                                                                            //
						{ href: 'javascript:void(0);', className: 'transparent-button smallBtn' },                                      //
						_react2['default'].createElement(_LoginLogoutButton2['default'], {                                              //
							loginPanelOn: this.state.loginPanelOn,                                                                         // 52
							callBackLoginPanel: this._callBackLoginPanel.bind(this) })                                                     // 53
					)                                                                                                                //
				)                                                                                                                 //
			);                                                                                                                 //
		}                                                                                                                   //
                                                                                                                      //
		return render;                                                                                                      //
	}();                                                                                                                 //
                                                                                                                      //
	return Header;                                                                                                       //
}((0, _ultimatejsTrackerReact2['default'])(_react.Component));                                                        //
                                                                                                                      //
exports['default'] = Header;                                                                                          //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"MainContentSection.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/ultimatejs:tracker-react","react-addons-css-transition-group","../accounts/AccountsUI.jsx",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// app/layouts/MainContentSection.jsx                                                                                 //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                         //
                                                                                                                      //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                //
                                                                                                                      //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                           //
                                                                                                                      //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                  //
                                                                                                                      //
var _react = require('react');                                                                                        // 1
                                                                                                                      //
var _react2 = _interopRequireDefault(_react);                                                                         //
                                                                                                                      //
var _ultimatejsTrackerReact = require('meteor/ultimatejs:tracker-react');                                             // 2
                                                                                                                      //
var _ultimatejsTrackerReact2 = _interopRequireDefault(_ultimatejsTrackerReact);                                       //
                                                                                                                      //
var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');                                    // 3
                                                                                                                      //
var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);                         //
                                                                                                                      //
var _AccountsUI = require('../accounts/AccountsUI.jsx');                                                              // 4
                                                                                                                      //
var _AccountsUI2 = _interopRequireDefault(_AccountsUI);                                                               //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
var MainContentSection = function (_Component) {                                                                      //
	(0, _inherits3['default'])(MainContentSection, _Component);                                                          //
                                                                                                                      //
	function MainContentSection(props, context) {                                                                        // 7
		(0, _classCallCheck3['default'])(this, MainContentSection);                                                         //
                                                                                                                      //
		var _this = (0, _possibleConstructorReturn3['default'])(this, _Component.call(this, props, context));               //
                                                                                                                      //
		_this.state = {                                                                                                     // 10
			navSideBarOn: _this.props.navSideBarOn,                                                                            // 11
			loginPanelOn: _this.props.loginPanelOn                                                                             // 12
		};                                                                                                                  //
                                                                                                                      //
		return _this;                                                                                                       //
	}                                                                                                                    //
                                                                                                                      //
	MainContentSection.prototype._callBackLoginPanel = function () {                                                     // 6
		function _callBackLoginPanel(data) {                                                                                //
			var newState = data;                                                                                               // 18
			this.setState({ loginPanelOn: newState });                                                                         // 19
			this.props.callBackLoginPanel(newState);                                                                           // 20
		}                                                                                                                   //
                                                                                                                      //
		return _callBackLoginPanel;                                                                                         //
	}();                                                                                                                 //
                                                                                                                      //
	MainContentSection.prototype.render = function () {                                                                  // 6
		function render() {                                                                                                 //
			var contentClass;                                                                                                  // 24
			var content_inner_actual_class;                                                                                    // 25
                                                                                                                      //
			if (this.props.navSideBarOn) {                                                                                     // 27
				contentClass = "";                                                                                                // 28
			} else {                                                                                                           //
				contentClass = "contentNoNav";                                                                                    // 30
			}                                                                                                                  //
                                                                                                                      //
			if (this.props.loginPanelOn) {                                                                                     // 33
				content_inner_actual_class = "hidden";                                                                            // 34
			} else {                                                                                                           //
				content_inner_actual_class = "";                                                                                  // 36
			}                                                                                                                  //
                                                                                                                      //
			return _react2['default'].createElement(                                                                           // 39
				_reactAddonsCssTransitionGroup2['default'],                                                                       //
				{                                                                                                                 //
					component: 'div',                                                                                                // 41
					transitionName: 'route',                                                                                         // 42
					transitionEnterTimeout: 600,                                                                                     // 43
					transitionAppearTimeout: 600,                                                                                    // 44
					transitionLeaveTimeout: 400,                                                                                     // 45
					transitionAppear: true },                                                                                        // 46
				_react2['default'].createElement(                                                                                 //
					'section',                                                                                                       //
					{ id: 'content', className: contentClass },                                                                      //
					_react2['default'].createElement(                                                                                //
						'div',                                                                                                          //
						{ id: 'content_inner' },                                                                                        //
						_react2['default'].createElement(_AccountsUI2['default'], {                                                     //
							navSideBarOn: this.state.navButtonOn,                                                                          // 54
							loginPanelOn: this.props.loginPanelOn,                                                                         // 55
							callBackLoginPanel: this._callBackLoginPanel.bind(this) }),                                                    // 56
						_react2['default'].createElement('div', { id: 'spinner', className: 'spinner1' }),                              //
						_react2['default'].createElement(                                                                               //
							'div',                                                                                                         //
							{ id: 'content_inner_actual_content', className: content_inner_actual_class },                                 //
							' ',                                                                                                           //
							this.props.content,                                                                                            //
							' '                                                                                                            //
						),                                                                                                              //
						_react2['default'].createElement('div', { className: 'sub_menu' }),                                             //
						_react2['default'].createElement(                                                                               //
							'div',                                                                                                         //
							{ id: 'sub_content' },                                                                                         //
							_react2['default'].createElement('div', { id: 'sub_spinner', className: 'sub_spinner1' })                      //
						)                                                                                                               //
					)                                                                                                                //
				)                                                                                                                 //
			);                                                                                                                 //
		}                                                                                                                   //
                                                                                                                      //
		return render;                                                                                                      //
	}();                                                                                                                 //
                                                                                                                      //
	return MainContentSection;                                                                                           //
}(_react.Component);                                                                                                  //
                                                                                                                      //
exports['default'] = MainContentSection;                                                                              //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"MainLayout.jsx":["react","./MainLayoutWrapper.jsx",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// app/layouts/MainLayout.jsx                                                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
exports.MainLayout = undefined;                                                                                       //
                                                                                                                      //
var _react = require('react');                                                                                        // 1
                                                                                                                      //
var _react2 = _interopRequireDefault(_react);                                                                         //
                                                                                                                      //
var _MainLayoutWrapper = require('./MainLayoutWrapper.jsx');                                                          // 2
                                                                                                                      //
var _MainLayoutWrapper2 = _interopRequireDefault(_MainLayoutWrapper);                                                 //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
var MainLayout = exports.MainLayout = function MainLayout(_ref) {                                                     // 4
	var content = _ref.content;                                                                                          //
	var props = _ref.props;                                                                                              //
	return _react2['default'].createElement(_MainLayoutWrapper2['default'], { content: content });                       //
};                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"MainLayoutWrapper.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/ultimatejs:tracker-react","./Header.jsx","./NavSideBar.jsx","./MainContentSection.jsx","./Footer.jsx",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// app/layouts/MainLayoutWrapper.jsx                                                                                  //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                         //
                                                                                                                      //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                //
                                                                                                                      //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                           //
                                                                                                                      //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                  //
                                                                                                                      //
var _react = require('react');                                                                                        // 1
                                                                                                                      //
var _react2 = _interopRequireDefault(_react);                                                                         //
                                                                                                                      //
var _ultimatejsTrackerReact = require('meteor/ultimatejs:tracker-react');                                             // 2
                                                                                                                      //
var _ultimatejsTrackerReact2 = _interopRequireDefault(_ultimatejsTrackerReact);                                       //
                                                                                                                      //
var _Header = require('./Header.jsx');                                                                                // 3
                                                                                                                      //
var _Header2 = _interopRequireDefault(_Header);                                                                       //
                                                                                                                      //
var _NavSideBar = require('./NavSideBar.jsx');                                                                        // 4
                                                                                                                      //
var _NavSideBar2 = _interopRequireDefault(_NavSideBar);                                                               //
                                                                                                                      //
var _MainContentSection = require('./MainContentSection.jsx');                                                        // 5
                                                                                                                      //
var _MainContentSection2 = _interopRequireDefault(_MainContentSection);                                               //
                                                                                                                      //
var _Footer = require('./Footer.jsx');                                                                                // 6
                                                                                                                      //
var _Footer2 = _interopRequireDefault(_Footer);                                                                       //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
var MainLayoutWrapper = function (_TrackerReact) {                                                                    //
	(0, _inherits3['default'])(MainLayoutWrapper, _TrackerReact);                                                        //
                                                                                                                      //
	function MainLayoutWrapper(props, context) {                                                                         // 9
		(0, _classCallCheck3['default'])(this, MainLayoutWrapper);                                                          //
                                                                                                                      //
		var _this = (0, _possibleConstructorReturn3['default'])(this, _TrackerReact.call(this, props, context));            //
                                                                                                                      //
		_this.state = {                                                                                                     // 12
			navButtonOn: false,                                                                                                // 13
			loginPanelOn: false                                                                                                // 14
		};                                                                                                                  //
                                                                                                                      //
		return _this;                                                                                                       //
	}                                                                                                                    //
                                                                                                                      //
	MainLayoutWrapper.prototype._callBackNav = function () {                                                             // 8
		function _callBackNav(data) {                                                                                       //
			var newState = data;                                                                                               // 21
			this.setState({ navButtonOn: newState });                                                                          // 22
		}                                                                                                                   //
                                                                                                                      //
		return _callBackNav;                                                                                                //
	}();                                                                                                                 //
                                                                                                                      //
	MainLayoutWrapper.prototype._callBackLoginPanel = function () {                                                      // 8
		function _callBackLoginPanel(data) {                                                                                //
			var newState = data;                                                                                               // 26
			this.setState({ loginPanelOn: newState });                                                                         // 27
			console.log('response from child on LoginPanel', newState);                                                        // 28
		}                                                                                                                   //
                                                                                                                      //
		return _callBackLoginPanel;                                                                                         //
	}();                                                                                                                 //
                                                                                                                      //
	MainLayoutWrapper.prototype.render = function () {                                                                   // 8
		function render() {                                                                                                 //
                                                                                                                      //
			return _react2['default'].createElement(                                                                           // 34
				'div',                                                                                                            //
				{ className: 'main-layout' },                                                                                     //
				_react2['default'].createElement(                                                                                 //
					'div',                                                                                                           //
					{ id: 'wrapper' },                                                                                               //
					_react2['default'].createElement(_Header2['default'], {                                                          //
						navButtonOn: this.state.navButtonOn,                                                                            // 38
						loginPanelOn: this.state.loginPanelOn,                                                                          // 39
						callBackNav: this._callBackNav.bind(this),                                                                      // 40
						callBackLoginPanel: this._callBackLoginPanel.bind(this) }),                                                     // 41
					_react2['default'].createElement(_NavSideBar2['default'], {                                                      //
						navSideBarOn: this.state.navButtonOn,                                                                           // 45
						loginPanelOn: this.state.loginPanelOn,                                                                          // 46
						callBackLoginPanel: this._callBackLoginPanel.bind(this) }),                                                     // 47
					_react2['default'].createElement(_MainContentSection2['default'], {                                              //
						navSideBarOn: this.state.navButtonOn,                                                                           // 51
						loginPanelOn: this.state.loginPanelOn,                                                                          // 52
						callBackLoginPanel: this._callBackLoginPanel.bind(this),                                                        // 53
						content: this.props.content }),                                                                                 // 54
					_react2['default'].createElement(_Footer2['default'], { navSideBarOn: this.state.navButtonOn })                  //
				)                                                                                                                 //
			);                                                                                                                 //
		}                                                                                                                   //
                                                                                                                      //
		return render;                                                                                                      //
	}();                                                                                                                 //
                                                                                                                      //
	return MainLayoutWrapper;                                                                                            //
}((0, _ultimatejsTrackerReact2['default'])(_react.Component));                                                        //
                                                                                                                      //
exports['default'] = MainLayoutWrapper;                                                                               //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"NavButton.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/ultimatejs:tracker-react","react-addons-css-transition-group",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// app/layouts/NavButton.jsx                                                                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                         //
                                                                                                                      //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                //
                                                                                                                      //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                           //
                                                                                                                      //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                  //
                                                                                                                      //
var _react = require('react');                                                                                        // 1
                                                                                                                      //
var _react2 = _interopRequireDefault(_react);                                                                         //
                                                                                                                      //
var _ultimatejsTrackerReact = require('meteor/ultimatejs:tracker-react');                                             // 2
                                                                                                                      //
var _ultimatejsTrackerReact2 = _interopRequireDefault(_ultimatejsTrackerReact);                                       //
                                                                                                                      //
var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');                                    // 3
                                                                                                                      //
var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);                         //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
var NavButton = function (_Component) {                                                                               //
	(0, _inherits3['default'])(NavButton, _Component);                                                                   //
                                                                                                                      //
	function NavButton(props) {                                                                                          // 6
		(0, _classCallCheck3['default'])(this, NavButton);                                                                  //
                                                                                                                      //
		var _this = (0, _possibleConstructorReturn3['default'])(this, _Component.call(this, props));                        //
                                                                                                                      //
		_this._toggleNavSideBar = _this._toggleNavSideBar.bind(_this);                                                      // 8
		_this.state = {                                                                                                     // 9
			navButtonOn: _this.props.initialNavOn                                                                              // 10
		};                                                                                                                  //
		return _this;                                                                                                       //
	}                                                                                                                    //
                                                                                                                      //
	NavButton.prototype._toggleNavSideBar = function () {                                                                // 5
		function _toggleNavSideBar() {                                                                                      //
			console.log('navkey clicked!', this.state.navButtonOn);                                                            // 15
			var newState = !this.state.navButtonOn;                                                                            // 16
                                                                                                                      //
			this.setState({                                                                                                    // 18
				navButtonOn: newState                                                                                             // 19
			});                                                                                                                //
			this.props.callBack(newState);                                                                                     // 21
		}                                                                                                                   //
                                                                                                                      //
		return _toggleNavSideBar;                                                                                           //
	}();                                                                                                                 //
                                                                                                                      //
	NavButton.prototype.render = function () {                                                                           // 5
		function render() {                                                                                                 //
			if (this.state.navButtonOn) {                                                                                      // 25
				var menuButtonClass = "";                                                                                         // 26
			} else {                                                                                                           //
				var menuButtonClass = "menu-button-off";                                                                          // 28
			}                                                                                                                  //
                                                                                                                      //
			return _react2['default'].createElement(                                                                           // 31
				'div',                                                                                                            //
				{ id: 'menu-button', className: menuButtonClass, onClick: this._toggleNavSideBar },                               //
				_react2['default'].createElement('div', { id: 'line1', className: 'hamburger-lines1' }),                          //
				_react2['default'].createElement('div', { id: 'line2', className: 'hamburger-lines2' }),                          //
				_react2['default'].createElement('div', { id: 'line3', className: 'hamburger-lines3' }),                          //
				_react2['default'].createElement('div', { id: 'line4', className: 'hamburger-lines4' })                           //
			);                                                                                                                 //
		}                                                                                                                   //
                                                                                                                      //
		return render;                                                                                                      //
	}();                                                                                                                 //
                                                                                                                      //
	return NavButton;                                                                                                    //
}(_react.Component);                                                                                                  //
                                                                                                                      //
exports['default'] = NavButton;                                                                                       //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"NavSideBar.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/ultimatejs:tracker-react","react-addons-css-transition-group","../accounts/LoginLogoutButton.jsx",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// app/layouts/NavSideBar.jsx                                                                                         //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                         //
                                                                                                                      //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                //
                                                                                                                      //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                           //
                                                                                                                      //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                  //
                                                                                                                      //
var _react = require('react');                                                                                        // 1
                                                                                                                      //
var _react2 = _interopRequireDefault(_react);                                                                         //
                                                                                                                      //
var _ultimatejsTrackerReact = require('meteor/ultimatejs:tracker-react');                                             // 2
                                                                                                                      //
var _ultimatejsTrackerReact2 = _interopRequireDefault(_ultimatejsTrackerReact);                                       //
                                                                                                                      //
var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');                                    // 3
                                                                                                                      //
var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);                         //
                                                                                                                      //
var _LoginLogoutButton = require('../accounts/LoginLogoutButton.jsx');                                                // 4
                                                                                                                      //
var _LoginLogoutButton2 = _interopRequireDefault(_LoginLogoutButton);                                                 //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
var NavSideBar = function (_Component) {                                                                              //
	(0, _inherits3['default'])(NavSideBar, _Component);                                                                  //
                                                                                                                      //
	function NavSideBar(props, context) {                                                                                // 7
		(0, _classCallCheck3['default'])(this, NavSideBar);                                                                 //
                                                                                                                      //
		var _this = (0, _possibleConstructorReturn3['default'])(this, _Component.call(this, props, context));               //
                                                                                                                      //
		_this.state = {                                                                                                     // 10
			loginPanelOn: _this.props.loginPanelOn,                                                                            // 11
			navSideBarOn: _this.props.navSideBarOn                                                                             // 12
		};                                                                                                                  //
		return _this;                                                                                                       //
	}                                                                                                                    //
                                                                                                                      //
	NavSideBar.prototype._callBackLoginPanel = function () {                                                             // 6
		function _callBackLoginPanel(data) {                                                                                //
			var newState = data;                                                                                               // 17
			this.setState({ loginPanelOn: newState });                                                                         // 18
			this.props.callBackLoginPanel(newState);                                                                           // 19
		}                                                                                                                   //
                                                                                                                      //
		return _callBackLoginPanel;                                                                                         //
	}();                                                                                                                 //
                                                                                                                      //
	NavSideBar.prototype.render = function () {                                                                          // 6
		function render() {                                                                                                 //
			this.state.loginPanelOn = this.props.loginPanelOn;                                                                 // 23
                                                                                                                      //
			if (this.props.navSideBarOn) {                                                                                     // 25
				navSideBarClass = "";                                                                                             // 26
			} else {                                                                                                           //
				navSideBarClass = "navHide";                                                                                      // 28
			}                                                                                                                  //
                                                                                                                      //
			return _react2['default'].createElement(                                                                           // 31
				'nav',                                                                                                            //
				{ id: 'nav', className: navSideBarClass },                                                                        //
				_react2['default'].createElement(                                                                                 //
					'ul',                                                                                                            //
					{ id: 'mainnav' },                                                                                               //
					_react2['default'].createElement(                                                                                //
						'li',                                                                                                           //
						null,                                                                                                           //
						_react2['default'].createElement(                                                                               //
							'a',                                                                                                           //
							{ href: '/' },                                                                                                 //
							'Home'                                                                                                         //
						)                                                                                                               //
					),                                                                                                               //
					_react2['default'].createElement(                                                                                //
						'li',                                                                                                           //
						null,                                                                                                           //
						_react2['default'].createElement(                                                                               //
							'a',                                                                                                           //
							{ href: 'section_1' },                                                                                         //
							'Vision'                                                                                                       //
						)                                                                                                               //
					),                                                                                                               //
					_react2['default'].createElement(                                                                                //
						'li',                                                                                                           //
						null,                                                                                                           //
						_react2['default'].createElement(                                                                               //
							'a',                                                                                                           //
							{ href: 'section_2' },                                                                                         //
							'Courses'                                                                                                      //
						)                                                                                                               //
					),                                                                                                               //
					_react2['default'].createElement(                                                                                //
						'li',                                                                                                           //
						null,                                                                                                           //
						_react2['default'].createElement(                                                                               //
							'a',                                                                                                           //
							{ href: 'section_3' },                                                                                         //
							'News'                                                                                                         //
						)                                                                                                               //
					),                                                                                                               //
					_react2['default'].createElement(                                                                                //
						'li',                                                                                                           //
						null,                                                                                                           //
						_react2['default'].createElement(                                                                               //
							'a',                                                                                                           //
							{ href: 'section_4' },                                                                                         //
							'Creativity'                                                                                                   //
						)                                                                                                               //
					),                                                                                                               //
					_react2['default'].createElement(                                                                                //
						'li',                                                                                                           //
						null,                                                                                                           //
						_react2['default'].createElement(                                                                               //
							'a',                                                                                                           //
							{ href: 'section_5' },                                                                                         //
							'Contact'                                                                                                      //
						)                                                                                                               //
					),                                                                                                               //
					_react2['default'].createElement(                                                                                //
						'li',                                                                                                           //
						null,                                                                                                           //
						_react2['default'].createElement(                                                                               //
							'a',                                                                                                           //
							{ href: 'javascript:void(0);' },                                                                               //
							_react2['default'].createElement(_LoginLogoutButton2['default'], {                                             //
								loginPanelOn: this.state.loginPanelOn,                                                                        // 42
								callBackLoginPanel: this._callBackLoginPanel.bind(this) })                                                    // 43
						)                                                                                                               //
					)                                                                                                                //
				)                                                                                                                 //
			);                                                                                                                 //
		}                                                                                                                   //
                                                                                                                      //
		return render;                                                                                                      //
	}();                                                                                                                 //
                                                                                                                      //
	return NavSideBar;                                                                                                   //
}(_react.Component);                                                                                                  //
                                                                                                                      //
exports['default'] = NavSideBar;                                                                                      //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"resolutions":{"ResolutionDetail.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/ultimatejs:tracker-react",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// app/resolutions/ResolutionDetail.jsx                                                                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                         //
                                                                                                                      //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                //
                                                                                                                      //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                           //
                                                                                                                      //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                  //
                                                                                                                      //
var _react = require('react');                                                                                        // 1
                                                                                                                      //
var _react2 = _interopRequireDefault(_react);                                                                         //
                                                                                                                      //
var _ultimatejsTrackerReact = require('meteor/ultimatejs:tracker-react');                                             // 2
                                                                                                                      //
var _ultimatejsTrackerReact2 = _interopRequireDefault(_ultimatejsTrackerReact);                                       //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
var ResolutionDetail = function (_Component) {                                                                        //
	(0, _inherits3['default'])(ResolutionDetail, _Component);                                                            //
                                                                                                                      //
	function ResolutionDetail() {                                                                                        // 5
		(0, _classCallCheck3['default'])(this, ResolutionDetail);                                                           //
                                                                                                                      //
		var _this = (0, _possibleConstructorReturn3['default'])(this, _Component.call(this));                               //
                                                                                                                      //
		_this.state = {                                                                                                     // 8
			subscription: {                                                                                                    // 9
				resolutions: Meteor.subscribe("userResolutions")                                                                  // 10
			}                                                                                                                  //
		};                                                                                                                  //
		return _this;                                                                                                       //
	}                                                                                                                    //
                                                                                                                      //
	ResolutionDetail.prototype.componentWillUnmount = function () {                                                      // 4
		function componentWillUnmount() {                                                                                   //
			this.state.subscription.resolutions.stop();                                                                        // 16
		}                                                                                                                   //
                                                                                                                      //
		return componentWillUnmount;                                                                                        //
	}();                                                                                                                 //
                                                                                                                      //
	ResolutionDetail.prototype.resolution = function () {                                                                // 4
		function resolution() {                                                                                             //
			console.log(Resolutions.findOne(this.props.id));                                                                   // 20
			return Resolutions.findOne(this.props.id);                                                                         // 21
		}                                                                                                                   //
                                                                                                                      //
		return resolution;                                                                                                  //
	}();                                                                                                                 //
                                                                                                                      //
	ResolutionDetail.prototype.render = function () {                                                                    // 4
		function render() {                                                                                                 //
			var res = this.resolution();                                                                                       // 25
                                                                                                                      //
			if (!res) {                                                                                                        // 27
				return _react2['default'].createElement(                                                                          // 28
					'div',                                                                                                           //
					null,                                                                                                            //
					'Loading...'                                                                                                     //
				);                                                                                                                //
			}                                                                                                                  //
			return _react2['default'].createElement(                                                                           // 30
				'div',                                                                                                            //
				null,                                                                                                             //
				_react2['default'].createElement(                                                                                 //
					'h1',                                                                                                            //
					null,                                                                                                            //
					res.text                                                                                                         //
				)                                                                                                                 //
			);                                                                                                                 //
		}                                                                                                                   //
                                                                                                                      //
		return render;                                                                                                      //
	}();                                                                                                                 //
                                                                                                                      //
	return ResolutionDetail;                                                                                             //
}(_react.Component);                                                                                                  //
                                                                                                                      //
exports['default'] = ResolutionDetail;                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"ResolutionSingle.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// app/resolutions/ResolutionSingle.jsx                                                                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                         //
                                                                                                                      //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                //
                                                                                                                      //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                           //
                                                                                                                      //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                  //
                                                                                                                      //
var _react = require('react');                                                                                        // 1
                                                                                                                      //
var _react2 = _interopRequireDefault(_react);                                                                         //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
var ResolutionSingle = function (_Component) {                                                                        //
	(0, _inherits3['default'])(ResolutionSingle, _Component);                                                            //
                                                                                                                      //
	function ResolutionSingle() {                                                                                        //
		(0, _classCallCheck3['default'])(this, ResolutionSingle);                                                           //
		return (0, _possibleConstructorReturn3['default'])(this, _Component.apply(this, arguments));                        //
	}                                                                                                                    //
                                                                                                                      //
	ResolutionSingle.prototype.toggleChecked = function () {                                                             //
		function toggleChecked() {                                                                                          //
			Meteor.call('toggleResolution', this.props.resolution);                                                            // 6
		}                                                                                                                   //
                                                                                                                      //
		return toggleChecked;                                                                                               //
	}();                                                                                                                 //
                                                                                                                      //
	ResolutionSingle.prototype.deleteResolution = function () {                                                          // 3
		function deleteResolution() {                                                                                       //
			Meteor.call('deleteResolution', this.props.resolution);                                                            // 10
		}                                                                                                                   //
                                                                                                                      //
		return deleteResolution;                                                                                            //
	}();                                                                                                                 //
                                                                                                                      //
	ResolutionSingle.prototype.render = function () {                                                                    // 3
		function render() {                                                                                                 //
			var resolutionClass = this.props.resolution.complete ? "checked" : ""; //if complete is true, then add class "checked" to resolutionClass
			var status = this.props.resolution.complete ? _react2['default'].createElement(                                    // 13
				'span',                                                                                                           //
				{ className: 'completed' },                                                                                       //
				'Completed'                                                                                                       //
			) : "";                                                                                                            //
                                                                                                                      //
			return _react2['default'].createElement(                                                                           // 17
				'li',                                                                                                             //
				{ className: resolutionClass },                                                                                   //
				_react2['default'].createElement('input', { type: 'checkbox',                                                     //
					readOnly: true,                                                                                                  // 20
					checked: this.props.resolution.complete,                                                                         // 21
					onClick: this.toggleChecked.bind(this) }),                                                                       // 22
				_react2['default'].createElement(                                                                                 //
					'a',                                                                                                             //
					{ href: '/resolutions/' + this.props.resolution._id },                                                           //
					this.props.resolution.text                                                                                       //
				),                                                                                                                //
				status,                                                                                                           //
				_react2['default'].createElement(                                                                                 //
					'button',                                                                                                        //
					{ className: 'btn-cancel',                                                                                       //
						onClick: this.deleteResolution.bind(this) },                                                                    // 26
					'×'                                                                                                              //
				)                                                                                                                 //
			);                                                                                                                 //
		}                                                                                                                   //
                                                                                                                      //
		return render;                                                                                                      //
	}();                                                                                                                 //
                                                                                                                      //
	return ResolutionSingle;                                                                                             //
}(_react.Component);                                                                                                  //
                                                                                                                      //
exports['default'] = ResolutionSingle;                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"ResolutionsForm.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// app/resolutions/ResolutionsForm.jsx                                                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                         //
                                                                                                                      //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                //
                                                                                                                      //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                           //
                                                                                                                      //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                  //
                                                                                                                      //
var _react = require('react');                                                                                        // 1
                                                                                                                      //
var _react2 = _interopRequireDefault(_react);                                                                         //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
var ResolutionsForm = function (_Component) {                                                                         //
	(0, _inherits3['default'])(ResolutionsForm, _Component);                                                             //
                                                                                                                      //
	function ResolutionsForm() {                                                                                         //
		(0, _classCallCheck3['default'])(this, ResolutionsForm);                                                            //
		return (0, _possibleConstructorReturn3['default'])(this, _Component.apply(this, arguments));                        //
	}                                                                                                                    //
                                                                                                                      //
	ResolutionsForm.prototype.addResolution = function () {                                                              //
		function addResolution(event) {                                                                                     //
			var _this2 = this;                                                                                                 //
                                                                                                                      //
			event.preventDefault();                                                                                            // 5
			var text = this.refs.resolution.value.trim();                                                                      // 6
                                                                                                                      //
			Meteor.call('addResolution', text, function (error, data) {                                                        // 8
				if (error) {                                                                                                      // 9
					Bert.alert('Please login before submitting', 'danger', 'fixed-top', 'fa-frown-o');                               // 10
				} else {                                                                                                          //
					_this2.refs.resolution.value = "";                                                                               // 12
				}                                                                                                                 //
			});                                                                                                                //
		}                                                                                                                   //
                                                                                                                      //
		return addResolution;                                                                                               //
	}();                                                                                                                 //
                                                                                                                      //
	ResolutionsForm.prototype.render = function () {                                                                     // 3
		function render() {                                                                                                 //
			return _react2['default'].createElement(                                                                           // 18
				'form',                                                                                                           //
				{ className: 'new-resolution', onSubmit: this.addResolution.bind(this) },                                         //
				_react2['default'].createElement('input', {                                                                       //
					type: 'text',                                                                                                    // 21
					ref: 'resolution',                                                                                               // 22
					placeholder: 'Finish React Meteor Series' })                                                                     // 23
			);                                                                                                                 //
		}                                                                                                                   //
                                                                                                                      //
		return render;                                                                                                      //
	}();                                                                                                                 //
                                                                                                                      //
	return ResolutionsForm;                                                                                              //
}(_react.Component);                                                                                                  //
                                                                                                                      //
exports['default'] = ResolutionsForm;                                                                                 //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"ResolutionsWrapper.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/ultimatejs:tracker-react","react-addons-css-transition-group","./ResolutionsForm.jsx","./ResolutionSingle.jsx",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// app/resolutions/ResolutionsWrapper.jsx                                                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                         //
                                                                                                                      //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                //
                                                                                                                      //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                           //
                                                                                                                      //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                  //
                                                                                                                      //
var _react = require('react');                                                                                        // 1
                                                                                                                      //
var _react2 = _interopRequireDefault(_react);                                                                         //
                                                                                                                      //
var _ultimatejsTrackerReact = require('meteor/ultimatejs:tracker-react');                                             // 2
                                                                                                                      //
var _ultimatejsTrackerReact2 = _interopRequireDefault(_ultimatejsTrackerReact);                                       //
                                                                                                                      //
var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');                                    // 3
                                                                                                                      //
var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);                         //
                                                                                                                      //
var _ResolutionsForm = require('./ResolutionsForm.jsx');                                                              // 5
                                                                                                                      //
var _ResolutionsForm2 = _interopRequireDefault(_ResolutionsForm);                                                     //
                                                                                                                      //
var _ResolutionSingle = require('./ResolutionSingle.jsx');                                                            // 6
                                                                                                                      //
var _ResolutionSingle2 = _interopRequireDefault(_ResolutionSingle);                                                   //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
if (Meteor.isClient) {                                                                                                // 8
	Resolutions = new Mongo.Collection("resolutions");                                                                   // 9
}                                                                                                                     //
                                                                                                                      //
var ResolutionsWrapper = function (_TrackerReact) {                                                                   //
	(0, _inherits3['default'])(ResolutionsWrapper, _TrackerReact);                                                       //
                                                                                                                      //
	function ResolutionsWrapper() {                                                                                      // 14
		(0, _classCallCheck3['default'])(this, ResolutionsWrapper);                                                         //
                                                                                                                      //
		var _this = (0, _possibleConstructorReturn3['default'])(this, _TrackerReact.call(this));                            //
                                                                                                                      //
		_this.state = {                                                                                                     // 17
			subscription: {                                                                                                    // 18
				resolutions: Meteor.subscribe("userResolutions")                                                                  // 19
			}                                                                                                                  //
		};                                                                                                                  //
		return _this;                                                                                                       //
	}                                                                                                                    //
                                                                                                                      //
	ResolutionsWrapper.prototype.componentWillUnmount = function () {                                                    // 13
		function componentWillUnmount() {                                                                                   //
			this.state.subscription.resolutions.stop();                                                                        // 25
		}                                                                                                                   //
                                                                                                                      //
		return componentWillUnmount;                                                                                        //
	}();                                                                                                                 //
                                                                                                                      //
	ResolutionsWrapper.prototype.resolutions = function () {                                                             // 13
		function resolutions() {                                                                                            //
			return Resolutions.find().fetch();                                                                                 // 29
		}                                                                                                                   //
                                                                                                                      //
		return resolutions;                                                                                                 //
	}();                                                                                                                 //
                                                                                                                      //
	ResolutionsWrapper.prototype.render = function () {                                                                  // 13
		function render() {                                                                                                 //
			DocHead.setTitle('My Resolutions | Abacus Learning Lab');                                                          // 33
			return _react2['default'].createElement(                                                                           // 34
				_reactAddonsCssTransitionGroup2['default'],                                                                       //
				{                                                                                                                 //
					component: 'div',                                                                                                // 36
					transitionName: 'route',                                                                                         // 37
					transitionEnterTimeout: 600,                                                                                     // 38
					transitionAppearTimeout: 600,                                                                                    // 39
					transitionLeaveTimeout: 400,                                                                                     // 40
					transitionAppear: true },                                                                                        // 41
				_react2['default'].createElement(                                                                                 //
					'h1',                                                                                                            //
					null,                                                                                                            //
					'My Resolutions'                                                                                                 //
				),                                                                                                                //
				_react2['default'].createElement(_ResolutionsForm2['default'], null),                                             //
				_react2['default'].createElement(                                                                                 //
					_reactAddonsCssTransitionGroup2['default'],                                                                      //
					{                                                                                                                //
						component: 'ul',                                                                                                // 45
						className: 'resolutions',                                                                                       // 46
						transitionName: 'resolutionLoad',                                                                               // 47
						transitionEnterTimeout: 600,                                                                                    // 48
						transitionLeaveTimeout: 400 },                                                                                  // 49
					this.resolutions().map(function (resolution) {                                                                   //
						return _react2['default'].createElement(_ResolutionSingle2['default'], { key: resolution._id, resolution: resolution });
					})                                                                                                               //
				)                                                                                                                 //
			);                                                                                                                 //
		}                                                                                                                   //
                                                                                                                      //
		return render;                                                                                                      //
	}();                                                                                                                 //
                                                                                                                      //
	return ResolutionsWrapper;                                                                                           //
}((0, _ultimatejsTrackerReact2['default'])(_react2['default'].Component));                                            //
                                                                                                                      //
exports['default'] = ResolutionsWrapper;                                                                              //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"testpage":{"SessionTestSection.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/ultimatejs:tracker-react","react-addons-css-transition-group",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// app/testpage/SessionTestSection.jsx                                                                                //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                         //
                                                                                                                      //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                //
                                                                                                                      //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                           //
                                                                                                                      //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                  //
                                                                                                                      //
var _react = require('react');                                                                                        // 1
                                                                                                                      //
var _react2 = _interopRequireDefault(_react);                                                                         //
                                                                                                                      //
var _ultimatejsTrackerReact = require('meteor/ultimatejs:tracker-react');                                             // 2
                                                                                                                      //
var _ultimatejsTrackerReact2 = _interopRequireDefault(_ultimatejsTrackerReact);                                       //
                                                                                                                      //
var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');                                    // 3
                                                                                                                      //
var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);                         //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
var TestPageChild3 = function (_TrackerReact) {                                                                       //
	(0, _inherits3['default'])(TestPageChild3, _TrackerReact);                                                           //
                                                                                                                      //
	function TestPageChild3(props, context) {                                                                            // 6
		(0, _classCallCheck3['default'])(this, TestPageChild3);                                                             //
		return (0, _possibleConstructorReturn3['default'])(this, _TrackerReact.call(this, props, context));                 //
	}                                                                                                                    //
                                                                                                                      //
	TestPageChild3.prototype.blueButton = function () {                                                                  // 5
		function blueButton() {                                                                                             //
			console.log('cicked');                                                                                             // 13
			Session.set('myColor', "lightblue_back");                                                                          // 14
			console.log('Session set to: ', Session.get('myColor'));                                                           // 15
		}                                                                                                                   //
                                                                                                                      //
		return blueButton;                                                                                                  //
	}();                                                                                                                 //
                                                                                                                      //
	TestPageChild3.prototype.greenButton = function () {                                                                 // 5
		function greenButton() {                                                                                            //
			Session.set('myColor', "green_back");                                                                              // 18
			console.log('cicked');                                                                                             // 19
			console.log('Session set to: ', Session.get('myColor'));                                                           // 20
		}                                                                                                                   //
                                                                                                                      //
		return greenButton;                                                                                                 //
	}();                                                                                                                 //
                                                                                                                      //
	TestPageChild3.prototype.render = function () {                                                                      // 5
		function render() {                                                                                                 //
			Session.setDefault('myColor', 'red_back');                                                                         // 24
                                                                                                                      //
			console.log('Session Color passed to rendering', Session.get('myColor'));                                          // 26
                                                                                                                      //
			return _react2['default'].createElement(                                                                           // 29
				'div',                                                                                                            //
				{ className: Session.get('myColor') },                                                                            //
				_react2['default'].createElement(                                                                                 //
					'h2',                                                                                                            //
					null,                                                                                                            //
					'SessionTestSection'                                                                                             //
				),                                                                                                                //
				_react2['default'].createElement(                                                                                 //
					'p',                                                                                                             //
					null,                                                                                                            //
					'I am the test child 4.'                                                                                         //
				),                                                                                                                //
				_react2['default'].createElement(                                                                                 //
					'p',                                                                                                             //
					null,                                                                                                            //
					'The current color is ',                                                                                         //
					Session.get('myColor')                                                                                           //
				),                                                                                                                //
				_react2['default'].createElement(                                                                                 //
					'button',                                                                                                        //
					{ onClick: this.blueButton },                                                                                    //
					' Make it blue'                                                                                                  //
				),                                                                                                                //
				_react2['default'].createElement(                                                                                 //
					'button',                                                                                                        //
					{ onClick: this.greenButton },                                                                                   //
					' Make it green'                                                                                                 //
				)                                                                                                                 //
			);                                                                                                                 //
		}                                                                                                                   //
                                                                                                                      //
		return render;                                                                                                      //
	}();                                                                                                                 //
                                                                                                                      //
	return TestPageChild3;                                                                                               //
}((0, _ultimatejsTrackerReact2['default'])(_react2['default'].Component));                                            //
                                                                                                                      //
exports['default'] = TestPageChild3;                                                                                  //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"TestPageChild1.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/ultimatejs:tracker-react","react-addons-css-transition-group",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// app/testpage/TestPageChild1.jsx                                                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                         //
                                                                                                                      //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                //
                                                                                                                      //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                           //
                                                                                                                      //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                  //
                                                                                                                      //
var _react = require('react');                                                                                        // 1
                                                                                                                      //
var _react2 = _interopRequireDefault(_react);                                                                         //
                                                                                                                      //
var _ultimatejsTrackerReact = require('meteor/ultimatejs:tracker-react');                                             // 2
                                                                                                                      //
var _ultimatejsTrackerReact2 = _interopRequireDefault(_ultimatejsTrackerReact);                                       //
                                                                                                                      //
var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');                                    // 3
                                                                                                                      //
var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);                         //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
var TestPageChild1 = function (_Component) {                                                                          //
	(0, _inherits3['default'])(TestPageChild1, _Component);                                                              //
                                                                                                                      //
	function TestPageChild1(props) {                                                                                     // 6
		(0, _classCallCheck3['default'])(this, TestPageChild1);                                                             //
                                                                                                                      //
		var _this = (0, _possibleConstructorReturn3['default'])(this, _Component.call(this, props));                        //
                                                                                                                      //
		_this._toggle = _this._toggle.bind(_this);                                                                          // 8
		_this.state = {                                                                                                     // 9
			switchOn: _this.props.initialPanelState                                                                            // 10
		};                                                                                                                  //
		return _this;                                                                                                       //
	}                                                                                                                    //
                                                                                                                      //
	TestPageChild1.prototype._toggle = function () {                                                                     // 5
		function _toggle() {                                                                                                //
			var newState = !this.state.switchOn;                                                                               // 15
			this.setState({                                                                                                    // 16
				switchOn: newState                                                                                                // 17
			});                                                                                                                //
			console.log(newState);                                                                                             // 19
			this.props.callBack(newState);                                                                                     // 20
		}                                                                                                                   //
                                                                                                                      //
		return _toggle;                                                                                                     //
	}();                                                                                                                 //
                                                                                                                      //
	TestPageChild1.prototype.render = function () {                                                                      // 5
		function render() {                                                                                                 //
			if (this.state.switchOn) {                                                                                         // 24
				var switchResponse = "lightblue_back";                                                                            // 25
			} else {                                                                                                           //
				var switchResponse = "red_back";                                                                                  // 27
			}                                                                                                                  //
			return _react2['default'].createElement(                                                                           // 29
				'div',                                                                                                            //
				{ className: switchResponse },                                                                                    //
				_react2['default'].createElement(                                                                                 //
					'h2',                                                                                                            //
					null,                                                                                                            //
					'Test Child1'                                                                                                    //
				),                                                                                                                //
				_react2['default'].createElement(                                                                                 //
					'p',                                                                                                             //
					null,                                                                                                            //
					'I am the test child 1.'                                                                                         //
				),                                                                                                                //
				switchResponse,                                                                                                   //
				_react2['default'].createElement(                                                                                 //
					'button',                                                                                                        //
					{ onClick: this._toggle },                                                                                       //
					'Click me!'                                                                                                      //
				)                                                                                                                 //
			);                                                                                                                 //
		}                                                                                                                   //
                                                                                                                      //
		return render;                                                                                                      //
	}();                                                                                                                 //
                                                                                                                      //
	return TestPageChild1;                                                                                               //
}(_react.Component);                                                                                                  //
                                                                                                                      //
exports['default'] = TestPageChild1;                                                                                  //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"TestPageChild2.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/ultimatejs:tracker-react","react-addons-css-transition-group",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// app/testpage/TestPageChild2.jsx                                                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                         //
                                                                                                                      //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                //
                                                                                                                      //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                           //
                                                                                                                      //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                  //
                                                                                                                      //
var _react = require('react');                                                                                        // 1
                                                                                                                      //
var _react2 = _interopRequireDefault(_react);                                                                         //
                                                                                                                      //
var _ultimatejsTrackerReact = require('meteor/ultimatejs:tracker-react');                                             // 2
                                                                                                                      //
var _ultimatejsTrackerReact2 = _interopRequireDefault(_ultimatejsTrackerReact);                                       //
                                                                                                                      //
var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');                                    // 3
                                                                                                                      //
var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);                         //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
var TestPageChild2 = function (_Component) {                                                                          //
	(0, _inherits3['default'])(TestPageChild2, _Component);                                                              //
                                                                                                                      //
	function TestPageChild2(props) {                                                                                     // 6
		(0, _classCallCheck3['default'])(this, TestPageChild2);                                                             //
                                                                                                                      //
		var _this = (0, _possibleConstructorReturn3['default'])(this, _Component.call(this, props));                        //
                                                                                                                      //
		_this._toggle = _this._toggle.bind(_this);                                                                          // 8
		_this.state = {                                                                                                     // 9
			switchOn: _this.props.initialPanelState                                                                            // 10
		};                                                                                                                  //
		return _this;                                                                                                       //
	}                                                                                                                    //
                                                                                                                      //
	TestPageChild2.prototype._toggle = function () {                                                                     // 5
		function _toggle() {                                                                                                //
			var newState = !this.state.switchOn;                                                                               // 15
			this.setState({                                                                                                    // 16
				switchOn: newState                                                                                                // 17
			});                                                                                                                //
			console.log(newState);                                                                                             // 19
			this.props.callBack2(newState);                                                                                    // 20
		}                                                                                                                   //
                                                                                                                      //
		return _toggle;                                                                                                     //
	}();                                                                                                                 //
                                                                                                                      //
	TestPageChild2.prototype.render = function () {                                                                      // 5
		function render() {                                                                                                 //
			if (this.state.switchOn) {                                                                                         // 24
				var switchResponse = "lightblue_back";                                                                            // 25
			} else {                                                                                                           //
				var switchResponse = "red_back";                                                                                  // 27
			}                                                                                                                  //
			return _react2['default'].createElement(                                                                           // 29
				'div',                                                                                                            //
				{ className: switchResponse },                                                                                    //
				_react2['default'].createElement(                                                                                 //
					'h2',                                                                                                            //
					null,                                                                                                            //
					'Test Child2'                                                                                                    //
				),                                                                                                                //
				_react2['default'].createElement(                                                                                 //
					'p',                                                                                                             //
					null,                                                                                                            //
					'I am the test child 2.'                                                                                         //
				),                                                                                                                //
				switchResponse,                                                                                                   //
				_react2['default'].createElement(                                                                                 //
					'button',                                                                                                        //
					{ onClick: this._toggle },                                                                                       //
					'Click me!'                                                                                                      //
				)                                                                                                                 //
			);                                                                                                                 //
		}                                                                                                                   //
                                                                                                                      //
		return render;                                                                                                      //
	}();                                                                                                                 //
                                                                                                                      //
	return TestPageChild2;                                                                                               //
}(_react.Component);                                                                                                  //
                                                                                                                      //
exports['default'] = TestPageChild2;                                                                                  //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"TestPageChild3.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/ultimatejs:tracker-react","react-addons-css-transition-group",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// app/testpage/TestPageChild3.jsx                                                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                         //
                                                                                                                      //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                //
                                                                                                                      //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                           //
                                                                                                                      //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                  //
                                                                                                                      //
var _react = require('react');                                                                                        // 1
                                                                                                                      //
var _react2 = _interopRequireDefault(_react);                                                                         //
                                                                                                                      //
var _ultimatejsTrackerReact = require('meteor/ultimatejs:tracker-react');                                             // 2
                                                                                                                      //
var _ultimatejsTrackerReact2 = _interopRequireDefault(_ultimatejsTrackerReact);                                       //
                                                                                                                      //
var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');                                    // 3
                                                                                                                      //
var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);                         //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
var TestPageChild3 = function (_Component) {                                                                          //
	(0, _inherits3['default'])(TestPageChild3, _Component);                                                              //
                                                                                                                      //
	function TestPageChild3(props) {                                                                                     // 6
		(0, _classCallCheck3['default'])(this, TestPageChild3);                                                             //
                                                                                                                      //
		var _this = (0, _possibleConstructorReturn3['default'])(this, _Component.call(this, props));                        //
                                                                                                                      //
		_this.state = {                                                                                                     // 8
			switchOn: _this.props.initialPanelState                                                                            // 9
		};                                                                                                                  //
		return _this;                                                                                                       //
	}                                                                                                                    //
                                                                                                                      //
	TestPageChild3.prototype.render = function () {                                                                      // 5
		function render() {                                                                                                 //
			if (this.props.initialPanelState) {                                                                                // 14
				var switchResponse = "lightblue_back";                                                                            // 15
			} else {                                                                                                           //
				var switchResponse = "red_back";                                                                                  // 17
			}                                                                                                                  //
			return _react2['default'].createElement(                                                                           // 19
				'div',                                                                                                            //
				{ className: switchResponse },                                                                                    //
				_react2['default'].createElement(                                                                                 //
					'h2',                                                                                                            //
					null,                                                                                                            //
					'Test Child3'                                                                                                    //
				),                                                                                                                //
				_react2['default'].createElement(                                                                                 //
					'p',                                                                                                             //
					null,                                                                                                            //
					'I am the test child 3.'                                                                                         //
				),                                                                                                                //
				switchResponse                                                                                                    //
			);                                                                                                                 //
		}                                                                                                                   //
                                                                                                                      //
		return render;                                                                                                      //
	}();                                                                                                                 //
                                                                                                                      //
	return TestPageChild3;                                                                                               //
}(_react.Component);                                                                                                  //
                                                                                                                      //
exports['default'] = TestPageChild3;                                                                                  //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"Testpage.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/ultimatejs:tracker-react","react-addons-css-transition-group","./TestPageChild1.jsx","./TestPageChild2.jsx","./TestPageChild3.jsx","./SessionTestSection.jsx",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// app/testpage/Testpage.jsx                                                                                          //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                         //
                                                                                                                      //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                //
                                                                                                                      //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                           //
                                                                                                                      //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                  //
                                                                                                                      //
var _react = require('react');                                                                                        // 1
                                                                                                                      //
var _react2 = _interopRequireDefault(_react);                                                                         //
                                                                                                                      //
var _ultimatejsTrackerReact = require('meteor/ultimatejs:tracker-react');                                             // 2
                                                                                                                      //
var _ultimatejsTrackerReact2 = _interopRequireDefault(_ultimatejsTrackerReact);                                       //
                                                                                                                      //
var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');                                    // 3
                                                                                                                      //
var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);                         //
                                                                                                                      //
var _TestPageChild = require('./TestPageChild1.jsx');                                                                 // 4
                                                                                                                      //
var _TestPageChild2 = _interopRequireDefault(_TestPageChild);                                                         //
                                                                                                                      //
var _TestPageChild3 = require('./TestPageChild2.jsx');                                                                // 5
                                                                                                                      //
var _TestPageChild4 = _interopRequireDefault(_TestPageChild3);                                                        //
                                                                                                                      //
var _TestPageChild5 = require('./TestPageChild3.jsx');                                                                // 6
                                                                                                                      //
var _TestPageChild6 = _interopRequireDefault(_TestPageChild5);                                                        //
                                                                                                                      //
var _SessionTestSection = require('./SessionTestSection.jsx');                                                        // 7
                                                                                                                      //
var _SessionTestSection2 = _interopRequireDefault(_SessionTestSection);                                               //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
var TestPage = function (_Component) {                                                                                //
	(0, _inherits3['default'])(TestPage, _Component);                                                                    //
                                                                                                                      //
	function TestPage(props) {                                                                                           // 9
		(0, _classCallCheck3['default'])(this, TestPage);                                                                   //
                                                                                                                      //
		var _this = (0, _possibleConstructorReturn3['default'])(this, _Component.call(this, props));                        //
                                                                                                                      //
		_this._callBackFunc = _this._callBackFunc.bind(_this);                                                              // 11
		_this._callBack2Func = _this._callBack2Func.bind(_this);                                                            // 12
		_this.state = {                                                                                                     // 13
			panelOn: false,                                                                                                    // 14
			panel2On: false                                                                                                    // 15
		};                                                                                                                  //
		return _this;                                                                                                       //
	}                                                                                                                    //
                                                                                                                      //
	TestPage.prototype._callBackFunc = function () {                                                                     // 8
		function _callBackFunc(data) {                                                                                      //
			this.setState({                                                                                                    // 20
				panelOn: data                                                                                                     // 21
			});                                                                                                                //
		}                                                                                                                   //
                                                                                                                      //
		return _callBackFunc;                                                                                               //
	}();                                                                                                                 //
                                                                                                                      //
	TestPage.prototype._callBack2Func = function () {                                                                    // 8
		function _callBack2Func(data) {                                                                                     //
			this.setState({                                                                                                    // 25
				panel2On: data                                                                                                    // 26
			});                                                                                                                //
		}                                                                                                                   //
                                                                                                                      //
		return _callBack2Func;                                                                                              //
	}();                                                                                                                 //
                                                                                                                      //
	TestPage.prototype.render = function () {                                                                            // 8
		function render() {                                                                                                 //
			if (this.state.panelOn) {                                                                                          // 31
				var switchResponse = "lightblue_back";                                                                            // 32
			} else {                                                                                                           //
				var switchResponse = "red_back";                                                                                  // 34
			}                                                                                                                  //
			if (this.state.panel2On) {                                                                                         // 36
				var switchResponse2 = "lightblue_back";                                                                           // 37
			} else {                                                                                                           //
				var switchResponse2 = "red_back";                                                                                 // 39
			}                                                                                                                  //
			return _react2['default'].createElement(                                                                           // 41
				'div',                                                                                                            //
				null,                                                                                                             //
				_react2['default'].createElement(                                                                                 //
					'div',                                                                                                           //
					{ className: switchResponse },                                                                                   //
					_react2['default'].createElement(                                                                                //
						'h1',                                                                                                           //
						null,                                                                                                           //
						'Test Page (Panel1)'                                                                                            //
					),                                                                                                               //
					_react2['default'].createElement(                                                                                //
						'p',                                                                                                            //
						null,                                                                                                           //
						'Mustache typewriter tote bag lo-fi. Viral typewriter synth cray, listicle four dollar toast cardigan 90s ethical seitan fanny pack. Man bun small batch tote bag hella, health goth lumbersexual pitchfork pour-over banjo shabby chic DIY everyday carry banh mi skateboard. Hashtag'
					)                                                                                                                //
				),                                                                                                                //
				_react2['default'].createElement(                                                                                 //
					'div',                                                                                                           //
					{ className: switchResponse2 },                                                                                  //
					_react2['default'].createElement(                                                                                //
						'h1',                                                                                                           //
						null,                                                                                                           //
						'Test Page (Panel2)'                                                                                            //
					),                                                                                                               //
					_react2['default'].createElement(                                                                                //
						'p',                                                                                                            //
						null,                                                                                                           //
						'Mustache typewriter tote bag lo-fi. Viral typewriter synth cray, listicle four dollar toast cardigan 90s ethical seitan fanny pack. Man bun small batch tote bag hella, health goth lumbersexual pitchfork pour-over banjo shabby chic DIY everyday carry banh mi skateboard. Hashtag'
					)                                                                                                                //
				),                                                                                                                //
				_react2['default'].createElement(_TestPageChild2['default'], { initialPanelState: this.state.panelOn, callBack: this._callBackFunc }),
				_react2['default'].createElement(_TestPageChild4['default'], { initialPanelState: this.state.panel2On, callBack2: this._callBack2Func }),
				_react2['default'].createElement(_TestPageChild6['default'], { initialPanelState: this.state.panel2On }),         //
				_react2['default'].createElement(_SessionTestSection2['default'], null)                                           //
			);                                                                                                                 //
		}                                                                                                                   //
                                                                                                                      //
		return render;                                                                                                      //
	}();                                                                                                                 //
                                                                                                                      //
	return TestPage;                                                                                                     //
}(_react.Component);                                                                                                  //
                                                                                                                      //
exports['default'] = TestPage;                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"About.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","react-addons-css-transition-group",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// app/About.jsx                                                                                                      //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                         //
                                                                                                                      //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                //
                                                                                                                      //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                           //
                                                                                                                      //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                  //
                                                                                                                      //
var _react = require('react');                                                                                        // 1
                                                                                                                      //
var _react2 = _interopRequireDefault(_react);                                                                         //
                                                                                                                      //
var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');                                    // 2
                                                                                                                      //
var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);                         //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
var About = function (_Component) {                                                                                   //
	(0, _inherits3['default'])(About, _Component);                                                                       //
                                                                                                                      //
	function About() {                                                                                                   //
		(0, _classCallCheck3['default'])(this, About);                                                                      //
		return (0, _possibleConstructorReturn3['default'])(this, _Component.apply(this, arguments));                        //
	}                                                                                                                    //
                                                                                                                      //
	About.prototype.setVar = function () {                                                                               //
		function setVar() {                                                                                                 //
			Session.set('loginToggle', "green_back");                                                                          // 7
		}                                                                                                                   //
                                                                                                                      //
		return setVar;                                                                                                      //
	}();                                                                                                                 //
                                                                                                                      //
	About.prototype.render = function () {                                                                               // 4
		function render() {                                                                                                 //
			DocHead.setTitle('About | Abacus Learning Lab');                                                                   // 11
			return _react2['default'].createElement(                                                                           // 12
				_reactAddonsCssTransitionGroup2['default'],                                                                       //
				{                                                                                                                 //
					component: 'div',                                                                                                // 14
					transitionName: 'route',                                                                                         // 15
					transitionEnterTimeout: 600,                                                                                     // 16
					transitionAppearTimeout: 600,                                                                                    // 17
					transitionLeaveTimeout: 400,                                                                                     // 18
					transitionAppear: true },                                                                                        // 19
				_react2['default'].createElement(                                                                                 //
					'h1',                                                                                                            //
					null,                                                                                                            //
					'About us'                                                                                                       //
				),                                                                                                                //
				_react2['default'].createElement(                                                                                 //
					'p',                                                                                                             //
					null,                                                                                                            //
					'Mustache typewriter tote bag lo-fi. Viral typewriter synth cray, listicle four dollar toast cardigan 90s ethical seitan fanny pack. Man bun small batch tote bag hella, health goth lumbersexual pitchfork pour-over banjo shabby chic DIY everyday carry banh mi skateboard. Hashtag viral pug typewriter ugh, stumptown vice church-key tote bag chartreuse thundercats jean shorts. Fashion axe flexitarian messenger bag paleo, microdosing small batch leggings marfa venmo shoreditch letterpress single-origin coffee waistcoat twee direct trade. Cred readymade echo park, bicycle rights paleo raw denim next level chia green juice. Jean shorts direct trade flexitarian yr gentrify.'
				),                                                                                                                //
				_react2['default'].createElement(                                                                                 //
					'button',                                                                                                        //
					{ onClick: this.setVar },                                                                                        //
					'Sign Up'                                                                                                        //
				)                                                                                                                 //
			);                                                                                                                 //
		}                                                                                                                   //
                                                                                                                      //
		return render;                                                                                                      //
	}();                                                                                                                 //
                                                                                                                      //
	return About;                                                                                                        //
}(_react.Component);                                                                                                  //
                                                                                                                      //
exports['default'] = About;                                                                                           //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"Welcome.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","react-addons-css-transition-group","./accounts/LoginLogoutButton.jsx",function(require,exports){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// app/Welcome.jsx                                                                                                    //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
exports.__esModule = true;                                                                                            //
                                                                                                                      //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                               //
                                                                                                                      //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                                      //
                                                                                                                      //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');                         //
                                                                                                                      //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                                //
                                                                                                                      //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                           //
                                                                                                                      //
var _inherits3 = _interopRequireDefault(_inherits2);                                                                  //
                                                                                                                      //
var _react = require('react');                                                                                        // 1
                                                                                                                      //
var _react2 = _interopRequireDefault(_react);                                                                         //
                                                                                                                      //
var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');                                    // 2
                                                                                                                      //
var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);                         //
                                                                                                                      //
var _LoginLogoutButton = require('./accounts/LoginLogoutButton.jsx');                                                 // 3
                                                                                                                      //
var _LoginLogoutButton2 = _interopRequireDefault(_LoginLogoutButton);                                                 //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
var Welcome = function (_Component) {                                                                                 //
	(0, _inherits3['default'])(Welcome, _Component);                                                                     //
                                                                                                                      //
	function Welcome(props, context) {                                                                                   // 6
		(0, _classCallCheck3['default'])(this, Welcome);                                                                    //
                                                                                                                      //
		var _this = (0, _possibleConstructorReturn3['default'])(this, _Component.call(this, props, context));               //
                                                                                                                      //
		console.log(_this.props);                                                                                           // 8
		_this.state = {                                                                                                     // 9
			loginPanelOn: _this.props.loginPanelOn,                                                                            // 10
			navSideBarOn: _this.props.navSideBarOn                                                                             // 11
		};                                                                                                                  //
		return _this;                                                                                                       //
	}                                                                                                                    //
                                                                                                                      //
	Welcome.prototype._callBackLoginPanel = function () {                                                                // 5
		function _callBackLoginPanel(data) {                                                                                //
			var newState = data;                                                                                               // 16
			this.setState({ loginPanelOn: newState });                                                                         // 17
			this.props.callBackLoginPanel(newState);                                                                           // 18
		}                                                                                                                   //
                                                                                                                      //
		return _callBackLoginPanel;                                                                                         //
	}();                                                                                                                 //
                                                                                                                      //
	Welcome.prototype.render = function () {                                                                             // 5
		function render() {                                                                                                 //
			DocHead.setTitle('Welcome | Abacus Learing Lab');                                                                  // 22
                                                                                                                      //
			console.log('LoginPanelOn props in Welcome', this.props.loginpanelOn);                                             // 24
			console.log('navSideBarOn state in Welcome', this.state.loginpanelOn);                                             // 25
                                                                                                                      //
			return _react2['default'].createElement(                                                                           // 27
				_reactAddonsCssTransitionGroup2['default'],                                                                       //
				{                                                                                                                 //
					component: 'div',                                                                                                // 29
					transitionName: 'route',                                                                                         // 30
					transitionEnterTimeout: 600,                                                                                     // 31
					transitionAppearTimeout: 600,                                                                                    // 32
					transitionLeaveTimeout: 400,                                                                                     // 33
					transitionAppear: true },                                                                                        // 34
				_react2['default'].createElement(                                                                                 //
					'header',                                                                                                        //
					{ id: 'big_header' },                                                                                            //
					_react2['default'].createElement(                                                                                //
						'center',                                                                                                       //
						null,                                                                                                           //
						_react2['default'].createElement(                                                                               //
							'h1',                                                                                                          //
							{ id: 'big_title' },                                                                                           //
							'ABACUS LEARNING LAB'                                                                                          //
						),                                                                                                              //
						_react2['default'].createElement(                                                                               //
							'nav',                                                                                                         //
							{ className: 'hide_onclick sub_menu' },                                                                        //
							_react2['default'].createElement(                                                                              //
								'p',                                                                                                          //
								null,                                                                                                         //
								_react2['default'].createElement(                                                                             //
									'a',                                                                                                         //
									{ className: 'strapline', className: 'fadein' },                                                             //
									'The place to learn & practice abacus and maths!'                                                            //
								)                                                                                                             //
							),                                                                                                             //
							_react2['default'].createElement(                                                                              //
								'div',                                                                                                        //
								{ className: 'block_connector' },                                                                             //
								_react2['default'].createElement(                                                                             //
									'p',                                                                                                         //
									null,                                                                                                        //
									' ',                                                                                                         //
									_react2['default'].createElement(                                                                            //
										'a',                                                                                                        //
										{ href: '/about', className: 'page_link ghost-button lightblue_back introButtonWidth' },                    //
										'Learn more'                                                                                                //
									)                                                                                                            //
								),                                                                                                            //
								_react2['default'].createElement(                                                                             //
									'p',                                                                                                         //
									null,                                                                                                        //
									' ',                                                                                                         //
									_react2['default'].createElement(                                                                            //
										'a',                                                                                                        //
										{ href: 'signup', className: 'sub_option ghost-button red_back introButtonWidth' },                         //
										'Sign up'                                                                                                   //
									)                                                                                                            //
								),                                                                                                            //
								_react2['default'].createElement(                                                                             //
									'p',                                                                                                         //
									null,                                                                                                        //
									' ',                                                                                                         //
									_react2['default'].createElement(                                                                            //
										'a',                                                                                                        //
										{ href: '', className: 'ghost-button lime_back introButtonWidth' },                                         //
										'Find us'                                                                                                   //
									)                                                                                                            //
								)                                                                                                             //
							),                                                                                                             //
							_react2['default'].createElement(                                                                              //
								'div',                                                                                                        //
								{ className: 'block_connector' },                                                                             //
								_react2['default'].createElement(                                                                             //
									'p',                                                                                                         //
									null,                                                                                                        //
									' ',                                                                                                         //
									_react2['default'].createElement(                                                                            //
										'a',                                                                                                        //
										{ href: '', className: 'ghost-button purple_back introButtonWidth' },                                       //
										'Chat with us'                                                                                              //
									)                                                                                                            //
								),                                                                                                            //
								_react2['default'].createElement(                                                                             //
									'p',                                                                                                         //
									null,                                                                                                        //
									' ',                                                                                                         //
									_react2['default'].createElement(                                                                            //
										'a',                                                                                                        //
										{ href: '', className: 'ghost-button orange_back introButtonWidth' },                                       //
										'Call us'                                                                                                   //
									)                                                                                                            //
								),                                                                                                            //
								_react2['default'].createElement(                                                                             //
									'p',                                                                                                         //
									null,                                                                                                        //
									' ',                                                                                                         //
									_react2['default'].createElement(                                                                            //
										'a',                                                                                                        //
										{ href: '', className: 'ghost-button green_back introButtonWidth' },                                        //
										'Email us'                                                                                                  //
									)                                                                                                            //
								)                                                                                                             //
							),                                                                                                             //
							_react2['default'].createElement(                                                                              //
								'p',                                                                                                          //
								null,                                                                                                         //
								_react2['default'].createElement(                                                                             //
									'a',                                                                                                         //
									{ href: 'javascript:void(0);', className: 'sub_option ghost-button lightblue_back introButtonWidth' },       //
									_react2['default'].createElement(_LoginLogoutButton2['default'], {                                           //
										loginPanelOn: this.state.loginPanelOn,                                                                      // 56
										callBackLoginPanel: this._callBackLoginPanel.bind(this),                                                    // 57
										title: "Log In" })                                                                                          // 58
								)                                                                                                             //
							)                                                                                                              //
						)                                                                                                               //
					)                                                                                                                //
				)                                                                                                                 //
			);                                                                                                                 //
		}                                                                                                                   //
                                                                                                                      //
		return render;                                                                                                      //
	}();                                                                                                                 //
                                                                                                                      //
	return Welcome;                                                                                                      //
}(_react.Component);                                                                                                  //
                                                                                                                      //
exports['default'] = Welcome;                                                                                         //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"routes.jsx":["react","react-mounter","./layouts/MainLayout.jsx","./resolutions/ResolutionsWrapper.jsx","./About.jsx","./Welcome.jsx","./resolutions/ResolutionDetail.jsx","./testpage/Testpage.jsx",function(require){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// app/routes.jsx                                                                                                     //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
var _react = require('react');                                                                                        // 1
                                                                                                                      //
var _react2 = _interopRequireDefault(_react);                                                                         //
                                                                                                                      //
var _reactMounter = require('react-mounter');                                                                         // 2
                                                                                                                      //
var _MainLayout = require('./layouts/MainLayout.jsx');                                                                // 3
                                                                                                                      //
var _ResolutionsWrapper = require('./resolutions/ResolutionsWrapper.jsx');                                            // 4
                                                                                                                      //
var _ResolutionsWrapper2 = _interopRequireDefault(_ResolutionsWrapper);                                               //
                                                                                                                      //
var _About = require('./About.jsx');                                                                                  // 5
                                                                                                                      //
var _About2 = _interopRequireDefault(_About);                                                                         //
                                                                                                                      //
var _Welcome = require('./Welcome.jsx');                                                                              // 6
                                                                                                                      //
var _Welcome2 = _interopRequireDefault(_Welcome);                                                                     //
                                                                                                                      //
var _ResolutionDetail = require('./resolutions/ResolutionDetail.jsx');                                                // 7
                                                                                                                      //
var _ResolutionDetail2 = _interopRequireDefault(_ResolutionDetail);                                                   //
                                                                                                                      //
var _Testpage = require('./testpage/Testpage.jsx');                                                                   // 8
                                                                                                                      //
var _Testpage2 = _interopRequireDefault(_Testpage);                                                                   //
                                                                                                                      //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }                     //
                                                                                                                      //
FlowRouter.route('/', {                                                                                               // 10
	action: function () {                                                                                                // 11
		function action() {                                                                                                 //
			(0, _reactMounter.mount)(_MainLayout.MainLayout, {                                                                 // 12
				content: _react2['default'].createElement(_Welcome2['default'], null)                                             // 13
			});                                                                                                                //
		}                                                                                                                   //
                                                                                                                      //
		return action;                                                                                                      //
	}()                                                                                                                  //
});                                                                                                                   //
                                                                                                                      //
FlowRouter.route('/resolutions', {                                                                                    // 18
	action: function () {                                                                                                // 19
		function action() {                                                                                                 //
			(0, _reactMounter.mount)(_MainLayout.MainLayout, {                                                                 // 20
				content: _react2['default'].createElement(_ResolutionsWrapper2['default'], null)                                  // 21
			});                                                                                                                //
		}                                                                                                                   //
                                                                                                                      //
		return action;                                                                                                      //
	}()                                                                                                                  //
});                                                                                                                   //
                                                                                                                      //
FlowRouter.route('/about', {                                                                                          // 26
	action: function () {                                                                                                // 27
		function action() {                                                                                                 //
			(0, _reactMounter.mount)(_MainLayout.MainLayout, {                                                                 // 28
				content: _react2['default'].createElement(_About2['default'], null)                                               // 29
			});                                                                                                                //
		}                                                                                                                   //
                                                                                                                      //
		return action;                                                                                                      //
	}()                                                                                                                  //
});                                                                                                                   //
                                                                                                                      //
FlowRouter.route('/testpage', {                                                                                       // 35
	action: function () {                                                                                                // 36
		function action() {                                                                                                 //
			(0, _reactMounter.mount)(_MainLayout.MainLayout, {                                                                 // 37
				content: _react2['default'].createElement(_Testpage2['default'], null)                                            // 38
			});                                                                                                                //
		}                                                                                                                   //
                                                                                                                      //
		return action;                                                                                                      //
	}()                                                                                                                  //
});                                                                                                                   //
                                                                                                                      //
FlowRouter.route('/resolutions/:id', {                                                                                // 44
	action: function () {                                                                                                // 45
		function action(params) {                                                                                           //
			console.log("hello, params id is:" + params.id);                                                                   // 46
			(0, _reactMounter.mount)(_MainLayout.MainLayout, {                                                                 // 47
				content: _react2['default'].createElement(_ResolutionDetail2['default'], { id: params.id })                       // 48
			});                                                                                                                //
		}                                                                                                                   //
                                                                                                                      //
		return action;                                                                                                      //
	}()                                                                                                                  //
});                                                                                                                   //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json",".html",".jsx",".scss"]});
require("./app/accounts/AccountsUI.jsx");
require("./app/accounts/LoginForm.jsx");
require("./app/accounts/LoginLogoutButton.jsx");
require("./app/accounts/LoginPanelCancelButton.jsx");
require("./app/accounts/SignupForm.jsx");
require("./app/layouts/Footer.jsx");
require("./app/layouts/Header.jsx");
require("./app/layouts/MainContentSection.jsx");
require("./app/layouts/MainLayout.jsx");
require("./app/layouts/MainLayoutWrapper.jsx");
require("./app/layouts/NavButton.jsx");
require("./app/layouts/NavSideBar.jsx");
require("./app/resolutions/ResolutionDetail.jsx");
require("./app/resolutions/ResolutionSingle.jsx");
require("./app/resolutions/ResolutionsForm.jsx");
require("./app/resolutions/ResolutionsWrapper.jsx");
require("./app/testpage/SessionTestSection.jsx");
require("./app/testpage/TestPageChild1.jsx");
require("./app/testpage/TestPageChild2.jsx");
require("./app/testpage/TestPageChild3.jsx");
require("./app/testpage/Testpage.jsx");
require("./app/About.jsx");
require("./app/Welcome.jsx");
require("./app/routes.jsx");