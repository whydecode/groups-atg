import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Navbar from "react-bootstrap/Navbar";
import "../css/navbar.css";
import logo from "../images/whole.png";
import { useEffect, useState } from "react";
import { auth } from "../firebase/Firebase";
import { Dropdown } from "react-bootstrap";
import { signOut } from "firebase/auth";
import RegisterScreen, { onAuthStateChanged } from "../screens/RegisterScreen";
import LoginScreen from "../screens/LoginScreen";
function NavScrollExample() {
  const [user, setUser] = useState(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);
  const logOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (err) {
      console.error(err);
    }
  };
  const [showComponentOne, setShowComponentOne] = useState(true);

  const handleToggle = () => {
    setShowComponentOne(!showComponentOne);
  };
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      {show ? (
        showComponentOne ? (
          <RegisterScreen onToggle={handleToggle} onShow={handleShow} />
        ) : (
          <LoginScreen onToggle={handleToggle} onShow={handleShow} />
        )
      ) : null}

      <Container fluid>
        <Navbar.Brand href="/">
          <img src={logo} alt="ATGWORLD" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex">
            <Button className="search-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </Button>
            <Form.Control
              type="search"
              placeholder="Search for your favourite groups in ATG"
              className="me-2"
              aria-label="Search"
            />
          </Form>
          {user ? (
            <div className="username">
              <p>Hi, {user.displayName}</p>
              <Dropdown className="">
                <Dropdown.Toggle id="dropdown-basic"></Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={logOut}>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          ) : (
            <button
              style={{ textTransform: "none" }}
              className="loginButton"
              onClick={handleShow}
            >
              Create account. <span>It’s free!</span>{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-caret-down-fill"
                viewBox="0 0 16 16"
              >
                <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
              </svg>
            </button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
