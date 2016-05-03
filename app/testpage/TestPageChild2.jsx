import React, {Component} from 'react';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class TestPageChild2 extends Component {
	constructor(props) {
		super(props);
		this._toggle = this._toggle.bind(this);
		this.state = {
			switchOn: this.props.initialPanelState
		};
	}

    _toggle(){
    	var newState = !this.state.switchOn;
      this.setState({
        switchOn: newState 
      });
      console.log(newState);
      this.props.callBack2(newState);
    }     

	render() {
        if (this.state.switchOn) {
        	var switchResponse = "lightblue_back";
        } else {
        	var switchResponse = "red_back";
        }
		return (
			<div className={switchResponse} >
				<h2>Test Child2</h2>
				<p >I am the test child 2.</p>
				{switchResponse}
               <button onClick={this._toggle}>Click me!</button>
			</div>

		)
	}
}