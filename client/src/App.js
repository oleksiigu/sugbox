import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Col, Row } from "react-bootstrap";
import TasksList from "./TasksList";
import CreateDialog from "./CreateDialog";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.saveTask = this.saveTask.bind(this);
        this.state = {tasks: [], self_link: ""};
    }

    componentDidMount() {
        axios.get(`api/tasks`)
            .then(res => {
                this.setState({ tasks: res.data._embedded.tasks,
                                self_link: res.data._links.self.href });           
            })
            .catch(error => {
                console.error(`Error: ` + error);
            });
    }

    saveTask(name, description) {
      alert('Sending: ' + this.state.self_link);
      axios.post(this.state.self_link, {
        name: name,
        description: description,
        state: "TODO"
      }).then(response => {
        alert(`Task saved: ${response}`);
      }).catch(error => {
        alert(`Error on save: ${error}`);
      });
    }

    render() {
        return (
            <React.Fragment>
                <div>
                  <h1>Welcome to Suggestion Box!</h1>
                </div>
                

                <Container>
                  <Row>
                    <Col xs={3}>
                      <CreateDialog saveTask={this.saveTask}></CreateDialog>
                    </Col>
                    <Col>
                      <TasksList tasks={this.state.tasks}></TasksList>
                    </Col>
                  </Row>
                </Container>
            </React.Fragment>
            );
    }
}




ReactDOM.render(
    <App />,
    document.getElementById('root')
)

export default App;
