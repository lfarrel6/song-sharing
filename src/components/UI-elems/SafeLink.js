import React from 'react';

import PropTypes from 'prop-types';

class SafeLink extends React.Component{
	
	render(){
		if(this.props.newWindow)
		{
			return(
				<a href={this.props.href} id={this.props.htmlID} className={this.props.class} style={this.props.style} target="_blank" rel="noopener noreferrer">{this.props.text}</a>
			);
		}
		else{
			return(
				<a href={this.props.href} id={this.props.htmlID} className={this.props.class} style={this.props.style}>{this.props.text}</a>
			);
		}
	}
}

SafeLink.propTypes = {
	newWindow: PropTypes.bool,
	href: PropTypes.string.isRequired,
	htmlID: PropTypes.string,
	className: PropTypes.string,
	style: PropTypes.object,
	text: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.element,
		PropTypes.node
	]).isRequired,
}

export default SafeLink;