import React, { Component } from 'react';
import './Search.css'
const SearchBtn=(props)=>{
    return(
        <div>
            <input type="text" value={props.value} onChange={props.handleChange} className="Inputbox"/>
            <button onClick={props.SearchData} >Btn</button>
        </div>
    )
}
const SearchFailed=(props)=>{
    return(
        <div>
            <h1>Details not Found</h1>
        </div>
    )
}
const SearchSuccess=(props)=>{
    let user = props.Result
    return(
        <div>
        <table>
             <tbody>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Role</th>
                </tr>
                <tr key={user.name}>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                            <td>{user.role}</td>
                        </tr>
               </tbody>
        </table>
        </div>
    )
}
const SearchResult=(props)=>{
    console.log(props.Result)
    if(props.Result=== undefined){
       return( <SearchFailed />)
    }
    else{
        return(
            <div>
                <SearchSuccess Result={props.Result} />
            </div>
        ) 
    }
    
}

class Search extends Component {
    constructor(props){
        super(props);
        this.state = {
            value : "",
            user : [{name:"kiran kumar Reddy",age : 24,role : "UI Developer"},
              {name:"Robert",age : 35,role : "Java Developer"},
              {name:"K",age : 30,role : "Php Developer"},],
            userSearchResult : {}
          }
          this.SearchData = this.SearchData.bind(this) 
          this.handleChange= this.handleChange.bind(this) 
    }
    SearchData=()=>{
        this.setState({value: ""});
        const userDetails = this.state.user
        const inputVal = this.state.value;
        let NewObj;
        let indexuser;
        
        userDetails.map((user,index)=>{
            if(inputVal === user.name){
                indexuser = index
                return index
            }
            //console.log(this.userSearchResult);
        })
        NewObj = userDetails[indexuser];
        this.setState({
            userSearchResult : userDetails[indexuser]
          });
      //  this.state.userSearchResult = userDetails[indexuser];
        //console.log(this.state.userSearchResult)
        this.setState({
            NewObj
        })
    }



    handleChange(event) {
     this.setState({value: event.target.value});
    }
  render() {
    return (
      <div className="App">
        <h1>Search</h1>
        <SearchBtn 
                handleChange ={this.handleChange}
                SearchData = {this.SearchData}
                value={this.state.value}/>
        <SearchResult Result={this.state.userSearchResult}/>
      </div>
    );
  }
}

export default Search;
