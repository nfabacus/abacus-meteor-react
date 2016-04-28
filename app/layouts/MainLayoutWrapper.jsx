import React, {Component} from 'react';
import NavButton from './NavButton.jsx';
import AccountsUI from '../accounts/AccountsUI.jsx';
import NavSideBar from './NavSideBar.jsx';
import MainContentSection from './MainContentSection.jsx';
import Footer from './Footer.jsx';

export default class MainLayoutWrapper extends Component {
		constructor(props, context) {
			super(props, context);

			this.state = {
				navButtonOn: false
			};
		}

    onChildChanged(newState) {
        this.setState({ navButtonOn: newState });
    }
    

	render(){

		return (
			<div className="main-layout">
				<div id="wrapper">
					<header id="nav_header">
				        <span className="header_title"><a href="/">ABACUS LEARNING LAB</a></span>
				        <button id="toggle" className="transparent-button smallBtn">Start editing</button>
				        <button id="reset" className="transparent-button smallBtn">Reset content</button>
				        <button id="save" className="transparent-button smallBtn">Save content</button>
				        
				        {/* Nav Menu Hamburger Icon */}
				        <NavButton initialNavOn = {this.state.navButtonOn} callbackParent={this.onChildChanged.bind(this)}/>

			            {/* Horizontal Nav */}
						<nav className="horizontal_nav">
						    <a href="/">Home</a>
							<a href="/resolutions">Resolutions</a>
							<a href="/about">About</a>
							<button className="login-toggle">Login/Sign-up</button>

						</nav>
						
					</header>

					{/* Menu Sidebar */}
					<NavSideBar navSideBarOn = {this.state.navButtonOn} />

					{/* Main Content Section */}
					<MainContentSection navSideBarOn = {this.state.navButtonOn} content={this.props.content}/>

					<AccountsUI />
					
			      {/* Footer on the bottom of the page */}
					<Footer navSideBarOn = {this.state.navButtonOn} />
				</div>

			</div>
		)
	}
}