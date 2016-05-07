import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import Header from './Header.jsx';
import NavSideBar from './NavSideBar.jsx';
import MainContentSection from './MainContentSection.jsx';
import Footer from './Footer.jsx';

export default class MainLayoutWrapper extends TrackerReact(Component) {
		constructor(props, context) {
			super(props, context);

			this.state = {
				navButtonOn: false,
				loginPanelOn: false
			};


		}

    _callBackNav(data) {
    	var newState = data;
        this.setState({ navButtonOn: newState });
    }
    
    _callBackLoginPanel(data) {
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
						callBackNav = {this._callBackNav.bind(this)} 
						callBackLoginPanel = {this._callBackLoginPanel.bind(this)} />

					{/* Menu Sidebar */}
					<NavSideBar 
						navSideBarOn = {this.state.navButtonOn}
						loginPanelOn = {this.state.loginPanelOn}
						callBackLoginPanel = {this._callBackLoginPanel.bind(this)} />

					{/* Main Content Section */}
					<MainContentSection 
						navSideBarOn = {this.state.navButtonOn}
						loginPanelOn = {this.state.loginPanelOn}
						callBackLoginPanel = {this._callBackLoginPanel.bind(this)}
						content={this.props.content} />


					
			      {/* Footer on the bottom of the page */}
					<Footer navSideBarOn = {this.state.navButtonOn} />
				</div>

			</div>
		)
	}
}