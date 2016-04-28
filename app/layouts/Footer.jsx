import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Footer extends Component {

	render() {
	    if(this.props.navSideBarOn) {
	    	footerClass = "";
	    } else {
	    	footerClass = "footerNoNav";
	    }

		return (

		      <footer id="footer" className={footerClass}>
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

		)
	}
}