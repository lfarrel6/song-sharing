import React from 'react';

import SafeLink from '../UI-elems/SafeLink.js';
//			<p style={whiteTextStyle}>San Francisco based developer.</p>


function About(props){
	return(
		<React.Fragment>
		<div>
			<h1 style={whiteTextStyle}>Simple Song Sharing Web App</h1>
			<h3 style={whiteTextStyle}>Made by <SafeLink style={nameLinkStyle} href="https://lfarrel6.github.io" newWindow={true} text="Liam Farrelly"></SafeLink></h3>
		</div>
		<div style={bottomBlockStyle}>
			<h1>Made using...</h1>
			<ul style={listStyle}>
				<li style={liStyle}><SafeLink style={listLinkStyle} href="https://www.reactjs.org" newWindow={true} text="ReactJS"></SafeLink></li>
				<li style={liStyle}><SafeLink style={listLinkStyle} href="https://www.last.fm/api/intro" newWindow={true} text="LastFM API"></SafeLink></li>
				<li style={liStyle}><SafeLink style={listLinkStyle} href="https://www.npmjs.com/package/qr-image" newWindow={true} text="qr-image"></SafeLink></li>
			</ul>
		</div>
		</React.Fragment> 
	);	
}

const whiteTextStyle = {
	color: '#fff',
};

const bottomBlockStyle = {
	...whiteTextStyle,
	marginTop: '10vh',
}

const nameLinkStyle = {
	...whiteTextStyle,
	textDecoration: 'underline',
	fontWeight: 'bold',
};

const listStyle = {
	listStyleType: 'none',
	padding: '0',
};

const liStyle = {
	marginTop: '1vh',
}

const listLinkStyle = {
	textDecoration: 'underline',
	fontWeight: 'bold',
	color: '#fff',
};

export default About;