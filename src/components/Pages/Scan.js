import React from 'react';

import TextButton from '../UI-elems/TextButton.js';
import Dropdown from '../UI-elems/Dropdown.js';

import { BrowserQRCodeReader } from '@zxing/library';

import { Redirect } from 'react-router';

const codereader = new BrowserQRCodeReader();

class Scan extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			scanning: false,
			availableCameras: [],
			srcId: -1,
			successfulScan: false,
			result: {},
		};
	}

	GetVideoElemID = () => { return 'CameraFeedPreview'; }

	componentDidMount(){
		codereader.getVideoInputDevices().then((devices) => {
			if(devices.length > 0){
				let tempArr = [];
				devices.forEach((elem) => {
					tempArr.push(elem);
				});
				this.setState({
					availableCameras: tempArr,
					srcId: tempArr[0].deviceId,
				});
			}
		});
	}

	updateVideoSrc(val){
		alert(val);
		this.setState({srcId: val});
		this.beginScanning();
	}

	toggleScanning(){
		if(this.state.scanning)
		{
			codereader.reset();
			this.setState({scanning: false});
		}
		else
		{
	    	this.beginScanning();
		}
	}

	beginScanning(){
		if(this.state.availableCameras.length > 0){

	    	const srcDeviceId = this.state.srcId;
		   	let scanningState = true;

		   	const videoElemID = this.GetVideoElemID();

		   	codereader.decodeFromInputVideoDevice(srcDeviceId,videoElemID).then((result) => {
		   		this.setState({
		   			successfulScan: true,
		   			result: JSON.parse(result),
		   		});
		  	}).catch((error) => {
		    	scanningState = false;
		    	this.setState({scanning: false});
		   		console.log(`Error occured ${error}`);
		   	});

		   	if(scanningState){
		   		this.setState({scanning: true});
		   	}
		}
	}

	render(){

		let cameras = this.state.availableCameras.map((elem) => {return {id: elem.deviceId, text: elem.label}});

		return(
			<React.Fragment>
				<h1 style={WhiteTextStyle}>Scan</h1>
				<Dropdown options={cameras} label="Input Source: " getChange={(val) => {this.updateVideoSrc(val)}} htmlID="videoInputSrc"/>
				<TextButton defaultStyle={true} body={(this.state.scanning ? "Stop Scanning" : "Begin Scanning")} onClick={() => {this.toggleScanning()}}/>
				<div style={VideoPreviewStyle}>
					<video style={VideoPreviewStyle} id={this.GetVideoElemID()}></video>
				</div>
				{
					this.state.successfulScan 
					&&
					<Redirect push to={{pathname: "/result", state: this.state.result}}/>
				}
			</React.Fragment>
		);
	}
}

const WhiteTextStyle = {
	color: '#fff',
};

const VideoPreviewStyle = {
	height: '30vh',
	width: '30vw',
	backgroundColor: 'rgba(200,200,200,0.3)',
	margin: 'auto',
	textAlign: 'center',
};

export default Scan;