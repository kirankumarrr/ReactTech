import React,{Component} from 'react';
import { BrowserRouter as Router, Link ,NavLink} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './router.css'

const User = ({match}) => {
    console.log(match);
    return(<h1>Welcome User {match.params.username}</h1>)
};
/* Use NavLink to set which is active */
class AppRouter extends Component{

    render(){
        return(
            <Router>
                <div className="MainApp">
                    <div className="headerSec">
                        <NavLink to="/" className="nav-head"  exact strict activeStyle={{color:'green'}}>Home</NavLink>
                        <NavLink to="/about" className="nav-head" activeStyle={{color:'green'}}>About</NavLink>
                        <NavLink to="/user/Peter" className="nav-head" activeStyle={{color:'green'}}>Peter</NavLink>
                        <NavLink to="/user/Kiran" className="nav-head" activeStyle={{color:'green'}}>Kiran</NavLink>
                        
                    </div> 
                    <div className="lgnBtn">Login</div>
                    <Route path="/" exact strict render={ () => { return ( <h1>Welcome Home</h1> ) }} />
                    <Route path="/about" exact strict render={ () => { return ( <h1>Welcome About</h1> ) } } />
                    <Route path="/user/:username" exact strict component={User}/>
                </div> 
            </Router>
        );
    }
}

export default AppRouter;