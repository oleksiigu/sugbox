import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import { Card, Button,Container, Row, Col } from 'react-bootstrap';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {tasks: []};
    }

    componentDidMount() {
        axios.get(`api/tasks`)
            .then(res => {
                this.setState({ tasks: res.data});
            })
            .catch(error => {
                console.error(`Error: ` + error);
            });
    }

    render() {
        return (
            <React.Fragment>
                <h1>Welcome to Suggestion Box!</h1>

                <TasksList tasks={this.state.tasks}></TasksList>
            </React.Fragment>
            );
    }
}

class TasksList extends React.Component {

    render() {
        return (
            <Container className="p-3">
                <Row>
                    <Col><h5>TODO</h5></Col>
                    <Col><h5>In progress</h5></Col>
                    <Col><h5>Done</h5></Col>
                </Row>
                <Row>
                    <Col>
                        {this.props.tasks.filter(suggestion => suggestion.state === "TODO").map((suggestion,i) => {
                            return (
                                <Row>
                                    <Task {...suggestion}></Task>
                                </Row>
                            )
                        })}
                    </Col>
                    <Col>
                        {this.props.tasks.filter(suggestion => suggestion.state === "INPROGRESS").map((suggestion,i) => {
                            return (
                                <Row>
                                    <Task {...suggestion}></Task>
                                </Row>
                            )
                        })}
                    </Col>
                    <Col>
                        {this.props.tasks.filter(suggestion => suggestion.state === "DONE").map((suggestion,i) => {
                            return (
                                <Row>
                                    <Task {...suggestion}></Task>
                                </Row>
                            )
                        })}
                    </Col>
                </Row>
            </Container>
        );
    }
}

class Task extends React.Component {

    render() {
        return (
            <Card className={this.props.state.toLowerCase()}>
                <Card.Body>
                    <Card.Title>{this.props.description}</Card.Title>
                    <Card.Text>
                        {this.props.description}
                    </Card.Text>
                    <Button variant="outline-info">In progress</Button>
                </Card.Body>
            </Card>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('react')
)

export default App;
