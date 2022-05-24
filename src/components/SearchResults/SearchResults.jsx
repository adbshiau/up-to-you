import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchItem from '../SearchItem/SearchItem';
import { Card, Grid } from 'semantic-ui-react'

export default function SearchResults({results, handleClick}) {
    

    return (
        <Grid textAlign="center" style={{ height: "15vh" }} verticalAlign="middle">
        
        <Card.Group stackable centered>
            <Card>
            {results.map((item) => {
                return (
                    <SearchItem result={item} handleClick={handleClick}/>
                )
            })}
            </Card>
        </Card.Group>
        
        </Grid>
    )
}