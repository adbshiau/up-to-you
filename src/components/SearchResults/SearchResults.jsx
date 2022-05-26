import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchItem from '../SearchItem/SearchItem';
import { Card, Grid, Button, Icon } from 'semantic-ui-react'

export default function SearchResults({results, showProfile}) {
    

    return (
        <Grid textAlign="center" style={{ height: "15vh" }} verticalAlign="middle">
        <Card.Group stackable centered>
            <Card>
            {results.map((item, key) => {
                return (
                    <SearchItem result={item} showProfile={showProfile}/>
                )
            })}
            </Card>
        </Card.Group>
        </Grid>
    )
}