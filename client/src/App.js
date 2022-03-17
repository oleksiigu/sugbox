import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Col, Row } from "react-bootstrap";
import TasksList from "./TasksList";
import CreateDialog from "./CreateDialog";
import StompClient from "./websocket-listener"

class App extends React.Component {

    constructor(props) {
        super(props);
        this.saveTask = this.saveTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
        this.updateState = this.updateState.bind(this);
        this.loadTasks = this.loadTasks.bind(this);

        this.state = {tasks: [], self_link: ""};
    }

    componentDidMount() {
        this.loadTasks();
        StompClient.register([
          {route: '/topic/newTask', callback: this.loadTasks},
          {route: '/topic/deleteTask', callback: this.loadTasks},
          {route: '/topic/updateTask', callback: this.loadTasks}
        ]);
    }

    loadTasks() {
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
      axios.post(this.state.self_link, {
        name: name,
        description: description,
        state: "TODO"
      }).then(response => {
        this.loadTasks();
      }).catch(error => {
        alert(`Error on save: ${error}`);
      });
    }

    updateState(task) {
      let state = "IN_PROGRESS";
      if(task.state === "IN_PROGRESS") {
        state = "DONE";
      } else if (task.state == "DONE") {
        state = "ARCHIVED";
      }

      axios.patch(task._links.self.href, {
        "state": state
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(response => {
        this.loadTasks();
      }).catch(error => {
        alert(`Error on update: ${error}`);
      });
    }

    deleteTask(task){
      axios.delete(task._links.self.href).then(response => {
        this.loadTasks();
      }).catch(error=>{
        alert(`Error on delete: ${error}`);
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
                      <TasksList tasks={this.state.tasks} onDelete={this.deleteTask} onUpdate={this.updateState}></TasksList>
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
