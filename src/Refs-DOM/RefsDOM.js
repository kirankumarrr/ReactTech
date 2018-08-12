import React,{Component} from 'react';
const ChildRefFXN = (props)=>{
    return(
        <div>
            <input 
                ref={ props.FxnNameRef }
                type="text" name="name" />
        </div>    
    );
}
const Fxn = ()=>{
    let FxnNameRef = null;
    const submitChids= ()=>{
        console.log(FxnNameRef.value);
        FxnNameRef.focus();
    }
    return(
        <div>
            <label>Name:
                 <ChildRefFXN  
                 FxnNameRef={(input)=>{ FxnNameRef = input}}/>
            </label>
            <br/>
            <br/>
            <input type="submit" value="Submit" onClick={submitChids} />
        </div>
    )
}
class AppRefsDOM extends Component{
    constructor(){
        super();
    }
    submit = (event) =>{
        event.preventDefault();
        console.log(this.Name.value);
        console.log(this.Role.value);
        console.log(this.Year.value);
        alert(this.Name.value+"-->"+this.Role.value+"-->"+this.Year.value);
    }
    onKeyUp =(target,e) =>{
        if(e.keyCode === 13){
            switch (target){
                case "Name" : 
                    this.Role.focus()
                    break;
                case "Role" : 
                    this.Year.focus()
                    break;
                case "Year" : 
                    this.submit.focus()
                    break;   
                default : 
                    this.Name.focus()
                    break;     
            }
        }
    }
    render(){
        return(
            <div>
                <div>
                    <label>Name: <input ref={(input)=>{this.Name = input}} onKeyUp={this.onKeyUp.bind(this,"Name")} type="text" name="name" /></label>
                    <br/>
                    <label>Role: <input ref={(input)=>{this.Role = input}} onKeyUp={this.onKeyUp.bind(this,"Role")} type="text" name="name" /></label>
                    <br/>
                    <label>Year: <input ref={(input)=>{this.Year = input}} onKeyUp={this.onKeyUp.bind(this,"Year")} type="text" name="name" /></label>
                    <br/>
                    <input ref={(input)=>{this.submit = input}} type="submit" value="Submit" onClick={this.submit}/>
                </div>
                <Fxn />
            </div>
        );
    }   
}   
export default AppRefsDOM;