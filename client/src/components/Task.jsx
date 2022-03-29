import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../store/tasks/actions";

export const Task = (props) => {

    const dispatch = useDispatch();
    const {name, description} = props.task;

    return (
        <Card className="bg-dark text-white taskCard">
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button variant="info" size="sm" onClick={() => dispatch(updateTask(props.task))}>Move</Button>{' '}
                <Button variant="danger" size="sm" onClick={() => dispatch(deleteTask(props.task))}>Delete</Button>{' '}
            </Card.Body>
        </Card>
    );
}

export default Task;