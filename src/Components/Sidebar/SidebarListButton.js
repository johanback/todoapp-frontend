import React from 'react';
import './SidebarListButton.css';
import { Button } from 'react-bootstrap';

function SidebarListButton(props){
    return (
        <div>
            <Button variant="outline-primary" >{props.listName}</Button>
        </div>

    );
}

export default SidebarListButton;