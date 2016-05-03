import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class TestPageChild3 extends Component {
	constructor(props, content) {
		super(props, content);
		this.state = {
			colorStyle: 'lightblue_back'
		};
	}

	blueButton () {
		this.setState({ colorStyle: "lightblue_back" });
		return this.state.colorStyle;
	}
	greenButton () {
		this.setState({ colorStyle: "green_back" });
		return this.state.colorStyle;
	}


	render() {
        var myColor = this.state.colorStyle;
        console.log('ColorState', myColor);
		return (
			<div className={myColor} >
				<h2>SessionTestSection</h2>
				<p >I am the test child 4.</p>
				<p >The current color is {myColor}</p>
	   			<button onClick={this.blueButton.bind(this)} > Make it blue</button>
	   			<button onClick={this.greenButton.bind(this)} > Make it green</button>
			</div>

		)
	}
}