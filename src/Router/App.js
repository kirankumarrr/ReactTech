import React,{Component} from 'react';
import { BrowserRouter as Router, Link ,NavLink, Redirect, Prompt} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './router.css'

const User = (params) => {
    return(<h1>Welcome User {params.username}</h1>)
};
/* Use NavLink to set which is active */
class AppRouter extends Component{
    state = {
        loggined :false
    }
    Authentication = () =>{
        this.setState((prevState) => 
        ({ loggined: !prevState.loggined })
      )
    }
render(){
    return(
        <Router>
            <div className="MainApp">
                <div className="headerSec">
                    <NavLink to="/" className="nav-head"  exact strict activeStyle={{color:'green'}}>Home</NavLink>
                    <NavLink to="/about" className="nav-head" activeStyle={{color:'green'}}>About</NavLink>
                    <NavLink to="/user/Varun Kumar" className="nav-head" activeStyle={{color:'green'}}>Varun Kumar</NavLink>
                    <NavLink to="/user/Kiran" className="nav-head" activeStyle={{color:'green'}}>Kiran</NavLink>
                    <Prompt 
                        when = {!this.state.loggined}
                        message = {(location)=>{
                            return location.pathname.startsWith("/user") ? 'Are you sure ?': true
                        }}
                    />
                </div> 
                <input className="lgnBtn" type="button"
                        onClick={this.Authentication.bind(this)}
                        value={this.state.loggined ? "Log Out" : "Login"} 
                  />
                <Route path="/" exact strict render={ () => { return ( <h1>Welcome Home</h1> ) }} />
                <Route path="/about" exact strict render={ () => { return ( <h1>Welcome About</h1> ) } } />
                {/*  <Route path="/user/:username" exact strict component={User}/> */}
                <Route path="/user/:username" exact strict render= {({match})=>(
                    this.state.loggined ? (<User username={match.params.username} />) : (<Redirect to="/" />)
                )} />
            </div> 
            
        </Router>
    );
}
}

export default AppRouter;