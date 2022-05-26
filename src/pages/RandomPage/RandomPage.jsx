import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Grid, Image, Card } from "semantic-ui-react";
import PageHeader from "../../components/PageHeader/PageHeader";
import SearchField from "../../components/SearchField/SearchField";
import SearchItem from "../../components/SearchItem/SearchItem";
import Loader from '../../components/Loader/Loader';
import yelpService from "../../utils/yelpService";

export default function RandomPage({ user, handleLogout, showProfile }) {

    const [result, setResult] = useState();
    const [loading, setLoading] = useState(false);
    
    async function handleRandomSearch(data) {
        setLoading(true);
        const result = await yelpService.randomSearch(data);
        setLoading(false);
        setResult(result);
    }

    if (loading) {
        return (
          <>
            <PageHeader handleLogout={handleLogout} user={user} />
            <Loader />
          </>
        );
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
                <SearchItem result={result} showProfile={showProfile}/>
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