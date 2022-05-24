import React from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import PageHeader from "../../components/PageHeader/PageHeader";


export default function HomePage({ user, handleLogout }) {
  return (
    <>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <PageHeader user={user} handleLogout={handleLogout} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column>
            
            </Grid.Column>
        </Grid.Row>
      </Grid>
      
      <h1>Home Page</h1>
    </>
  );
}
