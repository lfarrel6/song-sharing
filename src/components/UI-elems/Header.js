import React from 'react';
import { NavLink } from "react-router-dom";

function Header(props){
	return(
		<header style={headerStyling}>
			<h1 style={headerTextStyling}>Song Sharer</h1>
			<ul style={headerNavListStyling}>
				<li style={headerNavListElemStyling}>
					<NavLink to='/' style={headerLinkStyling}>Home</NavLink>
				</li>
				<li style={headerNavListElemStyling}>
					<NavLink to='/About' style={headerLinkStyling}>About</NavLink>
				</li>
			</ul>
		</header>
	);
}

const headerStyling = {
	position: 'relative',
	textAlign: 'left',
	color: '#fff',
	padding: '0em 0em 0em 1em',
	//minHeight: '4em',
	borderBottom: '1px #ccc solid',
};

const headerTextStyling = {
	display: 'inline-block',
	margin: '0',
};

const headerNavRootStyling = {
	display: 'inline',
	listStyleType: 'none',
	margin: '0',
};

const headerNavListStyling = {
	...headerNavRootStyling,
	textAlign: 'right',
	float: 'right',
	marginTop: '1em',
}

const headerLinkStyling = {
	...headerNavRootStyling,
	paddingRight: '1em',
	color: '#fff',
	textDecoration: 'none',
}

const headerNavListElemStyling = {
	display:'inline',
};

export default Header;