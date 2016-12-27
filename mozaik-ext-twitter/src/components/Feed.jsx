// mozaik-ext-twitter/src/components/Feed.jsx
import React, { Component } from 'react';
import reactMixin           from 'react-mixin';    // to be able to use Mixins on es6 classes
import { ListenerMixin }    from 'reflux';         // see https://github.com/reflux/refluxjs#convenience-mixin-for-react
import Mozaik               from 'mozaik/browser'; // Mozaïk browser utilities

class Feed extends Component {
    // we extend the constructor to set a default state
    constructor(props) {
	super(props);

	this.state = { count: 0 };
    }

    // Before the component is mounted, the mixin will search for this method on the component.
    // This method MUST return an object with an `id` property.
    // It tells Mozaïk that this component is interested in data coming from `sample` generated with `sampleMethod`
    // The `id` MUST be unique across all Mozaïk extensions.
    getApiRequest() {
	return { id: 'twitter.twitter' };
    }

    // This method is automatically invoked each time the `sample.sampleMethod` has fetched some data. 
    // This assumes your method will return an object containing a `count` property.
    onApiData(twitter) {
	this.setState(twitter);
    }

    render() {
	const { text } = this.state;
	
	return (
	    <div>{text}</div>
	);
    } 
}

reactMixin(Feed.prototype, ListenerMixin);
reactMixin(Feed.prototype, Mozaik.Mizin.ApiConsumer);


export default Feed;
