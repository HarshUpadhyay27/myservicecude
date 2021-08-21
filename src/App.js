import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="grid-container">
      <header>
        <Navbar />
      </header>
      <main>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
        </Switch>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
