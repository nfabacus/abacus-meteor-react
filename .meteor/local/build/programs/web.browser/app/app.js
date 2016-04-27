var require = meteorInstall({"app":{"layouts":{"MainContentSection.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/ultimatejs:tracker-react","react-addons-css-transition-group",function(require,exports){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// app/layouts/MainContentSection.jsx                                                                       //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
exports.__esModule = true;                                                                                  //
                                                                                                            //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                     //
                                                                                                            //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                            //
                                                                                                            //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');               //
                                                                                                            //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                      //
                                                                                                            //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                 //
                                                                                                            //
var _inherits3 = _interopRequireDefault(_inherits2);                                                        //
                                                                                                            //
var _react = require('react');                                                                              // 1
                                                                                                            //
var _react2 = _interopRequireDefault(_react);                                                               //
                                                                                                            //
var _ultimatejsTrackerReact = require('meteor/ultimatejs:tracker-react');                                   // 2
                                                                                                            //
var _ultimatejsTrackerReact2 = _interopRequireDefault(_ultimatejsTrackerReact);                             //
                                                                                                            //
var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');                          // 3
                                                                                                            //
var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);               //
                                                                                                            //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }           //
                                                                                                            //
var MainContentSection = function (_Component) {                                                            //
	(0, _inherits3['default'])(MainContentSection, _Component);                                                //
                                                                                                            //
	function MainContentSection() {                                                                            //
		(0, _classCallCheck3['default'])(this, MainContentSection);                                               //
		return (0, _possibleConstructorReturn3['default'])(this, _Component.apply(this, arguments));              //
	}                                                                                                          //
                                                                                                            //
	MainContentSection.prototype.render = function () {                                                        //
		function render() {                                                                                       //
			if (this.props.navSideBarOn) {                                                                           // 8
				contentNavClass = "";                                                                                   // 9
			} else {                                                                                                 //
				contentNavClass = "contentNoNav";                                                                       // 11
			}                                                                                                        //
                                                                                                            //
			return _react2['default'].createElement(                                                                 // 14
				_reactAddonsCssTransitionGroup2['default'],                                                             //
				{                                                                                                       //
					component: 'div',                                                                                      // 16
					transitionName: 'route',                                                                               // 17
					transitionEnterTimeout: 600,                                                                           // 18
					transitionAppearTimeout: 600,                                                                          // 19
					transitionLeaveTimeout: 400,                                                                           // 20
					transitionAppear: true },                                                                              // 21
				_react2['default'].createElement(                                                                       //
					'section',                                                                                             //
					{ id: 'content', className: contentNavClass },                                                         //
					_react2['default'].createElement(                                                                      //
						'div',                                                                                                //
						{ id: 'content_inner' },                                                                              //
						_react2['default'].createElement('div', { id: 'spinner', className: 'spinner1' }),                    //
						_react2['default'].createElement(                                                                     //
							'div',                                                                                               //
							{ id: 'content_inner_actual_content' },                                                              //
							' ',                                                                                                 //
							this.props.content,                                                                                  //
							' '                                                                                                  //
						),                                                                                                    //
						_react2['default'].createElement('div', { className: 'sub_menu' }),                                   //
						_react2['default'].createElement(                                                                     //
							'div',                                                                                               //
							{ id: 'sub_content' },                                                                               //
							_react2['default'].createElement('div', { id: 'sub_spinner', className: 'sub_spinner1' })            //
						)                                                                                                     //
					)                                                                                                      //
				)                                                                                                       //
			);                                                                                                       //
		}                                                                                                         //
                                                                                                            //
		return render;                                                                                            //
	}();                                                                                                       //
                                                                                                            //
	return MainContentSection;                                                                                 //
}(_react.Component);                                                                                        //
                                                                                                            //
exports['default'] = MainContentSection;                                                                    //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"MainLayout.jsx":["react","./MainLayoutWrapper.jsx",function(require,exports){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// app/layouts/MainLayout.jsx                                                                               //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
exports.__esModule = true;                                                                                  //
exports.MainLayout = undefined;                                                                             //
                                                                                                            //
var _react = require('react');                                                                              // 1
                                                                                                            //
var _react2 = _interopRequireDefault(_react);                                                               //
                                                                                                            //
var _MainLayoutWrapper = require('./MainLayoutWrapper.jsx');                                                // 2
                                                                                                            //
var _MainLayoutWrapper2 = _interopRequireDefault(_MainLayoutWrapper);                                       //
                                                                                                            //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }           //
                                                                                                            //
var MainLayout = exports.MainLayout = function MainLayout(_ref) {                                           // 5
	var content = _ref.content;                                                                                //
	return _react2['default'].createElement(_MainLayoutWrapper2['default'], { content: content });             //
};                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"MainLayoutWrapper.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","./NavButton.jsx","../AccountsUI.jsx","./NavSideBar.jsx","./MainContentSection.jsx",function(require,exports){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// app/layouts/MainLayoutWrapper.jsx                                                                        //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
exports.__esModule = true;                                                                                  //
                                                                                                            //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                     //
                                                                                                            //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                            //
                                                                                                            //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');               //
                                                                                                            //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                      //
                                                                                                            //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                 //
                                                                                                            //
var _inherits3 = _interopRequireDefault(_inherits2);                                                        //
                                                                                                            //
var _react = require('react');                                                                              // 1
                                                                                                            //
var _react2 = _interopRequireDefault(_react);                                                               //
                                                                                                            //
var _NavButton = require('./NavButton.jsx');                                                                // 2
                                                                                                            //
var _NavButton2 = _interopRequireDefault(_NavButton);                                                       //
                                                                                                            //
var _AccountsUI = require('../AccountsUI.jsx');                                                             // 3
                                                                                                            //
var _AccountsUI2 = _interopRequireDefault(_AccountsUI);                                                     //
                                                                                                            //
var _NavSideBar = require('./NavSideBar.jsx');                                                              // 4
                                                                                                            //
var _NavSideBar2 = _interopRequireDefault(_NavSideBar);                                                     //
                                                                                                            //
var _MainContentSection = require('./MainContentSection.jsx');                                              // 5
                                                                                                            //
var _MainContentSection2 = _interopRequireDefault(_MainContentSection);                                     //
                                                                                                            //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }           //
                                                                                                            //
var MainLayoutWrapper = function (_Component) {                                                             //
	(0, _inherits3['default'])(MainLayoutWrapper, _Component);                                                 //
                                                                                                            //
	function MainLayoutWrapper(props, context) {                                                               // 9
		(0, _classCallCheck3['default'])(this, MainLayoutWrapper);                                                //
                                                                                                            //
		var _this = (0, _possibleConstructorReturn3['default'])(this, _Component.call(this, props, context));     //
                                                                                                            //
		_this.state = {                                                                                           // 12
			navButtonOn: false                                                                                       // 13
		};                                                                                                        //
		return _this;                                                                                             //
	}                                                                                                          //
                                                                                                            //
	MainLayoutWrapper.prototype.onChildChanged = function () {                                                 // 8
		function onChildChanged(newState) {                                                                       //
			this.setState({ navButtonOn: newState });                                                                // 18
		}                                                                                                         //
                                                                                                            //
		return onChildChanged;                                                                                    //
	}();                                                                                                       //
                                                                                                            //
	MainLayoutWrapper.prototype.render = function () {                                                         // 8
		function render() {                                                                                       //
			console.log(this.state.navButtonOn);                                                                     // 23
                                                                                                            //
			return _react2['default'].createElement(                                                                 // 25
				'div',                                                                                                  //
				{ className: 'main-layout' },                                                                           //
				_react2['default'].createElement(                                                                       //
					'div',                                                                                                 //
					{ id: 'wrapper' },                                                                                     //
					_react2['default'].createElement(                                                                      //
						'header',                                                                                             //
						{ id: 'nav_header' },                                                                                 //
						_react2['default'].createElement(                                                                     //
							'span',                                                                                              //
							{ className: 'header_title' },                                                                       //
							_react2['default'].createElement(                                                                    //
								'a',                                                                                                //
								{ href: '/' },                                                                                      //
								'ABACUS LEARNING LAB'                                                                               //
							)                                                                                                    //
						),                                                                                                    //
						_react2['default'].createElement(                                                                     //
							'button',                                                                                            //
							{ id: 'toggle', className: 'transparent-button smallBtn' },                                          //
							'Start editing'                                                                                      //
						),                                                                                                    //
						_react2['default'].createElement(                                                                     //
							'button',                                                                                            //
							{ id: 'reset', className: 'transparent-button smallBtn' },                                           //
							'Reset content'                                                                                      //
						),                                                                                                    //
						_react2['default'].createElement(                                                                     //
							'button',                                                                                            //
							{ id: 'save', className: 'transparent-button smallBtn' },                                            //
							'Save content'                                                                                       //
						),                                                                                                    //
						_react2['default'].createElement(_NavButton2['default'], { initialNavOn: this.state.navButtonOn, callbackParent: this.onChildChanged.bind(this) }),
						_react2['default'].createElement(                                                                     //
							'nav',                                                                                               //
							{ className: 'horizontal_nav' },                                                                     //
							_react2['default'].createElement(                                                                    //
								'a',                                                                                                //
								{ href: '/' },                                                                                      //
								'Home'                                                                                              //
							),                                                                                                   //
							_react2['default'].createElement(                                                                    //
								'a',                                                                                                //
								{ href: '/resolutions' },                                                                           //
								'Resolutions'                                                                                       //
							),                                                                                                   //
							_react2['default'].createElement(                                                                    //
								'a',                                                                                                //
								{ href: '/about' },                                                                                 //
								'About'                                                                                             //
							),                                                                                                   //
							_react2['default'].createElement(_AccountsUI2['default'], null)                                      //
						)                                                                                                     //
					),                                                                                                     //
					_react2['default'].createElement(_NavSideBar2['default'], { navSideBarOn: this.state.navButtonOn }),   //
					_react2['default'].createElement(_MainContentSection2['default'], { navSideBarOn: this.state.navButtonOn, content: this.props.content }),
					_react2['default'].createElement(                                                                      //
						'footer',                                                                                             //
						{ id: 'footer', className: 'footerNoNav' },                                                           //
						_react2['default'].createElement(                                                                     //
							'ul',                                                                                                //
							null,                                                                                                //
							_react2['default'].createElement(                                                                    //
								'li',                                                                                               //
								null,                                                                                               //
								_react2['default'].createElement('a', { href: 'https://www.youtube.com/user/abacuslearning?feature=watch', className: 'fa fa-youtube' })
							),                                                                                                   //
							_react2['default'].createElement(                                                                    //
								'li',                                                                                               //
								null,                                                                                               //
								_react2['default'].createElement('a', { href: 'https://www.facebook.com/Abacus-Maths-Learning-Course-211119545628882/timeline/', className: 'fa fa-facebook' })
							),                                                                                                   //
							_react2['default'].createElement(                                                                    //
								'li',                                                                                               //
								null,                                                                                               //
								_react2['default'].createElement('a', { href: 'https://plus.google.com/+AbacusmathsInfo/about', className: 'fa fa-google-plus' })
							),                                                                                                   //
							_react2['default'].createElement(                                                                    //
								'li',                                                                                               //
								null,                                                                                               //
								_react2['default'].createElement('a', { href: 'https://twitter.com/abacusmaths', target: '_blank', className: 'fa fa-twitter' })
							),                                                                                                   //
							_react2['default'].createElement(                                                                    //
								'li',                                                                                               //
								null,                                                                                               //
								_react2['default'].createElement('a', { href: 'https://www.linkedin.com/in/noby-fujioka-6741656', target: '_blank', className: 'fa fa-linkedin' })
							),                                                                                                   //
							_react2['default'].createElement(                                                                    //
								'li',                                                                                               //
								null,                                                                                               //
								_react2['default'].createElement('a', { href: 'mailto:contact@abacusmaths.info', target: '_blank', className: 'fa fa-envelope-o' })
							)                                                                                                    //
						),                                                                                                    //
						_react2['default'].createElement(                                                                     //
							'ul',                                                                                                //
							null,                                                                                                //
							_react2['default'].createElement(                                                                    //
								'li',                                                                                               //
								{ className: 'copyright' },                                                                         //
								'© Abacus Learning Lab'                                                                             //
							)                                                                                                    //
						)                                                                                                     //
					)                                                                                                      //
				)                                                                                                       //
			);                                                                                                       //
		}                                                                                                         //
                                                                                                            //
		return render;                                                                                            //
	}();                                                                                                       //
                                                                                                            //
	return MainLayoutWrapper;                                                                                  //
}(_react.Component);                                                                                        //
                                                                                                            //
exports['default'] = MainLayoutWrapper;                                                                     //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"NavButton.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/ultimatejs:tracker-react","react-addons-css-transition-group",function(require,exports){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// app/layouts/NavButton.jsx                                                                                //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
exports.__esModule = true;                                                                                  //
                                                                                                            //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                     //
                                                                                                            //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                            //
                                                                                                            //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');               //
                                                                                                            //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                      //
                                                                                                            //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                 //
                                                                                                            //
var _inherits3 = _interopRequireDefault(_inherits2);                                                        //
                                                                                                            //
var _react = require('react');                                                                              // 1
                                                                                                            //
var _react2 = _interopRequireDefault(_react);                                                               //
                                                                                                            //
var _ultimatejsTrackerReact = require('meteor/ultimatejs:tracker-react');                                   // 2
                                                                                                            //
var _ultimatejsTrackerReact2 = _interopRequireDefault(_ultimatejsTrackerReact);                             //
                                                                                                            //
var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');                          // 3
                                                                                                            //
var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);               //
                                                                                                            //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }           //
                                                                                                            //
var NavButton = function (_Component) {                                                                     //
	(0, _inherits3['default'])(NavButton, _Component);                                                         //
                                                                                                            //
	function NavButton(props, context) {                                                                       // 6
		(0, _classCallCheck3['default'])(this, NavButton);                                                        //
                                                                                                            //
		var _this = (0, _possibleConstructorReturn3['default'])(this, _Component.call(this, props, context));     //
                                                                                                            //
		_this.state = {                                                                                           // 9
			navButtonOn: _this.props.initialNavOn                                                                    // 10
		};                                                                                                        //
		return _this;                                                                                             //
	}                                                                                                          //
                                                                                                            //
	NavButton.prototype._toggleNavSideBar = function () {                                                      // 5
		function _toggleNavSideBar() {                                                                            //
			console.log('navkey clicked!', this.state.navButtonOn);                                                  // 15
			var newState = !this.state.navButtonOn;                                                                  // 16
                                                                                                            //
			this.setState({                                                                                          // 18
				navButtonOn: newState                                                                                   // 19
			});                                                                                                      //
			this.props.callbackParent(newState);                                                                     // 21
		}                                                                                                         //
                                                                                                            //
		return _toggleNavSideBar;                                                                                 //
	}();                                                                                                       //
                                                                                                            //
	NavButton.prototype.render = function () {                                                                 // 5
		function render() {                                                                                       //
			console.log('navComponent state', this.state.navButtonOn);                                               // 25
			if (this.state.navButtonOn) {                                                                            // 26
				var menuButtonClass = "";                                                                               // 27
				console.log('menu-bottn is on');                                                                        // 28
			} else {                                                                                                 //
				var menuButtonClass = "menu-button-off";                                                                // 30
				console.log('menu-bottn is off');                                                                       // 31
			}                                                                                                        //
                                                                                                            //
			return _react2['default'].createElement(                                                                 // 34
				'div',                                                                                                  //
				{ id: 'menu-button', className: menuButtonClass, onClick: this._toggleNavSideBar.bind(this) },          //
				_react2['default'].createElement('div', { id: 'line1', className: 'hamburger-lines1' }),                //
				_react2['default'].createElement('div', { id: 'line2', className: 'hamburger-lines2' }),                //
				_react2['default'].createElement('div', { id: 'line3', className: 'hamburger-lines3' }),                //
				_react2['default'].createElement('div', { id: 'line4', className: 'hamburger-lines4' })                 //
			);                                                                                                       //
		}                                                                                                         //
                                                                                                            //
		return render;                                                                                            //
	}();                                                                                                       //
                                                                                                            //
	return NavButton;                                                                                          //
}(_react.Component);                                                                                        //
                                                                                                            //
exports['default'] = NavButton;                                                                             //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"NavSideBar.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/ultimatejs:tracker-react","react-addons-css-transition-group",function(require,exports){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// app/layouts/NavSideBar.jsx                                                                               //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
exports.__esModule = true;                                                                                  //
                                                                                                            //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                     //
                                                                                                            //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                            //
                                                                                                            //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');               //
                                                                                                            //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                      //
                                                                                                            //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                 //
                                                                                                            //
var _inherits3 = _interopRequireDefault(_inherits2);                                                        //
                                                                                                            //
var _react = require('react');                                                                              // 1
                                                                                                            //
var _react2 = _interopRequireDefault(_react);                                                               //
                                                                                                            //
var _ultimatejsTrackerReact = require('meteor/ultimatejs:tracker-react');                                   // 2
                                                                                                            //
var _ultimatejsTrackerReact2 = _interopRequireDefault(_ultimatejsTrackerReact);                             //
                                                                                                            //
var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');                          // 3
                                                                                                            //
var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);               //
                                                                                                            //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }           //
                                                                                                            //
var NavSideBar = function (_Component) {                                                                    //
	(0, _inherits3['default'])(NavSideBar, _Component);                                                        //
                                                                                                            //
	function NavSideBar() {                                                                                    //
		(0, _classCallCheck3['default'])(this, NavSideBar);                                                       //
		return (0, _possibleConstructorReturn3['default'])(this, _Component.apply(this, arguments));              //
	}                                                                                                          //
                                                                                                            //
	NavSideBar.prototype.render = function () {                                                                //
		function render() {                                                                                       //
			if (this.props.navSideBarOn) {                                                                           // 8
				navSideBarClass = "";                                                                                   // 9
			} else {                                                                                                 //
				navSideBarClass = "navHide";                                                                            // 11
			}                                                                                                        //
                                                                                                            //
			return _react2['default'].createElement(                                                                 // 14
				'nav',                                                                                                  //
				{ id: 'nav', className: navSideBarClass },                                                              //
				_react2['default'].createElement(                                                                       //
					'ul',                                                                                                  //
					{ id: 'mainnav' },                                                                                     //
					_react2['default'].createElement(                                                                      //
						'li',                                                                                                 //
						null,                                                                                                 //
						_react2['default'].createElement(                                                                     //
							'a',                                                                                                 //
							{ href: '/' },                                                                                       //
							'Home'                                                                                               //
						)                                                                                                     //
					),                                                                                                     //
					_react2['default'].createElement(                                                                      //
						'li',                                                                                                 //
						null,                                                                                                 //
						_react2['default'].createElement(                                                                     //
							'a',                                                                                                 //
							{ href: 'section_1' },                                                                               //
							'Vision'                                                                                             //
						)                                                                                                     //
					),                                                                                                     //
					_react2['default'].createElement(                                                                      //
						'li',                                                                                                 //
						null,                                                                                                 //
						_react2['default'].createElement(                                                                     //
							'a',                                                                                                 //
							{ href: 'section_2' },                                                                               //
							'Courses'                                                                                            //
						)                                                                                                     //
					),                                                                                                     //
					_react2['default'].createElement(                                                                      //
						'li',                                                                                                 //
						null,                                                                                                 //
						_react2['default'].createElement(                                                                     //
							'a',                                                                                                 //
							{ href: 'section_3' },                                                                               //
							'News'                                                                                               //
						)                                                                                                     //
					),                                                                                                     //
					_react2['default'].createElement(                                                                      //
						'li',                                                                                                 //
						null,                                                                                                 //
						_react2['default'].createElement(                                                                     //
							'a',                                                                                                 //
							{ href: 'section_4' },                                                                               //
							'Creativity'                                                                                         //
						)                                                                                                     //
					),                                                                                                     //
					_react2['default'].createElement(                                                                      //
						'li',                                                                                                 //
						null,                                                                                                 //
						_react2['default'].createElement(                                                                     //
							'a',                                                                                                 //
							{ href: 'section_5' },                                                                               //
							'Contact'                                                                                            //
						)                                                                                                     //
					),                                                                                                     //
					_react2['default'].createElement(                                                                      //
						'li',                                                                                                 //
						null,                                                                                                 //
						_react2['default'].createElement(                                                                     //
							'a',                                                                                                 //
							{ href: 'parent_signup' },                                                                           //
							'Sign Up'                                                                                            //
						)                                                                                                     //
					)                                                                                                      //
				)                                                                                                       //
			);                                                                                                       //
		}                                                                                                         //
                                                                                                            //
		return render;                                                                                            //
	}();                                                                                                       //
                                                                                                            //
	return NavSideBar;                                                                                         //
}(_react.Component);                                                                                        //
                                                                                                            //
exports['default'] = NavSideBar;                                                                            //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"resolutions":{"ResolutionDetail.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/ultimatejs:tracker-react",function(require,exports){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// app/resolutions/ResolutionDetail.jsx                                                                     //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
exports.__esModule = true;                                                                                  //
                                                                                                            //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                     //
                                                                                                            //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                            //
                                                                                                            //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');               //
                                                                                                            //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                      //
                                                                                                            //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                 //
                                                                                                            //
var _inherits3 = _interopRequireDefault(_inherits2);                                                        //
                                                                                                            //
var _react = require('react');                                                                              // 1
                                                                                                            //
var _react2 = _interopRequireDefault(_react);                                                               //
                                                                                                            //
var _ultimatejsTrackerReact = require('meteor/ultimatejs:tracker-react');                                   // 2
                                                                                                            //
var _ultimatejsTrackerReact2 = _interopRequireDefault(_ultimatejsTrackerReact);                             //
                                                                                                            //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }           //
                                                                                                            //
var ResolutionDetail = function (_Component) {                                                              //
	(0, _inherits3['default'])(ResolutionDetail, _Component);                                                  //
                                                                                                            //
	function ResolutionDetail() {                                                                              // 5
		(0, _classCallCheck3['default'])(this, ResolutionDetail);                                                 //
                                                                                                            //
		var _this = (0, _possibleConstructorReturn3['default'])(this, _Component.call(this));                     //
                                                                                                            //
		_this.state = {                                                                                           // 8
			subscription: {                                                                                          // 9
				resolutions: Meteor.subscribe("userResolutions")                                                        // 10
			}                                                                                                        //
		};                                                                                                        //
		return _this;                                                                                             //
	}                                                                                                          //
                                                                                                            //
	ResolutionDetail.prototype.componentWillUnmount = function () {                                            // 4
		function componentWillUnmount() {                                                                         //
			this.state.subscription.resolutions.stop();                                                              // 16
		}                                                                                                         //
                                                                                                            //
		return componentWillUnmount;                                                                              //
	}();                                                                                                       //
                                                                                                            //
	ResolutionDetail.prototype.resolution = function () {                                                      // 4
		function resolution() {                                                                                   //
			console.log(Resolutions.findOne(this.props.id));                                                         // 20
			return Resolutions.findOne(this.props.id);                                                               // 21
		}                                                                                                         //
                                                                                                            //
		return resolution;                                                                                        //
	}();                                                                                                       //
                                                                                                            //
	ResolutionDetail.prototype.render = function () {                                                          // 4
		function render() {                                                                                       //
			var res = this.resolution();                                                                             // 25
                                                                                                            //
			if (!res) {                                                                                              // 27
				return _react2['default'].createElement(                                                                // 28
					'div',                                                                                                 //
					null,                                                                                                  //
					'Loading...'                                                                                           //
				);                                                                                                      //
			}                                                                                                        //
			return _react2['default'].createElement(                                                                 // 30
				'div',                                                                                                  //
				null,                                                                                                   //
				_react2['default'].createElement(                                                                       //
					'h1',                                                                                                  //
					null,                                                                                                  //
					res.text                                                                                               //
				)                                                                                                       //
			);                                                                                                       //
		}                                                                                                         //
                                                                                                            //
		return render;                                                                                            //
	}();                                                                                                       //
                                                                                                            //
	return ResolutionDetail;                                                                                   //
}(_react.Component);                                                                                        //
                                                                                                            //
exports['default'] = ResolutionDetail;                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"ResolutionSingle.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react",function(require,exports){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// app/resolutions/ResolutionSingle.jsx                                                                     //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
exports.__esModule = true;                                                                                  //
                                                                                                            //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                     //
                                                                                                            //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                            //
                                                                                                            //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');               //
                                                                                                            //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                      //
                                                                                                            //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                 //
                                                                                                            //
var _inherits3 = _interopRequireDefault(_inherits2);                                                        //
                                                                                                            //
var _react = require('react');                                                                              // 1
                                                                                                            //
var _react2 = _interopRequireDefault(_react);                                                               //
                                                                                                            //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }           //
                                                                                                            //
var ResolutionSingle = function (_Component) {                                                              //
	(0, _inherits3['default'])(ResolutionSingle, _Component);                                                  //
                                                                                                            //
	function ResolutionSingle() {                                                                              //
		(0, _classCallCheck3['default'])(this, ResolutionSingle);                                                 //
		return (0, _possibleConstructorReturn3['default'])(this, _Component.apply(this, arguments));              //
	}                                                                                                          //
                                                                                                            //
	ResolutionSingle.prototype.toggleChecked = function () {                                                   //
		function toggleChecked() {                                                                                //
			Meteor.call('toggleResolution', this.props.resolution);                                                  // 6
		}                                                                                                         //
                                                                                                            //
		return toggleChecked;                                                                                     //
	}();                                                                                                       //
                                                                                                            //
	ResolutionSingle.prototype.deleteResolution = function () {                                                // 3
		function deleteResolution() {                                                                             //
			Meteor.call('deleteResolution', this.props.resolution);                                                  // 10
		}                                                                                                         //
                                                                                                            //
		return deleteResolution;                                                                                  //
	}();                                                                                                       //
                                                                                                            //
	ResolutionSingle.prototype.render = function () {                                                          // 3
		function render() {                                                                                       //
			var resolutionClass = this.props.resolution.complete ? "checked" : ""; //if complete is true, then add class "checked" to resolutionClass
			var status = this.props.resolution.complete ? _react2['default'].createElement(                          // 13
				'span',                                                                                                 //
				{ className: 'completed' },                                                                             //
				'Completed'                                                                                             //
			) : "";                                                                                                  //
                                                                                                            //
			return _react2['default'].createElement(                                                                 // 17
				'li',                                                                                                   //
				{ className: resolutionClass },                                                                         //
				_react2['default'].createElement('input', { type: 'checkbox',                                           //
					readOnly: true,                                                                                        // 20
					checked: this.props.resolution.complete,                                                               // 21
					onClick: this.toggleChecked.bind(this) }),                                                             // 22
				_react2['default'].createElement(                                                                       //
					'a',                                                                                                   //
					{ href: '/resolutions/' + this.props.resolution._id },                                                 //
					this.props.resolution.text                                                                             //
				),                                                                                                      //
				status,                                                                                                 //
				_react2['default'].createElement(                                                                       //
					'button',                                                                                              //
					{ className: 'btn-cancel',                                                                             //
						onClick: this.deleteResolution.bind(this) },                                                          // 26
					'×'                                                                                                    //
				)                                                                                                       //
			);                                                                                                       //
		}                                                                                                         //
                                                                                                            //
		return render;                                                                                            //
	}();                                                                                                       //
                                                                                                            //
	return ResolutionSingle;                                                                                   //
}(_react.Component);                                                                                        //
                                                                                                            //
exports['default'] = ResolutionSingle;                                                                      //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"ResolutionsForm.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react",function(require,exports){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// app/resolutions/ResolutionsForm.jsx                                                                      //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
exports.__esModule = true;                                                                                  //
                                                                                                            //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                     //
                                                                                                            //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                            //
                                                                                                            //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');               //
                                                                                                            //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                      //
                                                                                                            //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                 //
                                                                                                            //
var _inherits3 = _interopRequireDefault(_inherits2);                                                        //
                                                                                                            //
var _react = require('react');                                                                              // 1
                                                                                                            //
var _react2 = _interopRequireDefault(_react);                                                               //
                                                                                                            //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }           //
                                                                                                            //
var ResolutionsForm = function (_Component) {                                                               //
	(0, _inherits3['default'])(ResolutionsForm, _Component);                                                   //
                                                                                                            //
	function ResolutionsForm() {                                                                               //
		(0, _classCallCheck3['default'])(this, ResolutionsForm);                                                  //
		return (0, _possibleConstructorReturn3['default'])(this, _Component.apply(this, arguments));              //
	}                                                                                                          //
                                                                                                            //
	ResolutionsForm.prototype.addResolution = function () {                                                    //
		function addResolution(event) {                                                                           //
			var _this2 = this;                                                                                       //
                                                                                                            //
			event.preventDefault();                                                                                  // 5
			var text = this.refs.resolution.value.trim();                                                            // 6
                                                                                                            //
			Meteor.call('addResolution', text, function (error, data) {                                              // 8
				if (error) {                                                                                            // 9
					Bert.alert('Please login before submitting', 'danger', 'fixed-top', 'fa-frown-o');                     // 10
				} else {                                                                                                //
					_this2.refs.resolution.value = "";                                                                     // 12
				}                                                                                                       //
			});                                                                                                      //
		}                                                                                                         //
                                                                                                            //
		return addResolution;                                                                                     //
	}();                                                                                                       //
                                                                                                            //
	ResolutionsForm.prototype.render = function () {                                                           // 3
		function render() {                                                                                       //
			return _react2['default'].createElement(                                                                 // 18
				'form',                                                                                                 //
				{ className: 'new-resolution', onSubmit: this.addResolution.bind(this) },                               //
				_react2['default'].createElement('input', {                                                             //
					type: 'text',                                                                                          // 21
					ref: 'resolution',                                                                                     // 22
					placeholder: 'Finish React Meteor Series' })                                                           // 23
			);                                                                                                       //
		}                                                                                                         //
                                                                                                            //
		return render;                                                                                            //
	}();                                                                                                       //
                                                                                                            //
	return ResolutionsForm;                                                                                    //
}(_react.Component);                                                                                        //
                                                                                                            //
exports['default'] = ResolutionsForm;                                                                       //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"ResolutionsWrapper.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","meteor/ultimatejs:tracker-react","react-addons-css-transition-group","./ResolutionsForm.jsx","./ResolutionSingle.jsx",function(require,exports){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// app/resolutions/ResolutionsWrapper.jsx                                                                   //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
exports.__esModule = true;                                                                                  //
                                                                                                            //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                     //
                                                                                                            //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                            //
                                                                                                            //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');               //
                                                                                                            //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                      //
                                                                                                            //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                 //
                                                                                                            //
var _inherits3 = _interopRequireDefault(_inherits2);                                                        //
                                                                                                            //
var _react = require('react');                                                                              // 1
                                                                                                            //
var _react2 = _interopRequireDefault(_react);                                                               //
                                                                                                            //
var _ultimatejsTrackerReact = require('meteor/ultimatejs:tracker-react');                                   // 2
                                                                                                            //
var _ultimatejsTrackerReact2 = _interopRequireDefault(_ultimatejsTrackerReact);                             //
                                                                                                            //
var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');                          // 3
                                                                                                            //
var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);               //
                                                                                                            //
var _ResolutionsForm = require('./ResolutionsForm.jsx');                                                    // 5
                                                                                                            //
var _ResolutionsForm2 = _interopRequireDefault(_ResolutionsForm);                                           //
                                                                                                            //
var _ResolutionSingle = require('./ResolutionSingle.jsx');                                                  // 6
                                                                                                            //
var _ResolutionSingle2 = _interopRequireDefault(_ResolutionSingle);                                         //
                                                                                                            //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }           //
                                                                                                            //
if (Meteor.isClient) {                                                                                      // 8
	Resolutions = new Mongo.Collection("resolutions");                                                         // 9
}                                                                                                           //
                                                                                                            //
var ResolutionsWrapper = function (_TrackerReact) {                                                         //
	(0, _inherits3['default'])(ResolutionsWrapper, _TrackerReact);                                             //
                                                                                                            //
	function ResolutionsWrapper() {                                                                            // 14
		(0, _classCallCheck3['default'])(this, ResolutionsWrapper);                                               //
                                                                                                            //
		var _this = (0, _possibleConstructorReturn3['default'])(this, _TrackerReact.call(this));                  //
                                                                                                            //
		_this.state = {                                                                                           // 17
			subscription: {                                                                                          // 18
				resolutions: Meteor.subscribe("userResolutions")                                                        // 19
			}                                                                                                        //
		};                                                                                                        //
		return _this;                                                                                             //
	}                                                                                                          //
                                                                                                            //
	ResolutionsWrapper.prototype.componentWillUnmount = function () {                                          // 13
		function componentWillUnmount() {                                                                         //
			this.state.subscription.resolutions.stop();                                                              // 25
		}                                                                                                         //
                                                                                                            //
		return componentWillUnmount;                                                                              //
	}();                                                                                                       //
                                                                                                            //
	ResolutionsWrapper.prototype.resolutions = function () {                                                   // 13
		function resolutions() {                                                                                  //
			return Resolutions.find().fetch();                                                                       // 29
		}                                                                                                         //
                                                                                                            //
		return resolutions;                                                                                       //
	}();                                                                                                       //
                                                                                                            //
	ResolutionsWrapper.prototype.render = function () {                                                        // 13
		function render() {                                                                                       //
			DocHead.setTitle('My Resolutions | Abacus Learning Lab');                                                // 33
			return _react2['default'].createElement(                                                                 // 34
				_reactAddonsCssTransitionGroup2['default'],                                                             //
				{                                                                                                       //
					component: 'div',                                                                                      // 36
					transitionName: 'route',                                                                               // 37
					transitionEnterTimeout: 600,                                                                           // 38
					transitionAppearTimeout: 600,                                                                          // 39
					transitionLeaveTimeout: 400,                                                                           // 40
					transitionAppear: true },                                                                              // 41
				_react2['default'].createElement(                                                                       //
					'h1',                                                                                                  //
					null,                                                                                                  //
					'My Resolutions'                                                                                       //
				),                                                                                                      //
				_react2['default'].createElement(_ResolutionsForm2['default'], null),                                   //
				_react2['default'].createElement(                                                                       //
					_reactAddonsCssTransitionGroup2['default'],                                                            //
					{                                                                                                      //
						component: 'ul',                                                                                      // 45
						className: 'resolutions',                                                                             // 46
						transitionName: 'resolutionLoad',                                                                     // 47
						transitionEnterTimeout: 600,                                                                          // 48
						transitionLeaveTimeout: 400 },                                                                        // 49
					this.resolutions().map(function (resolution) {                                                         //
						return _react2['default'].createElement(_ResolutionSingle2['default'], { key: resolution._id, resolution: resolution });
					})                                                                                                     //
				)                                                                                                       //
			);                                                                                                       //
		}                                                                                                         //
                                                                                                            //
		return render;                                                                                            //
	}();                                                                                                       //
                                                                                                            //
	return ResolutionsWrapper;                                                                                 //
}((0, _ultimatejsTrackerReact2['default'])(_react2['default'].Component));                                  //
                                                                                                            //
exports['default'] = ResolutionsWrapper;                                                                    //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]},"About.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","react-addons-css-transition-group",function(require,exports){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// app/About.jsx                                                                                            //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
exports.__esModule = true;                                                                                  //
                                                                                                            //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                     //
                                                                                                            //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                            //
                                                                                                            //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');               //
                                                                                                            //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                      //
                                                                                                            //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                 //
                                                                                                            //
var _inherits3 = _interopRequireDefault(_inherits2);                                                        //
                                                                                                            //
var _react = require('react');                                                                              // 1
                                                                                                            //
var _react2 = _interopRequireDefault(_react);                                                               //
                                                                                                            //
var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');                          // 2
                                                                                                            //
var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);               //
                                                                                                            //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }           //
                                                                                                            //
var About = function (_Component) {                                                                         //
	(0, _inherits3['default'])(About, _Component);                                                             //
                                                                                                            //
	function About() {                                                                                         //
		(0, _classCallCheck3['default'])(this, About);                                                            //
		return (0, _possibleConstructorReturn3['default'])(this, _Component.apply(this, arguments));              //
	}                                                                                                          //
                                                                                                            //
	About.prototype.setVar = function () {                                                                     //
		function setVar() {                                                                                       //
			Session.set('Meteor.loginButtons.dropdownVisible', true);                                                // 7
		}                                                                                                         //
                                                                                                            //
		return setVar;                                                                                            //
	}();                                                                                                       //
                                                                                                            //
	About.prototype.render = function () {                                                                     // 4
		function render() {                                                                                       //
			DocHead.setTitle('About | Abacus Learning Lab');                                                         // 11
			return _react2['default'].createElement(                                                                 // 12
				_reactAddonsCssTransitionGroup2['default'],                                                             //
				{                                                                                                       //
					component: 'div',                                                                                      // 14
					transitionName: 'route',                                                                               // 15
					transitionEnterTimeout: 600,                                                                           // 16
					transitionAppearTimeout: 600,                                                                          // 17
					transitionLeaveTimeout: 400,                                                                           // 18
					transitionAppear: true },                                                                              // 19
				_react2['default'].createElement(                                                                       //
					'h1',                                                                                                  //
					null,                                                                                                  //
					'About us'                                                                                             //
				),                                                                                                      //
				_react2['default'].createElement(                                                                       //
					'p',                                                                                                   //
					null,                                                                                                  //
					'Mustache typewriter tote bag lo-fi. Viral typewriter synth cray, listicle four dollar toast cardigan 90s ethical seitan fanny pack. Man bun small batch tote bag hella, health goth lumbersexual pitchfork pour-over banjo shabby chic DIY everyday carry banh mi skateboard. Hashtag viral pug typewriter ugh, stumptown vice church-key tote bag chartreuse thundercats jean shorts. Fashion axe flexitarian messenger bag paleo, microdosing small batch leggings marfa venmo shoreditch letterpress single-origin coffee waistcoat twee direct trade. Cred readymade echo park, bicycle rights paleo raw denim next level chia green juice. Jean shorts direct trade flexitarian yr gentrify.'
				),                                                                                                      //
				_react2['default'].createElement(                                                                       //
					'button',                                                                                              //
					{ onClick: this.setVar },                                                                              //
					'Sign Up'                                                                                              //
				)                                                                                                       //
			);                                                                                                       //
		}                                                                                                         //
                                                                                                            //
		return render;                                                                                            //
	}();                                                                                                       //
                                                                                                            //
	return About;                                                                                              //
}(_react.Component);                                                                                        //
                                                                                                            //
exports['default'] = About;                                                                                 //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"AccountsUI.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","react-dom",function(require,exports){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// app/AccountsUI.jsx                                                                                       //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
exports.__esModule = true;                                                                                  //
                                                                                                            //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                     //
                                                                                                            //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                            //
                                                                                                            //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');               //
                                                                                                            //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                      //
                                                                                                            //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                 //
                                                                                                            //
var _inherits3 = _interopRequireDefault(_inherits2);                                                        //
                                                                                                            //
var _react = require('react');                                                                              // 1
                                                                                                            //
var _react2 = _interopRequireDefault(_react);                                                               //
                                                                                                            //
var _reactDom = require('react-dom');                                                                       // 2
                                                                                                            //
var _reactDom2 = _interopRequireDefault(_reactDom);                                                         //
                                                                                                            //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }           //
                                                                                                            //
var AccountsUI = function (_Component) {                                                                    //
	(0, _inherits3['default'])(AccountsUI, _Component);                                                        //
                                                                                                            //
	function AccountsUI() {                                                                                    //
		(0, _classCallCheck3['default'])(this, AccountsUI);                                                       //
		return (0, _possibleConstructorReturn3['default'])(this, _Component.apply(this, arguments));              //
	}                                                                                                          //
                                                                                                            //
	AccountsUI.prototype.componentDidMount = function () {                                                     //
		function componentDidMount() {                                                                            //
			this.view = Blaze.render(Template.loginButtons, _reactDom2['default'].findDOMNode(this.refs.container));
		}                                                                                                         //
                                                                                                            //
		return componentDidMount;                                                                                 //
	}();                                                                                                       //
                                                                                                            //
	AccountsUI.prototype.compoentWillUnmount = function () {                                                   // 4
		function compoentWillUnmount() {                                                                          //
			Blaze.remove(this.view);                                                                                 // 12
		}                                                                                                         //
                                                                                                            //
		return compoentWillUnmount;                                                                               //
	}();                                                                                                       //
                                                                                                            //
	AccountsUI.prototype.render = function () {                                                                // 4
		function render() {                                                                                       //
			return _react2['default'].createElement('span', { ref: 'container' });                                   // 16
		}                                                                                                         //
                                                                                                            //
		return render;                                                                                            //
	}();                                                                                                       //
                                                                                                            //
	return AccountsUI;                                                                                         //
}(_react.Component);                                                                                        //
                                                                                                            //
exports['default'] = AccountsUI;                                                                            //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"Welcome.jsx":["babel-runtime/helpers/classCallCheck","babel-runtime/helpers/possibleConstructorReturn","babel-runtime/helpers/inherits","react","react-addons-css-transition-group",function(require,exports){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// app/Welcome.jsx                                                                                          //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
exports.__esModule = true;                                                                                  //
                                                                                                            //
var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');                                     //
                                                                                                            //
var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);                                            //
                                                                                                            //
var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');               //
                                                                                                            //
var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);                      //
                                                                                                            //
var _inherits2 = require('babel-runtime/helpers/inherits');                                                 //
                                                                                                            //
var _inherits3 = _interopRequireDefault(_inherits2);                                                        //
                                                                                                            //
var _react = require('react');                                                                              // 1
                                                                                                            //
var _react2 = _interopRequireDefault(_react);                                                               //
                                                                                                            //
var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');                          // 2
                                                                                                            //
var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);               //
                                                                                                            //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }           //
                                                                                                            //
var Welcome = function (_Component) {                                                                       //
	(0, _inherits3['default'])(Welcome, _Component);                                                           //
                                                                                                            //
	function Welcome() {                                                                                       //
		(0, _classCallCheck3['default'])(this, Welcome);                                                          //
		return (0, _possibleConstructorReturn3['default'])(this, _Component.apply(this, arguments));              //
	}                                                                                                          //
                                                                                                            //
	Welcome.prototype.setVar = function () {                                                                   //
		function setVar() {                                                                                       //
			Session.set('Meteor.loginButtons.dropdownVisible', true);                                                // 7
		}                                                                                                         //
                                                                                                            //
		return setVar;                                                                                            //
	}();                                                                                                       //
                                                                                                            //
	Welcome.prototype.render = function () {                                                                   // 4
		function render() {                                                                                       //
			DocHead.setTitle('Welcome | Abacus Learing Lab');                                                        // 11
			return _react2['default'].createElement(                                                                 // 12
				_reactAddonsCssTransitionGroup2['default'],                                                             //
				{                                                                                                       //
					component: 'div',                                                                                      // 14
					transitionName: 'route',                                                                               // 15
					transitionEnterTimeout: 600,                                                                           // 16
					transitionAppearTimeout: 600,                                                                          // 17
					transitionLeaveTimeout: 400,                                                                           // 18
					transitionAppear: true },                                                                              // 19
				_react2['default'].createElement(                                                                       //
					'header',                                                                                              //
					{ id: 'big_header' },                                                                                  //
					_react2['default'].createElement(                                                                      //
						'center',                                                                                             //
						null,                                                                                                 //
						_react2['default'].createElement(                                                                     //
							'h1',                                                                                                //
							{ id: 'big_title' },                                                                                 //
							'ABACUS LEARNING LAB'                                                                                //
						),                                                                                                    //
						_react2['default'].createElement(                                                                     //
							'nav',                                                                                               //
							{ className: 'hide_onclick sub_menu' },                                                              //
							_react2['default'].createElement(                                                                    //
								'p',                                                                                                //
								null,                                                                                               //
								_react2['default'].createElement(                                                                   //
									'a',                                                                                               //
									{ className: 'strapline', className: 'fadein' },                                                   //
									'Place to learn & practice abacus and maths!'                                                      //
								)                                                                                                   //
							),                                                                                                   //
							_react2['default'].createElement(                                                                    //
								'div',                                                                                              //
								{ className: 'block_connector' },                                                                   //
								_react2['default'].createElement(                                                                   //
									'p',                                                                                               //
									null,                                                                                              //
									' ',                                                                                               //
									_react2['default'].createElement(                                                                  //
										'a',                                                                                              //
										{ href: '/about', className: 'page_link ghost-button lightblue_back introButtonWidth' },          //
										'Learn more'                                                                                      //
									)                                                                                                  //
								),                                                                                                  //
								_react2['default'].createElement(                                                                   //
									'p',                                                                                               //
									null,                                                                                              //
									' ',                                                                                               //
									_react2['default'].createElement(                                                                  //
										'a',                                                                                              //
										{ href: 'signup', className: 'sub_option ghost-button red_back introButtonWidth' },               //
										'Sign up'                                                                                         //
									)                                                                                                  //
								),                                                                                                  //
								_react2['default'].createElement(                                                                   //
									'p',                                                                                               //
									null,                                                                                              //
									' ',                                                                                               //
									_react2['default'].createElement(                                                                  //
										'a',                                                                                              //
										{ href: '', className: 'ghost-button lime_back introButtonWidth' },                               //
										'Find us'                                                                                         //
									)                                                                                                  //
								)                                                                                                   //
							),                                                                                                   //
							_react2['default'].createElement(                                                                    //
								'div',                                                                                              //
								{ className: 'block_connector' },                                                                   //
								_react2['default'].createElement(                                                                   //
									'p',                                                                                               //
									null,                                                                                              //
									' ',                                                                                               //
									_react2['default'].createElement(                                                                  //
										'a',                                                                                              //
										{ href: '', className: 'ghost-button purple_back introButtonWidth' },                             //
										'Chat with us'                                                                                    //
									)                                                                                                  //
								),                                                                                                  //
								_react2['default'].createElement(                                                                   //
									'p',                                                                                               //
									null,                                                                                              //
									' ',                                                                                               //
									_react2['default'].createElement(                                                                  //
										'a',                                                                                              //
										{ href: '', className: 'ghost-button orange_back introButtonWidth' },                             //
										'Call us'                                                                                         //
									)                                                                                                  //
								),                                                                                                  //
								_react2['default'].createElement(                                                                   //
									'p',                                                                                               //
									null,                                                                                              //
									' ',                                                                                               //
									_react2['default'].createElement(                                                                  //
										'a',                                                                                              //
										{ href: '', className: 'ghost-button green_back introButtonWidth' },                              //
										'Email us'                                                                                        //
									)                                                                                                  //
								)                                                                                                   //
							),                                                                                                   //
							_react2['default'].createElement(                                                                    //
								'p',                                                                                                //
								null,                                                                                               //
								' ',                                                                                                //
								_react2['default'].createElement(                                                                   //
									'a',                                                                                               //
									{ className: 'sub_option ghost-button lightblue_back introButtonWidth', onClick: this.setVar },    //
									'Log in'                                                                                           //
								)                                                                                                   //
							)                                                                                                    //
						)                                                                                                     //
					)                                                                                                      //
				)                                                                                                       //
			);                                                                                                       //
		}                                                                                                         //
                                                                                                            //
		return render;                                                                                            //
	}();                                                                                                       //
                                                                                                            //
	return Welcome;                                                                                            //
}(_react.Component);                                                                                        //
                                                                                                            //
exports['default'] = Welcome;                                                                               //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}],"routes.jsx":["react","react-mounter","./layouts/MainLayout.jsx","./resolutions/ResolutionsWrapper.jsx","./About.jsx","./Welcome.jsx","./resolutions/ResolutionDetail.jsx",function(require){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                          //
// app/routes.jsx                                                                                           //
//                                                                                                          //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                            //
var _react = require('react');                                                                              // 1
                                                                                                            //
var _react2 = _interopRequireDefault(_react);                                                               //
                                                                                                            //
var _reactMounter = require('react-mounter');                                                               // 2
                                                                                                            //
var _MainLayout = require('./layouts/MainLayout.jsx');                                                      // 3
                                                                                                            //
var _ResolutionsWrapper = require('./resolutions/ResolutionsWrapper.jsx');                                  // 4
                                                                                                            //
var _ResolutionsWrapper2 = _interopRequireDefault(_ResolutionsWrapper);                                     //
                                                                                                            //
var _About = require('./About.jsx');                                                                        // 5
                                                                                                            //
var _About2 = _interopRequireDefault(_About);                                                               //
                                                                                                            //
var _Welcome = require('./Welcome.jsx');                                                                    // 6
                                                                                                            //
var _Welcome2 = _interopRequireDefault(_Welcome);                                                           //
                                                                                                            //
var _ResolutionDetail = require('./resolutions/ResolutionDetail.jsx');                                      // 7
                                                                                                            //
var _ResolutionDetail2 = _interopRequireDefault(_ResolutionDetail);                                         //
                                                                                                            //
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }           //
                                                                                                            //
FlowRouter.route('/', {                                                                                     // 9
	action: function () {                                                                                      // 10
		function action() {                                                                                       //
			(0, _reactMounter.mount)(_MainLayout.MainLayout, {                                                       // 11
				content: _react2['default'].createElement(_Welcome2['default'], null)                                   // 12
			});                                                                                                      //
		}                                                                                                         //
                                                                                                            //
		return action;                                                                                            //
	}()                                                                                                        //
});                                                                                                         //
                                                                                                            //
FlowRouter.route('/resolutions', {                                                                          // 17
	action: function () {                                                                                      // 18
		function action() {                                                                                       //
			(0, _reactMounter.mount)(_MainLayout.MainLayout, {                                                       // 19
				content: _react2['default'].createElement(_ResolutionsWrapper2['default'], null)                        // 20
			});                                                                                                      //
		}                                                                                                         //
                                                                                                            //
		return action;                                                                                            //
	}()                                                                                                        //
});                                                                                                         //
                                                                                                            //
FlowRouter.route('/about', {                                                                                // 25
	action: function () {                                                                                      // 26
		function action() {                                                                                       //
			(0, _reactMounter.mount)(_MainLayout.MainLayout, {                                                       // 27
				content: _react2['default'].createElement(_About2['default'], null)                                     // 28
			});                                                                                                      //
		}                                                                                                         //
                                                                                                            //
		return action;                                                                                            //
	}()                                                                                                        //
});                                                                                                         //
                                                                                                            //
FlowRouter.route('/resolutions/:id', {                                                                      // 34
	action: function () {                                                                                      // 35
		function action(params) {                                                                                 //
			console.log("hello, params id is:" + params.id);                                                         // 36
			(0, _reactMounter.mount)(_MainLayout.MainLayout, {                                                       // 37
				content: _react2['default'].createElement(_ResolutionDetail2['default'], { id: params.id })             // 38
			});                                                                                                      //
		}                                                                                                         //
                                                                                                            //
		return action;                                                                                            //
	}()                                                                                                        //
});                                                                                                         //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

}]}},{"extensions":[".js",".json",".html",".jsx",".css"]});
require("./app/layouts/MainContentSection.jsx");
require("./app/layouts/MainLayout.jsx");
require("./app/layouts/MainLayoutWrapper.jsx");
require("./app/layouts/NavButton.jsx");
require("./app/layouts/NavSideBar.jsx");
require("./app/resolutions/ResolutionDetail.jsx");
require("./app/resolutions/ResolutionSingle.jsx");
require("./app/resolutions/ResolutionsForm.jsx");
require("./app/resolutions/ResolutionsWrapper.jsx");
require("./app/About.jsx");
require("./app/AccountsUI.jsx");
require("./app/Welcome.jsx");
require("./app/routes.jsx");