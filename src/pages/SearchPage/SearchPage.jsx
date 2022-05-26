import React, { useState } from "react";
import { Container, Grid, Header } from "semantic-ui-react";
import PageHeader from "../../components/PageHeader/PageHeader";
import Loader from "../../components/Loader/Loader";
import SearchField from "../../components/SearchField/SearchField";
import SearchResults from "../../components/SearchResults/SearchResults";
import yelpService from "../../utils/yelpService";

export default function SearchPage({
  user,
  handleLogout,
  handleClick,
  showProfile,
}) {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);

  async function handleSearch(data) {
    setLoading(true);
    const results = await yelpService.search(data);
    setLoading(false);
    setSearchResults(results.businesses);
  }

  if (loading) {
    return (
      <>
        <PageHeader handleLogout={handleLogout} user={user} />
        <Loader />
      </>
    );
  }

  return (
    <>
      <Container>
        <PageHeader user={user} handleLogout={handleLogout} />
      </Container>

      <Grid style={{ marginTop: "7em" }}>
        <Grid.Row>
          <Grid.Column textAlign="center">
          <Header as='h1'>Search for local businesses.</Header>
            <SearchField handleSearch={handleSearch} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            {!searchResults.length ? ("") : (
              <SearchResults results={searchResults} showProfile={showProfile} />
            )}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}