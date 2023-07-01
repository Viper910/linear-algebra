import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "boxicons";
import { Route, Routes } from "react-router-dom";
import Twolineequation from "./screens/twolineeequation";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Mainscreen from "./screens/mainscreen/mainscreen";
import Elementarymath from "./screens/elementaryMath/elementarymath";
import Algebra from "./screens/algebra/algebra";
import About from "./screens/about/about";

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
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
        <Route path="/" element={<Mainscreen />} />
        <Route path="/twolineequation" element={<Twolineequation />} />
        <Route path="/elementarymath" element={<Elementarymath />} />
        <Route path="/algebra" element={<Algebra />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
