import React from 'react';
import { Button } from 'react-bootstrap';
import './NewItemButton.css';

function NewItemButton(props) {
    return (
        <div className="newItemButton" >
            <Button variant="outline-secondary" onClick={props.showNewItemModal}>New Item</Button>
        </div >
    )
}

export default NewItemButton;