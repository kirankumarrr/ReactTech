import React from 'react';

const User = (props) => {
	return(
		<li>
			<span>name: {props.name}, age: {props.age}, role: {props.role}</span>
			<input onChange={props.changeEvent} value={props.childrenVal}/>
			<button onClick={props.delEvent}>Delete</button>
		</li>
	);
}

export default User;
