import React from "react";
import { updateTaskState, removeTask } from "./tasks/tasksSlice";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

export const Task = (props) => {

    const dispatch = useDispatch();
    const {id, name, description} = props.task;

    function onUpdate() {
        dispatch(updateTaskState(props.task));
    }

    function onDelete(){
        dispatch(removeTask(props.task));
    }

    return (
        <Card className="bg-dark text-white taskCard">
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button variant="info" size="sm" onClick={onUpdate}>Move</Button>{' '}
                <Button variant="danger" size="sm" onClick={onDelete}>Delete</Button>{' '}
            </Card.Body>
        </Card>
    );
}

export default Task;