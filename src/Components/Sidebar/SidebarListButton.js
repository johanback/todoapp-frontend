import React from 'react';
import './SidebarListButton.css';
import { Button } from 'react-bootstrap';

function SidebarListButton(props) {
    
    function handleChange(event) { 
        props.setActiveList(event.target.id);
    }

    return (
        <div>
            <Button variant="outline-primary" id={props.id} onClick={handleChange}>{props.listName}</Button>
        </div>

    );
}

export default SidebarListButton;