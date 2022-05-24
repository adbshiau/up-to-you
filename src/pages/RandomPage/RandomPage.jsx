import React from "react";
import { Grid } from "semantic-ui-react";
import PageHeader from "../../components/PageHeader/PageHeader";
import SearchField from "../../components/SearchField/SearchField";
import SearchResults from "../../components/SearchResults/SearchResults";

export default function RandomPage({ user, handleLogout, handleSearch }) {
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
      <SearchField handleSearch={handleSearch}/>
      
    </>
  );
}