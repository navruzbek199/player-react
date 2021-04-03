import React from "react";
import Header from "./components/Header/header";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/home";
import Footer from "./components/Footer/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Servis from "./pages/servis/Servis";
import Serial from "./pages/serial/serial";
import Tv from "./pages/tv/tv";
import Admin from "./pages/admin/admin";
import Follow from "./pages/follower/follow";
import Myfollow from './pages/myfollow/myfollow';
function App() {
  return (
    <div className="App">
      
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/servis">
            <Servis />
          </Route>
          <Route path="/serial">
            <Serial />
          </Route>
          <Route path="/tv">
            <Tv />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/follow">
            <Follow />
          </Route>
          <Route path="/myfollow">
            <Myfollow />
          </Route>
        </Switch>
        <Footer />
      </Router>
     
    </div>
  );
}

export default App;
