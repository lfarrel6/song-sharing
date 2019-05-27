import React from 'react';

import SafeLink from './SafeLink.js';

function Footer(props){

	return(
		<footer style={footerStyle}>
			<h3 style={footerLHSText}>Made by <SafeLink style={footerNameLinkStyle} href="https://lfarrel6.github.io" newWindow={true} text="Liam Farrelly"></SafeLink></h3>
			<h5 style={footerRHSText}>Powered by <SafeLink style={footerNameLinkStyle} href="https://last.fm" newWindow={true} text="LastFM"></SafeLink></h5>
		</footer>
	);
}

const whiteText = {
	color: "#fff",
};

const footerTextStyle = {
	...whiteText,
	fontWeight: "normal",
	display: "inline-block",
};

const footerLHSText = {
	...footerTextStyle,
	float: "left",
	marginLeft: "1em",
};

const footerRHSText = {
	...footerTextStyle,
	float: "right",
	marginRight: "1em",
};

const footerNameLinkStyle = {
	...whiteText,
	textDecoration: "underline",
	fontWeight: "bold",
};

const footerStyle = {
	position: "absolute",
	bottom: "0",
	minWidth: "100vw",
	borderTop: '1px #ccc solid',
};

export default Footer;