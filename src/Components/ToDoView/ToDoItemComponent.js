import React, { useState, useEffect } from 'react';
import { ListGroup, Button, Form } from 'react-bootstrap';
import { ReactComponent as Checkmark } from '../svg/checkmark.svg';
import './ToDoItemComponent.css';

function ToDoItemComponent(props) {

    const [completed, setCompleted] = useState(props.completed);

    useEffect(() => { props.handleChangeOfCompleted(props.id, completed) }, [completed]);

    const handleCompleted = (event) => {
        setCompleted(event.target.checked);
    }

    return (

        <div className="toDoRow" id={props.id}>
            <Form.Check inline type={"checkbox"} onChange={handleCompleted} />
            <span className={completed ? 'completed' : ''}>{props.toDoDescription}</span>
            <Button className="editbutton">Edit</Button>
        </div>

    );
}

export default ToDoItemComponent;