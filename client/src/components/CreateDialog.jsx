import React, { useState } from "react";
import {Form, Button} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { createTask } from "../store/tasks/actions";


export const CreateDialog = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const onNameChanged = e => setName(e.target.value);
    const onDescriptionChanged = e => setDescription(e.target.value);

    const onSaveTaskClicked = () => {
        if (name && description) {
            dispatch(createTask({
                name,
                description,
                state: "TODO"
            }))
        }

            setName('');
            setDescription('');
    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Task name" value={name} onChange={onNameChanged}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Task description" value={description} onChange={onDescriptionChanged}/>
            </Form.Group>

            <Button variant="outline-success" size="sm" onClick={onSaveTaskClicked}>
                Save
            </Button>
        </Form>
    );
}

export default CreateDialog;