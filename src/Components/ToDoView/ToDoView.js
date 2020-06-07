import React, { useState, useEffect } from 'react';
import ToDoItemComponent from './ToDoItemComponent';
import ToDoViewHeader from './ToDoViewHeader';
import { Form, Button, Modal } from 'react-bootstrap';

import './ToDoView.css';
import NewItemButton from './NewItemButton';
import NewItemModal from './NewItemModal';


function ToDoView(props) {

    const [currentToDo, setCurrentToDo] = useState([]);
    const [currentToDoTitle, setCurrentToDoTitle] = useState("");
    const [currentToDoLoaded, setCurrentToDoLoaded] = useState(false);

    //Handling of the adding of new items modal
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)

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
                setCurrentToDoTitle(props.activeList)

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
        if (currentToDo.length > 0) {
            return currentToDo.map(x => (
                <ToDoItemComponent
                    id={x.id}
                    toDoDescription={x.toDoDescription}
                    completed={x.completed}
                    handleChangeOfCompleted={handleChangeOfCompleted}
                />
            ))
        } else {
            return (
                <div className="listEmptyContainer">
                    <span className="listEmpty">Add items to your list!</span>
                </div>
            )
        }

    }


    return (
        <React.Fragment>
            <ToDoViewHeader currentToDoTitle={currentToDoTitle}></ToDoViewHeader>
            {currentToDoLoaded ? renderToDoList(currentToDo) : <span>Loading</span>}
            <NewItemButton showNewItemModal={setShow}></NewItemButton>
            <NewItemModal
                show={show}
                setShow={setShow}
                handleClose={handleClose}
                activeList={props.activeList}
                updateList={getActiveList}>
            </NewItemModal>
        </React.Fragment>
    )
}

export default ToDoView;

