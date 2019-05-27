import React from 'react';

/*
class TextButton extends React.Component{
  constructor(props){
    super(props);
    //this.state = {};
  }

  render(){
    return(
      <button className={this.props.styling}>{this.props.body}</button>
    );
  }
}
*/

function TextButton(props){
	const style = props.defaultStyle ? MainUIBtn : props.styling;
	return(
		<button style={style} onClick={props.onClick}>{props.body}</button>
	);
}

const MainUIBtn = {
  padding: '1em',
  borderRadius: '15px',
  //backgroundColor: '#2baf11',
  backgroundColor: '#ccc',
  border:'none',
  fontWeight: 'bold',
  //color: '#fff',
  fontSize: '1em',
  marginTop: '1em',
  marginBottom: '1em',
  //minWidth: '140px',
  minWidth: '33vw',
  minHeight: '6vh',
};

export default TextButton;