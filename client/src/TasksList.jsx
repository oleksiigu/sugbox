import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import Task from "./Task";

export default class TasksList extends React.Component {
    constructor(props){
        super(props);
    }

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
                                    <Task task={suggestion} onDelete={this.props.onDelete} onUpdate={this.props.onUpdate}></Task>
                                </Row>
                            )
                        })}
                    </Col>
                    <Col>
                        {this.props.tasks.filter(suggestion => suggestion.state === "IN_PROGRESS").map((suggestion,i) => {
                            return (
                                <Row>
                                    <Task task={suggestion} onDelete={this.props.onDelete} onUpdate={this.props.onUpdate}></Task>
                                </Row>
                            )
                        })}
                    </Col>
                    <Col>
                        {this.props.tasks.filter(suggestion => suggestion.state === "DONE").map((suggestion,i) => {
                            return (
                                <Row>
                                    <Task task={suggestion} onDelete={this.props.onDelete} onUpdate={this.props.onUpdate}></Task>
                                </Row>
                            )
                        })}
                    </Col>
                </Row>
            </Container>
        );
    }
}