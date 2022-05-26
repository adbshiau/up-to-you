import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Grid, Image, Card } from "semantic-ui-react";
import PageHeader from "../../components/PageHeader/PageHeader";
import SearchField from "../../components/SearchField/SearchField";
import SearchResults from "../../components/SearchResults/SearchResults";
import yelpService from "../../utils/yelpService";

export default function RandomPage({ user, handleLogout }) {
    
    const [result, setResult] = useState()
    
    async function handleRandomSearch(data) {
        const result = await yelpService.randomSearch(data);
        console.log(result, 'handleRandomSearch')
        setResult(result);
    }
    if (result) {
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
                <Image src={result.image_url} wrapped ui={false} size='tiny' />
                <Card.Content>
                
                    <Card.Header content={result.name}/>
                    <Card.Meta>{result.price}</Card.Meta>
                    <Card.Description>{result.location.display_address}</Card.Description>
                
                </Card.Content>
            </>
        )
    }     
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
    </>
  );
}