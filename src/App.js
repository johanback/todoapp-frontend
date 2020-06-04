import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Sidebar from './Components/Sidebar/Sidebar';
import ToDoView from './Components/ToDoView/ToDoView'
import { Container, Row, Col } from 'react-bootstrap';

function App() {

  const [activeList, setActiveList] = useState([]);

  return (
    <Container className="pagewrapper">
      <Row>
        <Col md={2} className="sidebar">
          <Sidebar setActiveList={setActiveList} />
          <span className="copyright">
            ©Johan Back 2020
          </span>
        </Col>
        <Col md={10} className="mainview">
          <ToDoView activeList={activeList} />
        </Col>
      </Row>

    </Container>
  )

}

export default App;
