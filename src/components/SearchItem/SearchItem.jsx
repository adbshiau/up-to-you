import React from 'react';
import { Card, Image } from 'semantic-ui-react';

export default function SearchItem({result}) {
    return (
        <>
        <Image src={result.image_url} wrapped ui={false} size='small' />
        <Card.Content>
            <Card.Header content={result.name}/>
            <Card.Meta>{result.price}</Card.Meta>
            <Card.Description>{result.location.display_address}</Card.Description>
        </Card.Content>
        </>
    )
}