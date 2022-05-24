import React, {useState} from 'react';
import { Grid } from 'semantic-ui-react'
import PageHeader from '../../components/PageHeader/PageHeader';
import SearchField from '../../components/SearchField/SearchField';
import SearchResults from '../../components/SearchResults/SearchResults';


export default function HomePage({user, handleLogout, handleSearch, results, handleClick}) {
   

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
            <h1>Home Page</h1>
            </Grid.Column>
        </Grid.Row>
      </Grid>

      <h1>Search Page</h1>
      
      <SearchField handleSearch={handleSearch} />
      
      <SearchResults results={results} handleClick={handleClick}/>
    </>
    )
}