import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Form, Button, Container } from "react-bootstrap";
import { authActions } from "../redux/actions";

function RegisterPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const { user } = useSelector((state) => state);
  const dispatch = useDispatch();

  const onRegister = (e) => {
    e.preventDefault();
    dispatch(authActions.register(name, email, password));
  };

  if (user.loading) return <h1>Registering.....</h1>;
  if (user.redirectToLoginPage) return <Redirect to="/login" />;

  return (
    <div className="cover"> 
      <Form  className= "landingForm">
        <Form.Group controlId="formBasicEmail">
          <Form.Label> Name</Form.Label>
          <Form.Control
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name "
          />
        </Form.Group>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button onClick={onRegister} variant="primary" type="submit">
          Create your IMDB account
        </Button>
        Already have an account?
        <Link to="/login">
          <Button variant="primary" size="sm" className="m-1">
            Sign-in
          </Button>
          </Link>
      </Form>
    </div>
  );
}

export { RegisterPage };
