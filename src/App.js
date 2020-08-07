import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Contact from "../src/views/contact";
import Portfolio from "../src/views/portfolio";
import Index from "../src/views/index";


function App() {
  return (
    <Router>
      <div>
        <Route exact path="/nm-portfolio/" component={Index} />
        <Route exact path="/nm-portfolio/contact" component={Contact} />
        <Route exact path="/nm-portfolio/portfolio" component={Portfolio} />
      </div>
    </Router>
  );
}

export default App;