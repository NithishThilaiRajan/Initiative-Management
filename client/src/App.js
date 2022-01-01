import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./LoginForm";
import Home from "./HomePage";
import Registration from "./Registration"
import { useSelector } from "react-redux";
import Navbar from "./navbar";
function App() {
  const userDetails = useSelector((state) => state.userInfo);
  const loginStatus = userDetails.loggedIn;
  const loggedName=userDetails.name;
  console.log(loggedName);
  return (
    <>
      <Router>
      <Navbar/>
        <Switch>
        <Route  path='/reg' component={Registration}/>
         
        
          <Route path="/login" component={Login} />
          <Route path="/" component={() => <Home authorized={loginStatus} />} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
