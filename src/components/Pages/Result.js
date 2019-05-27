import React from 'react';

import SafeLink from '../UI-elems/SafeLink.js';

class Result extends React.Component{
	constructor(props){
		super(props);
		this.state = {...this.props.location.state}; 
	}

	renderHeader = () => {return (<h1>{this.state.artist} - {this.state.name}</h1>)}
	renderImage = (src) => {return (<div><img alt="Accompanying Artwork" src={src}/></div>)}
	renderListeners = () => { return (<h3>Listener Count: {this.state.listeners}</h3>)}

	renderInfo(image){
		const headerMD = this.renderHeader();

		const imageSrc = (image.length>0)?image[0]["#text"]:"";
		const imageMD = (imageSrc!=="")?this.renderImage(imageSrc):<h3>"No image found :("</h3>;

		const listenerMD = this.renderListeners();

		const linkMD = <SafeLink style={plainLink} text="View on LastFM" href={this.state.url}/>;

		return (
			<React.Fragment>
				{headerMD}
				{imageMD}
				{listenerMD}
				{linkMD}
			</React.Fragment>
		);
	}	

	render(){
		const hasInfoToDisplay = ((this.state.name && this.state.name!=="") && (this.state.artist && this.state.artist!==""));
		const mediumImage = (this.state.image && this.state.image.length > 0) ? this.state.image.filter((obj) => {return (obj.size === "medium")}) : '';

		console.log(this.state);
		return(
			<div className="whiteText centered">
				{hasInfoToDisplay?this.renderInfo(mediumImage):<h1>Oops... no results here!</h1>}
			</div>
		);
	}
}

const plainLink = {
	textDecoration: 'underline',
	color: '#fff',
	fontWeight: 'bold',
};

export default Result;