import React, { useState, useEffect } from 'react';
import ToDoItemComponent from './ToDoItemComponent';
import { ListGroup } from 'react-bootstrap';


function ToDoView(props) {

    const allToDos = [
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
        },
        {
            "id": 4,
            "parent": {
                "id": 2,
                "listName": "Workout"
            },
            "toDoDescription": "Deadlift",
            "completed": false
        },
        {
            "id": 5,
            "parent": {
                "id": 2,
                "listName": "Workout"
            },
            "toDoDescription": "Squat",
            "completed": false
        },
        {
            "id": 6,
            "parent": {
                "id": 2,
                "listName": "Workout"
            },
            "toDoDescription": "Bench press",
            "completed": false
        }
    ]

    const [currentToDo, setCurrentToDo] = useState(getActiveList);

    useEffect(() => { setCurrentToDo(getActiveList(props.activeList)) }, [props.activeList]);


    function getActiveList() {
        let listToDisplay = [];
        for (const index in allToDos) {
            if (allToDos[index].parent.id == props.activeList)
                listToDisplay.push(allToDos[index])
        }
        console.log(listToDisplay)
        return listToDisplay;
    }

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

