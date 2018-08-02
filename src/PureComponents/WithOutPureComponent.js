import React,{Component} from 'react';

const Temp =(props) =>{
    console.log("Temp Render");
    return(<div className="Temp">{props.val}</div>)
}
class WithOutPureComponent extends Component{
    constructor(){
        super();
        this.state ={val:1}
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({val:1})
        },2000)
        }
    shouldComponentUpdate(nextProps, nextState){
        return this.state.val === nextState.val ? false : true
    } 
    render(){
        console.log("ParentComponent Render");
        return(
            <div className="PureComponent">
                <Temp val ={this.state.val} />
            </div>
        )
    }
}

export default WithOutPureComponent;