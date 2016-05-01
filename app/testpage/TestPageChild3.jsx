import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class TestPageChild3 extends Component {
	constructor(props) {
		super(props);
		this.state = {
			switchOn: this.props.initialPenelState
		};
	}

	render() {
        if (this.state.switchOn) {
        	var switchResponse = "lightblue_back";
        } else {
        	var switchResponse = "red_back";
        }
		return (
			<div className={switchResponse} >
				<h2>Test Child3</h2>
				<p >I am the test child 3.</p>
				{switchResponse}

			</div>

		)
	}
}