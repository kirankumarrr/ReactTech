import React,{PureComponent} from 'react';

const Temp =(props) =>{
    console.log("Temp Render");
    return(<div className="Temp">{props.val}</div>)
}
class PureCompo extends PureComponent{
    constructor(){
        super();
        this.state ={val:1}
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({val:1})
        },2000)
        }
/*     shouldComponentUpdate(nextProps, nextState){
        return this.state.val === nextState.val ? false : true
    }  */
    render(){
        console.log("ParentComponent Render");
        return(
            <div className="PureComponent">
                <Temp val ={this.state.val} />
            </div>
        )
    }
}

export default PureCompo;

/* PureComponent */

/* 
--> This will shallow Compare with nextState and currentState
--> Only use state is very small
--> Make sure you don't use shouldComponentUpdate when using purecomponent
*/