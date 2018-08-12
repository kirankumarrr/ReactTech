import React,{Component} from 'react';
import { connect } from 'react-redux';


class AppRR extends Component{
/*     state = {
        age: 21
    }
    AgeUP=()=>{this.setState({...this.state, age:++this.state.age})}

    AgeDOWN=()=>{this.setState({...this.state, age:--this.state.age})} */
    render(){
        return(
        <div>
            <div>Age : <span>{this.props.age} </span></div>
            <button onClick={this.props.onAgeUp}>Agg UP</button>
            <button onClick={this.props.onAgeDown}>Agg DOWN</button>
        </div>
        );
    }   
}
/* const mapStateToProps = (state) => {
    return(
        age: state.age
    );
}; */
const mapStateToProps = state => {
    return {
       age: state.age
     };
   };


const mapDispachToProps = dispatch => {
    return {
      onAgeUp: () => dispatch({type:'AGE_UP', value:1}),
      onAgeDown: () => dispatch({type:'AGE_DOWN', value:1}),
    };
  };  
export default connect(mapStateToProps,mapDispachToProps)(AppRR); 