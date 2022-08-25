import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { Grid, Header } from "semantic-ui-react";
import './RandomPage.css';
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
            <Loader />
        );
    }

    if (result) {
        return (
            <>
            <Grid style={{ marginTop: "7em" }}>
                <Grid.Row>
                    <Grid.Column textAlign="center">
                        <Header as='h1' id='random-page'>Can't pick a place? Let the app decide!</Header>
                        <SearchField handleSearch={handleRandomSearch}/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column textAlign="center">
                        <SearchItem result={result} showProfile={showProfile} />
                    </Grid.Column>
                 </Grid.Row>
            </Grid>
            </>
        )
    }     
    return (
    <>
        <Grid style={{ marginTop: "7em" }}>
                <Grid.Row>
                    <Grid.Column textAlign="center">
                        <Header as='h1' id='random-page'>Can't pick a place? Let the app decide!</Header>
                        <SearchField handleSearch={handleRandomSearch}/>
                    </Grid.Column>
                </Grid.Row>
        </Grid>
    </>
  );
}