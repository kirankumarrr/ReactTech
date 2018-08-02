import React from 'react';

const NewUser = (props) => {
	return(
		<div>
      <h1>Add new User</h1>
			Name:<input onChange={props.changeEvent} value={props.childrenVal}/>
      age:<input onChange={props.changeEvent} value={props.childrenVal}/>
      role:<input onChange={props.changeEvent} value={props.childrenVal}/>
			<button onClick={props.delEvent}>Add</button>
		</div>
	);
}

export default NewUser;
