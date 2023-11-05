import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import styles from "./style.css";

export default function FormLogin(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const sendLogin = () => {
    setEmail()
  }
  return (
    <>
      <Container className='containerLogin'>
        <h3>{props.title}</h3>
        <Row>
          <Col sm={12} xs={12} md={12} lg={12}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </Form.Group>
          </Col>
          <Col sm={12} xs={12} md={12} lg={12}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
          </Col>
          <Col sm={12} xs={12} md={12} lg={12}>
            <Button className='btnLogar'>Entrar</Button>
          </Col>
        </Row>
        <h6>Email: {email}</h6>
        <h6>Password: {password}</h6>
      </Container >
    </>

  )
}