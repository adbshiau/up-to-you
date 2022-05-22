import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Grid, Header, Image, Segment } from 'semantic-ui-react';
import "./SignupPage.css";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import userService from "../../utils/userService";

export default function SignUpPage({handleSignUpOrLogin}) {
  const [error, setError] = useState("");
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    bio: "",
    location: ""
  });
  const [selectedFile, setSelectedFile] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  function handleFileInput(e) {
    // console.log(e.target.files);
    setSelectedFile(e.target.files[0]);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    formData.append('photo', selectedFile);

    for (let fieldName in state) {
      formData.append(fieldName, state[fieldName]);
    }

    try {
      await userService.signup(formData);
      handleSignUpOrLogin();
      navigate('/home');
    } catch(err) {
        console.log(err, 'error from signup handleSubmit function');
        setError(err.message);
    }
  }

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 400 }}>
        <Header as="h2" textAlign="center" style={{ fontFamily: 'Balsamiq Sans', color: '#82ace6' }}>
          <Image src="https://i.pinimg.com/originals/3e/c7/c4/3ec7c4ce95243e371f7e7469bdc5a518.png" />Sign Up
        </Header>
        <Form autoComplete="off" onSubmit={handleSubmit}>
          <Segment>
            <Form.Input
              name="username"
              placeholder="username"
              value={state.username}
              onChange={handleChange}
              required
            />
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
            <Form.Input
              name="confirmPassword"
              type="password"
              placeholder="confirm password"
              value={state.confirmPassword}
              onChange={handleChange}
              required
            />
            <Form.TextArea
              label="Tell us about yourself!"
              name="bio"
              placeholder="bio"
              onChange={handleChange}
            />
            <Form.Input
              name="location"
              placeholder="city"
              value={state.location}
              onChange={handleChange}
              required
            />
            <Form.Field>
              <Form.Input
                type="file"
                name="photo"
                placeholder="upload image"
                onChange={handleFileInput}
              />
            </Form.Field>
            <Button type="submit" className="btn" style={{ backgroundColor: '#ffe196', color: 'black'}}>
              Sign Up
            </Button>
          </Segment>
          {error ? <ErrorMessage error={error} /> : null}
        </Form>
      </Grid.Column>
    </Grid>
  );
}
