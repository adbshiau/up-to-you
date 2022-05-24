import React from 'react';
import SearchItem from '../SearchItem/SearchItem';
import { Card, Grid } from 'semantic-ui-react'

export default function SearchResults({results}) {
    return (
        <Grid textAlign="center" style={{ height: "15vh" }} verticalAlign="middle">
        
        <Card.Group stackable centered>
            <Card>
            {results.map((item) => {
                return (
                    <SearchItem result={item}/>
                )
            })}
            </Card>
        </Card.Group>
        
        </Grid>
    )
}