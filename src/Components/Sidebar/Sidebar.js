import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import SidebarListButton from './SidebarListButton';
import { Button } from 'react-bootstrap';

function Sidebar(props) {

  const [lists, setLists] = useState([]);
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

  //Fetches all lists from the backend and saves them in the state
  function getAllLists() {
    fetch("http://localhost:8080/lists/")
      .then(result => result.json())
      .then(result => {
        setLists(result)
      })
  }


  //Sends the new list name to the backend and saves it in the DB
  async function addNewList (){
    const response = await fetch('http://localhost:8080/lists', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ 'listName': 'The New List', })
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
          <Button variant="outline-secondary" onClick={addNewList}>New List</Button>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Sidebar;