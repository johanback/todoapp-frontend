import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import SidebarListButton from './SidebarListButton';
import { Button, Modal, Form } from 'react-bootstrap';

function Sidebar(props) {

  const [lists, setLists] = useState([]);
  const [show, setShow] = useState(false);
  const [newListName, setNewListName] = useState("");
  useEffect(() => { getAllLists() })

  // const listsPlaceholder = [
  //   {
  //     "id": 1,
  //     "listName": "Groceries"
  //   },
  //   {
  //     "id": 2,
  //     "listName": "Workout"
  //   },
  //   {
  //     "id": 3,
  //     "listName": "Work"
  //   },
  //   {
  //     "id": 4,
  //     "listName": "Hobbies"
  //   }
  // ];

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //Fetches all lists from the backend and saves them in the state
  function getAllLists() {
    fetch("http://localhost:8080/lists/")
      .then(result => result.json())
      .then(result => {
        setLists(result)
      })
  }


  //Sends the new list name to the backend and saves it in the DB
  async function addNewList(e) {
    let nameToBeSubmitted = { 'listName': newListName }
    setShow(false);
    const response = await fetch('http://localhost:8080/lists', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nameToBeSubmitted)
    });
    
  }


  return (
    <React.Fragment>
      <div>
        <div className="sidebartitle">
          To Do's
      </div>
        <div className="toDoLists">
          {lists.map(x => <SidebarListButton id={x.id} listName={x.listName} setActiveList={props.setActiveList} />)}
        </div>
        <div className="newListButton">
          <Button variant="outline-secondary" onClick={handleShow}>New List</Button>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create new list</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group id="newListName">
            <Form.Control size="lg" type="text" placeholder="List name" onChange={(e) => setNewListName(e.target.value)}/>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button form="newListName" variant="primary" onClick={addNewList}>
            Create list
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  )
}

export default Sidebar;