import React, { Fragment } from "react";
import {Container, Row, Col} from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Task from "./Task";
import { fetchTasks } from "../store/tasks/actions"
import StompClient from "../websocket-listener"

export const TasksList = () => {
    const tasks = useSelector((state) => state.TaskReducer.tasks);
    const tasksStatus = useSelector(state => state.TaskReducer.status);

    const dispatch = useDispatch();


    useEffect(() => {
        console.log('tasks status - ' + tasksStatus);
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
            {tasksStatus !== 'succeeded'? (
                <span>Loading...</span>
            ):(
             <Fragment>
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
             </Fragment>   
            )}
        </Container>
    );
}

export default TasksList;