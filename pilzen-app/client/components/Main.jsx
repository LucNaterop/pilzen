import { Meteor } from 'meteor/meteor';
import React from 'react';

import ons from 'onsenui';
import * as Ons from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import Details from './Details.jsx';

export default class Main extends React.Component {
	render() {
		return (
			<Ons.Page>
				<h2>Main</h2>
				<Ons.Button onClick={() => {this.props.navigator.pushPage({component: Details})}}>Push Page</Ons.Button>
			</Ons.Page>
		);	
	}
}
