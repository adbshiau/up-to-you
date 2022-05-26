import React, {useState} from 'react';
import { Grid } from 'semantic-ui-react'
import PageHeader from '../../components/PageHeader/PageHeader';
import Loader from '../../components/Loader/Loader';
import SearchField from '../../components/SearchField/SearchField';
import SearchResults from '../../components/SearchResults/SearchResults';
import yelpService from '../../utils/yelpService';


export default function SearchPage({user, handleLogout, handleClick}) {

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
      
      <SearchResults results={searchResults} handleClick={handleClick}/>
    </>
  )
}