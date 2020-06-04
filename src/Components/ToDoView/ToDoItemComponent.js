import React, { useState, useEffect } from 'react';
import { ListGroup, Button, Form } from 'react-bootstrap';
import { ReactComponent as Checkmark } from '../svg/checkmark.svg';
import './ToDoItemComponent.css';


function ToDoItemComponent(props) {

    const [completed, setCompleted] = useState(props.completed);

    useEffect(() => { props.handleChangeOfCompleted(props.id, completed) }, [completed]);

    //Sets completed state of list item when checking box
    const handleCompleted = (event) => {
        setCompleted(event.target.checked);
    }

    //TODO: Edit item functionality
    function editItem(e) { 
        console.log(e.target)
    }


    //Handles multiple styles conditionally rendering
    let titleStyles = completed ? "itemname strikethrough" : "itemname";

    return (

        <div className="toDoRowWrapper">
            <div className="toDoRow" id={props.id}>
                <Form.Check inline type={"checkbox"} className="checkbox" onChange={handleCompleted} />
                <span onClick={editItem} className={titleStyles} >{props.toDoDescription}</span>
                {/* <Button variant="outline-secondary" className="editbutton">Edit</Button> */}
            </div>
        </div>

    );
}

export default ToDoItemComponent;