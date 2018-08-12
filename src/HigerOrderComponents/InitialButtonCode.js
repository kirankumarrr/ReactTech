import React from "react";
import StylesWrapper from "./HOC/StylesWrapper"
const styles  = {
    btnstl : {
        "background":"red",
        "padding":"20px",
        "color":"white",
        "fontWeight":"bold"
    },
    disable: {
        "background":"gray",
        "color":"black",
    }
}

const Button1= (props)=>{
    let _styles = styles.btnstl;
    let disable = styles.disable;
    if(props.disable){
        _styles = {..._styles, ...disable}
        console.dir(..._styles)
    }
    return(
        <div>
            <button style={_styles}> Click Button</button>
        </div>
    )
}

export default StylesWrapper(Button1);import React from "react";
import StylesWrapper from "./HOC/StylesWrapper"
const styles  = {
    btnstl : {
        "background":"red",
        "padding":"20px",
        "color":"white",
        "fontWeight":"bold"
    },
    disable: {
        "background":"gray",
        "color":"black",
    }
}

const Button1= (props)=>{
    let _styles = styles.btnstl;
    let disable = styles.disable;
    if(props.disable){
        _styles = {..._styles, ...disable}
        console.dir(..._styles)
    }
    return(
        <div>
            <button style={_styles}> Click Button</button>
        </div>
    )
}

export default StylesWrapper(Button1);