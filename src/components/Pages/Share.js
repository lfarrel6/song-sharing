import React from 'react';

import TextButton from '../UI-elems/TextButton';
import SafeLink from '../UI-elems/SafeLink.js';

const qr = require('qr-image');
const API_ROOT =  "https://ws.audioscrobbler.com/2.0/";

const API_KEY = "99f9fa291c2122382500c59ed0b2229c";

function TextInput(props){
	return(
		<div style={props.divStyling}>
			<label htmlFor={props.inputName} style={props.inputLabelStyle}>
			{props.inputLabel}
			{' '}
			</label>
			<input type={props.inputType} name={props.inputName} placeholder={props.inputPlaceHolder} onChange={props.onChange}/>
		</div>
	);
}

class Share extends React.Component{

	constructor(props){
		super(props);
		this.state = {
			shareSVG: '',
			tracks: [],
			selectedID: -1,
			searched: false,
		};
	}

	updateArtist = (e) => {
		this.artist = e.target.value;
	}

	updateAlbum = (e) => {
		this.album = e.target.value;
	}

	updateSong = (e) => {
		this.song = e.target.value;
	}

	createScannable = () => {
		//const qrString = `${this.artist};${this.album};${this.song}`;

		let inclArtist = false;
		if(this.artist.trim() !== "")
			inclArtist = true;

		let queryURL = API_ROOT + `?method=track.search&track=${this.song}&api_key=${API_KEY}&format=json` + (inclArtist?`&artist=${this.artist}`:'');

		fetch(queryURL).then(data => {return data.json();}).then(res => {
			const trackmatches = res.results.trackmatches;
			console.log(trackmatches);
			if(trackmatches.track.length > 0)
			{
				const matches = trackmatches.track;

				let qrSVG = qr.imageSync(JSON.stringify(matches[0]), {type: 'svg'});
				let blob = new Blob([qrSVG], {type: 'image/svg+xml'});

				let url = URL.createObjectURL(blob);

				this.setState({shareSVG: url, tracks: matches, selectedID: 0, searched: true});	
			}
		});
	};

	displayInfo(trackInfo){
		const { url, artist, name, image } = trackInfo;
		const imageSRC = image[1]["#text"];
		console.log(`${url} ${artist} ${name} ${imageSRC}`);
		return (
			<section style={whiteTextStyle}>
				<p><span style={boldText}>Artist:</span> {artist}</p>
				<p><span style={boldText}>Song:</span> {name}</p>
				<p><span style={boldText}>Url:</span> <SafeLink style={whiteTextStyle} href={url} newWindow={true} text="lastFM"></SafeLink></p>
			</section>
		);
	}
//				<TextInput divStyling={divStyling} inputLabelStyle={labelStyle} inputName="albumInput" inputLabel="Album" inputType="text" inputPlaceHolder="Enter the album..." onChange={this.updateAlbum}/>
	render(){
		let informationDisplay = <section></section>;
		if(this.state.shareSVG !== ''){
			informationDisplay = (
				<div>
					<h3 style={whiteTextStyle}>Here's what was found...</h3>
					{this.displayInfo(this.state.tracks[this.state.selectedID])}
					<img style={qrStyling} alt="Generated QR code" src={this.state.shareSVG} />
				</div>
			);
		}
		else if(this.state.searched){
			informationDisplay = (
				<div>
					<h3 style={whiteTextStyle}>Uh oh... Looks like we didn't find anything</h3>
				</div>
			);
		}
		return (
			<React.Fragment>
				<TextInput divStyling={divStyling} inputLabelStyle={labelStyle} inputName="artistInput" inputLabel="Artist" inputType="text" inputPlaceHolder="Enter the artist..." onChange={this.updateArtist}/>
				<TextInput divStyling={divStyling} inputLabelStyle={labelStyle} inputName="songInput" inputLabel="Song" inputType="text" inputPlaceHolder="Enter the song..." onChange={this.updateSong}/>
				<TextButton body="Generate" defaultStyle={true} onClick={this.createScannable}/>
				{informationDisplay}
			</React.Fragment>
		);
	}
}

const whiteTextStyle = {
	color: '#fff',
};

const boldText = {
	fontWeight: 'bold',
};

const divStyling = {
	margin: '1em',
};

const labelStyle = {
	color: '#fff',
	fontWeight: 'bold',
	width: '100px',
	textAlign: 'right',
	display:'inline-block',
	marginRight: '0.2em',
};

const qrStyling = {
	height: '25vh',
	width: '25vh',
	backgroundColor: '#fff',
}

export default Share;