import React, { useState, useEffect } from 'react';
import ToDoItemComponent from './ToDoItemComponent';
import { ListGroup } from 'react-bootstrap';


function ToDoView(props) {

    const [currentToDo, setCurrentToDo] = useState([]);
    const [currentToDoTitle, setCurrentToDoTitle] = useState("");
    const [currentToDoLoaded, setCurrentToDoLoaded] = useState(false);

    useEffect(() => { getActiveList(props.activeList) }, [props.activeList])
    
    useEffect(() => {
        console.log(currentToDo)
        setCurrentToDoLoaded(true);
    }, [currentToDo])


    function getActiveList() {

        let url = "http://localhost:8080/items/" + props.activeList;
        fetch(url)
            .then(result => result.json())
            .then(result => {
                setCurrentToDo(result)
                setCurrentToDoTitle(result[0].parent.listName)

            })

    }

    function handleChangeOfCompleted(changedId, newCompleted) {
        for (const index in currentToDo) {
            if (currentToDo[index].id == changedId) {
                let newToDo = currentToDo;
                newToDo[index].completed = newCompleted;
                setCurrentToDo(newToDo);
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
            <h3 className="listTitle">{currentToDoTitle}</h3>
            {currentToDoLoaded ? renderToDoList(currentToDo) : <span>Loading</span>}
        </React.Fragment>
    )
}

export default ToDoView;

