import React from "react";
import UserForm from "./Components/Fase1/UserForm";
import FormContainer from "./Components/Fase2/FormContainer";
import Navigation from "./Components/layout/Navigation";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";

function App() {
  return (
    <div className="App">
      <Router>
        <Container maxWidth="lg">
          <Navigation />
          <Route path="/" exact component={UserForm} />
          <Route path="/fase2" component={FormContainer} />
        </Container>
      </Router>
    </div>
  );
}

export default App;
