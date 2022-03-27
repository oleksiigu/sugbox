import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Task from "./Task";
import StompClient from "./websocket-listener"
import { selectAllTasks, fetchTasks } from "./tasks/tasksSlice";

export const TasksList = () => {
    const tasks = useSelector(selectAllTasks);
    const tasksStatus = useSelector(state => state.tasks.status);
    const error = useSelector(state => state.tasks.error)

    const dispatch = useDispatch();

    

    useEffect(() => {

        if (tasksStatus === 'idle') {
          dispatch(fetchTasks());
        }

        StompClient.register([
            {route: '/topic/newTask', callback: () => { dispatch(fetchTasks()); } },
            {route: '/topic/deleteTask', callback: () => { dispatch(fetchTasks()); } },
            {route: '/topic/updateTask', callback: () => { dispatch(fetchTasks()); }  }
          ]);
        
      }, [tasksStatus, dispatch]);

    return (
        <Container className="p-3">
            <Row>
                <Col><h5>TODO</h5></Col>
                <Col><h5>In progress</h5></Col>
                <Col><h5>Done</h5></Col>
            </Row>
            <Row>
                <Col>
                    {tasks.filter(suggestion => suggestion.state === "TODO").map((suggestion,i) => {
                        return (
                            <Row key={suggestion.id}>
                                <Task task={suggestion}></Task>
                            </Row>
                        )
                    })}
                </Col>
                <Col>
                    {tasks.filter(suggestion => suggestion.state === "IN_PROGRESS").map((suggestion,i) => {
                        return (
                            <Row key={suggestion.id}>
                                <Task task={suggestion}></Task>
                            </Row>
                        )
                    })}
                </Col>
                <Col>
                    {tasks.filter(suggestion => suggestion.state === "DONE").map((suggestion,i) => {
                        return (
                            <Row key={suggestion.id}>
                                <Task task={suggestion}></Task>
                            </Row>
                        )
                    })}
                </Col>
            </Row>
        </Container>
    );
}

export default TasksList;