import TopBar from "./components/topbar/TopBar";
import Register from "./pages/register/register";
import Login from "./pages/login/Login";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Home from "./pages/home/Home"
import Single from "./pages/single/Single";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const user= true;
  return (   
    <Router>
    <TopBar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/posts">
        <Home />
      </Route>
      <Route path="/register">
       {user ? <Home/> : <Register />}
      </Route>
      <Route path="/login"> 
      {user ? <Home/> : <Login />}
      </Route>
      <Route path="/post/:id">
        <Single />
      </Route>
      <Route path="/write">
      {user ? <Write /> : <Register />} </Route>
      <Route path="/settings">
      {user ? <Settings /> : <Register />}          
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
