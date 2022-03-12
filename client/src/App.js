import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';
import TasksList from "./TasksList";

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {tasks: []};
    }

    componentDidMount() {
        axios.get(`api/tasks`)
            .then(res => {
                this.setState({ tasks: res.data._embedded.tasks });
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




ReactDOM.render(
    <App />,
    document.getElementById('root')
)

export default App;
