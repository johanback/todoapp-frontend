import React, { useState, useEffect } from 'react';
import { ListGroup, Button, Form } from 'react-bootstrap';
import { ReactComponent as Checkmark } from '../svg/checkmark.svg';
import './ToDoItemComponent.css';


function ToDoItemComponent(props) {

    // useEffect(() => { console.log("YO") }, [props]);

    //Sets completed state of list item when checking box
    const handleCompleted = (event) => {
        props.handleChangeOfCompleted(event.target.id, event.target.checked);
    }

    //TODO: Edit item functionality
    function editItem(e) {
        console.log(e.target)
    }


    //Handles multiple styles conditionally rendering
    let titleStyles = props.completed ? "itemname strikethrough" : "itemname";

    return (

        <div className="toDoRowWrapper">
            <div className="toDoRow" >
                <Form.Check
                    key={'check' + props.id}
                    inline
                    defaultChecked={props.completed}
                    type={"checkbox"}
                    className="checkbox"
                    id={props.id}
                    onChange={handleCompleted} />
                <span
                    key={'desc' + props.id}
                    onClick={editItem}
                    className={titleStyles} >
                    {props.toDoDescription}
                </span>
                {/* <Button variant="outline-secondary" className="editbutton">Edit</Button> */}
            </div>
        </div>

    );
}

export default ToDoItemComponent;