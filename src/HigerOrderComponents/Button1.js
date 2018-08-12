import React from "react";
import StylesWrapper from "./HOC/StylesWrapper"

const Button1= (props)=>{
    return(<button style={props.CommonStyles}> Click Button</button>);
}

export default StylesWrapper(Button1);