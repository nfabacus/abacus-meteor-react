import React, {Component} from 'react';
import Header from './Header.jsx';
import AccountsUI from '../accounts/AccountsUI.jsx';
import NavSideBar from './NavSideBar.jsx';
import MainContentSection from './MainContentSection.jsx';
import Footer from './Footer.jsx';

export default class MainLayoutWrapper extends Component {
		constructor(props, context) {
			super(props, context);
			this._callBackNav = this._callBackNav.bind(this);
			this._callBackLogin = this._callBackLogin.bind(this);
			this.state = {
				navButtonOn: false,
				loginPanelOn: false
			};
		}

    _callBackNav(data) {
    	var newState = data;
        this.setState({ navButtonOn: newState });
    }
    
    _callBackLogin(data) {
    	var newState = data;
        this.setState({ loginPanelOn: newState });
        console.log('response from child on LoginPanel', newState);
    }

	render(){

		return (
			<div className="main-layout">
				<div id="wrapper">
					<Header 
						navButtonOn = {this.state.navButtonOn} 
						loginPanelOn = {this.state.loginPanelOn}
						callBackNav = {this._callBackNav} 
						callBackLogin = {this._callBackLogin} />

					{/* Menu Sidebar */}
					<NavSideBar 
						navSideBarOn = {this.state.navButtonOn} 
						callBackLogin = {this._callBackLogin} />

					{/* Main Content Section */}
					<MainContentSection navSideBarOn = {this.state.navButtonOn} content={this.props.content} />

					<AccountsUI 
						loginPanelOn = {this.state.loginPanelOn} 
						callBackLogin = {this._callBackLogin} />
					
			      {/* Footer on the bottom of the page */}
					<Footer navSideBarOn = {this.state.navButtonOn} />
				</div>

			</div>
		)
	}
}