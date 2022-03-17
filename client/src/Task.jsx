import React from "react";
import { Card, Button } from "react-bootstrap";

export default class Task extends React.Component {

    constructor(props){
        super(props);
        this.onDelete = this.onDelete.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
    }

    onDelete(e){
        this.props.onDelete(this.props.task);
    }

    onUpdate(e){
        this.props.onUpdate(this.props.task);
    }

    render() {
        let buttonText = "In progress";
        if (this.props.task.state === "IN_PROGRESS") {
            buttonText = "Done";
        } else if (this.props.task.state === "DONE") {
            buttonText = "Archived";
        }

        return (
            <Card className={this.props.task.state.toLowerCase()}>
                <Card.Body>
                    <Card.Title>{this.props.task.name}</Card.Title>
                    <Card.Text>
                        {this.props.task.description}
                    </Card.Text>
                    <Button variant="info" size="sm" onClick={this.onUpdate}>{buttonText}</Button>
                    <Button variant="danger" size="sm" onClick={this.onDelete}>Delete</Button>
                </Card.Body>
            </Card>
        );
    }
}