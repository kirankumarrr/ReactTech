import React from 'react';

const User = (props) => {
	return(
		<li>
			<span>name: {props.name}, age: {props.age}, role: {props.role}</span>
			<input onChange={props.changeEvent} value={props.childrenVal}/>
			<button onClick={props.delEvent}>Delete</button>
			<br/>
			<input placeholde="Enter new item to add"/>
		</li>
	);
}

export default User;
