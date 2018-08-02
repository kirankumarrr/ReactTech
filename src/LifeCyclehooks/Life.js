import React , { Component } from 'react';
import ChildLife from './child.js'
class Life extends Component{
    /*This is the intial Render*/
    constructor(){
        super();
        this.state = {name: 'reddy' }
        console.log('1)Constructor-->> This is the intial Render');
    }
    componentWillMount(){
    /* Its runs only onces before the Component is rendered*/
     /*This is the only hook that runs on server rendering*/
        if(window.innerWidth > 500){this.setState({innerWidth : window.innerWidth})}
        console.log("2)componentWillMount-->--Suppose you want to change thi.setstate based on props")
    }
    componentDidMount(){
           /*This is the intial Mount*/
        console.log("2)componentDidMount-->--Suppose you want to change thi.setstate based on props")
    }
    render(){
        console.log("3)render-->--Not to call setstate... it will everytime state or prop")
        return(
            <div>
                {this.state.name}
                {this.state.innerWidth}
                <ChildLife name={this.state.name}/>
            </div>
        )
    }
}

export default Life;