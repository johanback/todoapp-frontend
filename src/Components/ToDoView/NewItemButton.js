import React from 'react';
import { Button } from 'react-bootstrap';
import './NewItemButton.css';

function NewItemButton() {
    return (
        <div className="newItemButton" >
            <Button variant="outline-secondary">New Item</Button>
        </div >
    )
}

export default NewItemButton;