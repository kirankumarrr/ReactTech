import React from 'react';
import Autosuggest from 'react-autosuggest';
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
// Imagine you have a list of languages that you'd like to autosuggest.
const languages = [
  {name:"kiran kumar Reddy",age : 24,role : "UI Developer"},
  {name:"Robert",age : 35,role : "Java Developer"},
  {name:"Beast",age : 30,role : "Php Developer"},
  {name:"Varun Kumar",age : 23,role : "API Developer"},
];
// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : languages.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);

class SearchDrop extends React.Component {
  constructor() {
    super();

    // Autosuggest is a controlled component.
    // This means that you need to provide an input value
    // and an onChange handler that updates this value (see below).
    // Suggestions also need to be provided to the Autosuggest,
    // and they are initially empty because the Autosuggest is closed.
    this.state = {
      value: '',
      suggestions: [],
      userSearchResult : []
    };
  }

  onChange = (event, { newValue }) => {
    this.setState({
      value: newValue
    });
  };

  // Autosuggest will call this function every time you need to update suggestions.
  // You already implemented this logic above, so just use it.
  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(value)
    });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };
  BtnFetchData= (e,i)=> {
    this.setState({value: ""})
    //console.log(e.inputProps.value);
    const userDetails = languages
    const inputVal = e.inputProps.value;
    let indexuser;
    userDetails.map((user,index)=>{
        if(inputVal === user.name){
            indexuser = index
            return indexuser
        }
        return true
      })
      this.setState({
        userSearchResult : userDetails[indexuser]
      });
  }
  render() {
    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Type a programming language',
      value,
      className: "Inputbox",
      onChange: this.onChange,
      type : "search"
    };

    // Finally, render it!
    return (
    <div>
      <Autosuggest
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
      <button onClick={this.BtnFetchData.bind(this,{inputProps})}>Search</button>
      <SearchResult Result={this.state.userSearchResult}/>
    </div>
    );
  }
}

export default SearchDrop;