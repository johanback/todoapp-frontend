import React, { useState, useEffect } from 'react';
import './Sidebar.css';
import SidebarListButton from './SidebarListButton';

function Sidebar(props) {

  const [lists, setLists] = useState(
    [
      {
        "id": 1,
        "listName": "Groceries"
      },
      {
        "id": 2,
        "listName": "Workout"
      },
      {
        "id": 3,
        "listName": "Work"
      },
      {
        "id": 4,
        "listName": "Hobbies"
      }
    ]
  )

  return (
    <React.Fragment>
      <div className="sidebartitle">
        To Do's
      </div>
      <div>
        {lists.map(x => <SidebarListButton id={x.id} listName={x.listName} setActiveList={props.setActiveList}/>)}
      </div>
    </React.Fragment>
  )
}

export default Sidebar;