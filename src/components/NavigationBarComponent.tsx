import { Nav, Navbar } from "react-bootstrap";

export const NavigationBar = () => {
  return (
    <Navbar bg="primary" expand="sm" sticky="top">
      <Navbar.Brand href="#home">Sztahanova.Dev</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="react-paint-app">Paint</Nav.Link>
          <Nav.Link href="react-quiz-app">Quiz</Nav.Link>
          <Nav.Link href="react-meme-generator">Meme Generator</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
