import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react';
import "./LoginPage.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";


export default function LoginPage({handleSignUpOrLogin}) {
  const [error, setError] = useState("");
  const [state, setState] = useState({
    email: "",
    password: ""
  });
  const navigate = useNavigate();

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await userService.login(state);
      handleSignUpOrLogin();
      navigate("/home");
    } catch(err) {
      console.log(err, 'error from login handleSubmit function');
      setError(err.message);
    }
  }

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
    <Grid.Column style={{ maxWidth: 400 }}>
      <Header as="h2" textAlign="center" style={{ fontFamily: 'Balsamiq Sans', color: '#82ace6' }}>
        <Image src="https://i.pinimg.com/originals/3e/c7/c4/3ec7c4ce95243e371f7e7469bdc5a518.png" />Log in to your account.
      </Header>
      <Form autoComplete="off" onSubmit={handleSubmit}>
      <Segment>
          <Form.Input
            type="email"
            name="email"
            placeholder="email"
            value={state.email}
            onChange={handleChange}
            required
          />
          <Form.Input
            name="password"
            type="password"
            placeholder="password"
            value={state.password}
            onChange={handleChange}
            required
          />
          
          <Button type="submit" className="btn" style={{ backgroundColor: '#ffe196', color: 'black'}}>
            Log In
          </Button>
          </Segment>
          <Segment>
            New to us? <Link style={{ color: '#82ace6', fontWeight: 'bold' }} to="/signup">Sign Up.</Link>
          </Segment>
        {error ? <ErrorMessage error={error} /> : null}
      </Form>
    </Grid.Column>
  </Grid>
  );
}
