import React from "react";
import { ReactDOM } from "react";
import {Form, Button} from "react-bootstrap";

export default class CreateDialog extends React.Component {

    constructor(props) {
        super(props);
        this.state = {name:"", description: ""};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.saveTask(this.state.name, this.state.description);
        this.setState({name:"", description: ""});
        window.location = "#";
    }

    onNameChange(e) {
        var val = e.target.value;
        this.setState({name: val});
    }

    onDescriptionChange(e) {
        var val = e.target.value;
        this.setState({description: val});
    }

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Task name" value={this.state.name} onChange={this.onNameChange}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formName">
                    <Form.Label>Description</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Task description" value={this.state.description} onChange={this.onDescriptionChange}/>
                </Form.Group>

                <Button variant="outline-success" size="sm" type="submit">
                    Save
                </Button>
            </Form>
        );
    }

}