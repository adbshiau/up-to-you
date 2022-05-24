import React from "react";
import { Grid, Header, Image } from "semantic-ui-react";
import PageHeader from "../../components/PageHeader/PageHeader";

export default function ProfilePage({ user, handleLogout }) {
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
            <Header as='h1' style={{paddingTop: '50px'}}>
              <Image circular src={user.photoUrl} />
              {user.username}
            </Header>
            {user.location}
            {user.bio}
            </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}
