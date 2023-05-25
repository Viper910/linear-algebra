import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "boxicons";
import { Route, Routes } from "react-router-dom";
import Twolineequation from "./screens/twolineeequation";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home" className="brandname">
            LinearAlgebra
            <box-icon
              width="30"
              height="30"
              className="d-inline-block align-middle"
              size="sm"
              color="cyan"
              name="graphql"
              type="logo"
              animation="spin"
            ></box-icon>
          </Navbar.Brand>
          <Nav className="d-flex justify-content-end">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/twolineequation" element={<Twolineequation/>} />
      </Routes>
      ;
    </>
  );
}

export default App;
