import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react';

export default function SearchItem({ result, handleClick }) {

    return (
        <>
        <Image src={result.image_url} wrapped ui={false} size='small' />
        <Card.Content>
        <Link to={`/businesses/${result.id}`} result={result} onClick={() => handleClick(result)}>
            <Card.Header content={result.name}/>
            <Card.Meta>{result.price}</Card.Meta>
            <Card.Description>{result.location.display_address}</Card.Description>
        </Link>
        </Card.Content>
        </>
    )
}