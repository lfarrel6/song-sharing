import React from 'react';

class Dropdown extends React.Component{

	change = (evt) => {
		this.props.getChange(evt.target.value);
	}

	render(){
		const options = this.props.options.map((elem) => {
			return (<option key={elem.id} value={elem.id}>{elem.text}</option>);
		});
		return(
			<div>
				<label htmlFor={this.props.htmlID}></label>
				<select id={this.props.htmlID} onChange={this.change}>
					{options}
				</select>
			</div>
		);
	}
}

export default Dropdown;