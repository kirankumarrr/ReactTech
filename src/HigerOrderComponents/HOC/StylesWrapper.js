import CommonStyles from "./CommonStyles"

const translateProps = (props)=>{
    let _styles = CommonStyles.btnstl;
    if(props.disable){
        _styles = {..._styles, ...CommonStyles.disable}
    }
    const newProps = {...props, CommonStyles:_styles}
    return newProps;
}

export default (WrappedComponent)=>{
    return function wrappedRender(args){
        return WrappedComponent(translateProps(args));
    }
}



