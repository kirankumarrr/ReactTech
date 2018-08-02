import React , { Component } from 'react';
class ChildLife extends Component{
    /*This is the intial Render*/
    constructor(){
        super()
        console.log('1)childLife Constructor-->> This is the intial Render');
    }
    componentWillMount(){
    /* Its runs only onces before the Component is rendered*/
     /*This is the only hook that runs on server rendering*/
        if(window.innerWidth > 500){this.setState({innerWidth : window.innerWidth})}
        console.log("2)childLife componentWillMount-->--Suppose you want to change thi.setstate based on props")
    }
    componentDidMount(){
        console.log("2)childLife  componentDidMount-->--Suppose you want to change thi.setstate based on props")
    }
    render(){
        console.log("3)childLife render-->--Not to call setstate... it will everytime state or prop")
        return(
            <div className="ChildLifeApp">
                Child Name: {this.props.name}
            </div>
        )
    }
}

export default ChildLife;