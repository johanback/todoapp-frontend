import React, { useState, useEffect } from 'react';
import ToDoItemComponent from './ToDoItemComponent';
import ToDoViewHeader from './ToDoViewHeader';

import './ToDoView.css';
import NewItemButton from './NewItemButton';


function ToDoView(props) {

    const [currentToDo, setCurrentToDo] = useState([]);
    const [currentToDoTitle, setCurrentToDoTitle] = useState("");
    const [currentToDoLoaded, setCurrentToDoLoaded] = useState(false);

    useEffect(() => { getActiveList(props.activeList) }, [props.activeList])
    
    useEffect(() => {
        setCurrentToDoLoaded(true);
    }, [currentToDo])


    //Fetches the clicked lists items from the backend
    function getActiveList() {

        let url = "http://localhost:8080/items/" + props.activeList;
        fetch(url)
            .then(result => result.json())
            .then(result => {
                setCurrentToDo(result)
                setCurrentToDoTitle(result[0].parent.listName)

            })

    }

    //Handles change of completed state of an item in a list
    function handleChangeOfCompleted(changedId, newCompleted) {
        for (const index in currentToDo) {
            if (currentToDo[index].id == changedId) {
                let newToDo = currentToDo;
                newToDo[index].completed = newCompleted;
                setCurrentToDo(newToDo);
            }
        }
    }

    //Iterates over all toDos in the active list and creates components for each
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
            <ToDoViewHeader currentToDoTitle={currentToDoTitle}></ToDoViewHeader>
            {currentToDoLoaded ? renderToDoList(currentToDo) : <span>Loading</span>}
            <NewItemButton></NewItemButton>
        </React.Fragment>
    )
}

export default ToDoView;

