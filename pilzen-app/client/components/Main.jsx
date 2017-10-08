import { Meteor } from 'meteor/meteor';
import React from 'react';

import ons from 'onsenui';
import * as Ons from 'react-onsenui';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import Details from './Details.jsx';

function classifier(image) {
	// create dummy classes
	var classes = ['Steinpilz', 'Eierschwämmli', 'Flügenpliz'];
	// create dummy accuracies
	var accuracies = classes.map(e => Math.random());
	// normalize dummy accuracies
	var sum = 0;
	accuracies.forEach(a => sum += a);

	accuracies = accuracies.map(a => a/sum);

	var results = [];
	for(var i=0; i<=classes.length-1; i++){
		results.push({
			'class': classes[i],
			'accuracy': accuracies[i]
		});
	}

	return results;
}

export default class Main extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			'localImageURL': '',
			'classification': []
		}
	}

	classifyImage() {
		this.setState({'classification': classifier('image')});
	}

	onImageInput(event) {
		var that = this;
		function readURL(input) {
			if (input.files && input.files[0]) {
				var reader = new FileReader();
				reader.onload = function (e) {
					that.setState({ 'localImageURL': e.target.result });
					that.classifyImage();
				}
				reader.readAsDataURL(input.files[0]);
			}
		}
		readURL(event.target);
	}

	renderImageInput() {
		if(this.state.localImageURL) {
			return <img style={{width: 200}} src={this.state.localImageURL} />;
		} else {
			return (
				<Ons.Button onClick={() => {$('#myInput').click();}}>
					<Ons.Icon size={150} icon="ion-camera" />
				</Ons.Button>
			);
		}
	}

	renderClassification() {
		var listElements = this.state.classification.map(c => (
			<div className="list-item__center" key={c.class} style={{paddingLeft: 20}}>
				<div className="list-item__title">
					{Math.round(c.accuracy*100) + '%'}
				</div>
				<div className="list-item__subtitle">
					{c.class}
				</div>
			</div>
		));
		var list = (
			<Ons.List>
				{listElements}
			</Ons.List>
		);
		return list;
	}

	render() {
		return (
			<Ons.Page contentStyle={{textAlign: 'center'}}>
				<h2>Pilz klassifizieren</h2>
				{this.renderImageInput()}
				<br />
				<input id="myInput" onChange={this.onImageInput.bind(this)} type="file" style={{visibility: 'hidden'}} />
				{this.renderClassification()}
			</Ons.Page>
		);	
	}
}

