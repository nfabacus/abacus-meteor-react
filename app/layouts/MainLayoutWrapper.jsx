import React, {Component} from 'react';
import NavButton from './NavButton.jsx';
import AccountsUI from '../AccountsUI.jsx';
import NavSideBar from './NavSideBar.jsx';
import MainContentSection from './MainContentSection.jsx';


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
	console.log(this.state.navButtonOn);

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
							<AccountsUI />
						</nav>
					</header>

					{/* Menu Sidebar */}
					<NavSideBar navSideBarOn = {this.state.navButtonOn} />

					{/* Main Content Section */}
					<MainContentSection navSideBarOn = {this.state.navButtonOn} content={this.props.content}/>

			      {/* Footer on the bottom of the page */}
			      <footer id="footer" className="footerNoNav">
			        <ul>
			          <li><a href="https://www.youtube.com/user/abacuslearning?feature=watch" className="fa fa-youtube"></a>
			          </li>
			          {/* <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li> 
			          <li><a href="#" className="icon fa-dribbble"><span className="label">Dribbble</span></a></li> */}
			          <li>
			          <a href="https://www.facebook.com/Abacus-Maths-Learning-Course-211119545628882/timeline/" className="fa fa-facebook"></a>
			          </li>
			          <li><a href="https://plus.google.com/+AbacusmathsInfo/about" className="fa fa-google-plus"></a>
			          </li>
			          <li>
			          <a href="https://twitter.com/abacusmaths" target="_blank" className="fa fa-twitter"></a>
			          </li>
			          <li>
			          <a href="https://www.linkedin.com/in/noby-fujioka-6741656" target="_blank" className="fa fa-linkedin"></a>
			          </li>
			          <li>
			          <a href="mailto:contact@abacusmaths.info" target="_blank" className="fa fa-envelope-o"></a>
			          </li>
			        </ul>
			        <ul>
			          <li className="copyright">&copy; Abacus Learning Lab</li>
			        </ul>
			      </footer>
				</div>

			</div>
		)
	}
}