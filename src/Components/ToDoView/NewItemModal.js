import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

function NewItemModal(props) {

    const [item, setItem] = useState("Derp");

    async function addNewItem() {
        let itemToBeSubmitted = {
            'toDoDescription': item,
            'parent': props.activeList
        }
        let url = 'http://localhost:8080/items/';
        console.log(url);
        props.setShow(false);
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(itemToBeSubmitted)
        });
        props.updateList();
    }

    return (
        <Modal show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add item</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group id="newListName">
                    <Form.Control size="lg" type="text" onChange={(e) => setItem(e.target.value)}/>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Cancel
                </Button>
                <Button form="newListName" variant="primary" onClick={addNewItem}>
                    Add
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default NewItemModal;