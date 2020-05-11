import React, { Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Sidebar from './Components/Sidebar/Sidebar';
import ToDoView from './Components/ToDoView/ToDoView'
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <Container className="pagewrapper">
      <Row>
        <Col md={2} className="sidebar">
          <Sidebar />
        </Col>
        <Col md={10} className="mainview">
          <ToDoView />
        </Col>
      </Row>
    </Container>
  )

}

export default App;
