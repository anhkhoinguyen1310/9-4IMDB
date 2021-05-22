import React, { useState } from 'react'
import {Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button, Container } from "react-bootstrap"
import {authActions} from '../redux/actions'

function AuthPage() {

  const { user } = useSelector((state) => state);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  const onSignUp = (e) => {
    e.preventDefault()
    dispatch(authActions.register(email, password))

  } 

  if (user.loading) return <h1>Registering.....</h1>;
  if (user.redirectToHomePage) return <Redirect to="/" />;

  return (
    <Container>
      <h1>Auth Page</h1>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button onClick = {onSignUp} variant="primary" type="submit">
          Submit
  </Button>
      </Form>
    </Container>
  )
}

export { AuthPage };
