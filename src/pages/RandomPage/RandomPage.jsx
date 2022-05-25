import React from "react";
import { Link } from 'react-router-dom';
import { Grid, Image, Card } from "semantic-ui-react";
import PageHeader from "../../components/PageHeader/PageHeader";
import SearchField from "../../components/SearchField/SearchField";
import SearchResults from "../../components/SearchResults/SearchResults";

export default function RandomPage({ user, handleLogout, handleRandomSearch, business }) {
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
            <h1>Random Page</h1>
            </Grid.Column>
        </Grid.Row>
      </Grid>
      <h1>Random Page</h1>
      <SearchField handleSearch={handleRandomSearch}/>
        <Image src={business?.image_url} wrapped ui={false} size='tiny' />
        <Card.Content>
        
            <Card.Header content={business?.name}/>
            <Card.Meta>{business?.price}</Card.Meta>
            <Card.Description>{business?.location.display_address}</Card.Description>
        
        </Card.Content>
    </>
  );
}