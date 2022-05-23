import React, { useState } from "react";
import { Button, Form, Grid } from "semantic-ui-react";


export default function ({handleSearch}) {
  const [state, setState] = useState({
    term: "",
    location: "",
  });

  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }
  
  function handleSubmit(e) {
      e.preventDefault();
      
      handleSearch(state);
  }

  return (
    <Grid textAlign="center" style={{ height: "15vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 700 }}>
        <Form autoComplete="off" onSubmit={handleSubmit} >
          <Form.Group widths="equal">
            <Form.Input
              id="form-subcomponent-shorthand-input-term"
              name="term"
              value={state.term}
              placeholder="dumplings, tea, lunch, Chipotle"
              onChange={handleChange}
              required
            />
            <Form.Input
              id="form-subcomponent-shorthand-input-location"
              name="location"
              value={state.location}
              placeholder="Los Angeles, CA"
              onChange={handleChange}
            />
            <Button
              type="submit"
              className="btn"
              style={{ paddingRight: 10, paddingLeft: 17, backgroundColor: '#ffe196' }}
            >
              <i class="search icon"></i>
            </Button>
          </Form.Group>
        </Form>
      </Grid.Column>
    </Grid>
  );
}
