import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';

class Suggestion extends React.Component {

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

export default Suggestion;