import React, { useState, useEffect } from 'react';
import ToDoItemComponent from './ToDoItemComponent';
import { ListGroup } from 'react-bootstrap';


function ToDoView(props) {

    const [currentToDo, setCurrentToDo] = useState(
        [
            {
                "id": 1,
                "parent": {
                    "id": 1,
                    "listName": "Groceries"
                },
                "toDoDescription": "Apples",
                "completed": false
            },
            {
                "id": 2,
                "parent": {
                    "id": 1,
                    "listName": "Groceries"
                },
                "toDoDescription": "Pasta",
                "completed": false
            },
            {
                "id": 3,
                "parent": {
                    "id": 1,
                    "listName": "Groceries"
                },
                "toDoDescription": "Coffee",
                "completed": false
            }
        ]);

    const [activeToDo, setActiveToDo] = useState({});

    function handleChangeOfCompleted(changedId, newCompleted) {
        for (const index in currentToDo) {
            if (currentToDo[index].id == changedId) {
                let newToDo = currentToDo;
                newToDo[index].completed = newCompleted;
                setCurrentToDo(newToDo);
                console.log(currentToDo);
            }
        }
    }

    function renderToDoList(currentToDo) {
        return currentToDo.map(x => (
            <ToDoItemComponent
                id={x.id}
                toDoDescription={x.toDoDescription}
                completed={x.completed}
                handleChangeOfCompleted={handleChangeOfCompleted}
            />
        ))
    }

    return (
        <React.Fragment>
            <h1>{props.activeList}</h1>
            {renderToDoList(currentToDo)}
        </React.Fragment>
    )
}

export default ToDoView;

