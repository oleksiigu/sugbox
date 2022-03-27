import React from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Col, Row, Navbar } from "react-bootstrap";
import TasksList from "./TasksList";
import CreateDialog from "./CreateDialog";
import { Provider } from 'react-redux'
import store from './store'

export const App = ()=> {

    return (
      <React.Fragment>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
            Suggestion Box
            </Navbar.Brand>
            <Navbar.Toggle />
              <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                  <a href="/logout">Logout</a>
                </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
          <div className="center">
            <h1>Welcome to Suggestion Box!</h1>
          </div>

        
          <Container>
            <Row>
              <Col xs={3}>
                <CreateDialog></CreateDialog>
              </Col>
              <Col>
                <TasksList></TasksList>
              </Col>
            </Row>
          </Container>
      </React.Fragment>
      );
}


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
    document.getElementById('root')
)

export default App;
