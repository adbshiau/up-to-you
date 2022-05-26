import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, Image, Button, Icon } from "semantic-ui-react";
import * as businessAPI from "../../utils/businessApi";

export default function SearchItem({ result, handleClick }) {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleAddBusiness() {
    const categories = [];
    result.categories.forEach((element) => categories.push(element.title));
    const item = {
      yelpId: result.id,
      name: result.name,
      url: result.url,
      image_url: result.image_url,
      categories: categories,
      rating: result.rating,
      price: result.price,
      location: result.location.display_address,
      phone: result.phone,
      is_closed: result.is_closed,
    };
    try {
      const data = await businessAPI.create(item);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  }
  
  return (
    <>
      <Image src={result.image_url} wrapped ui={false} size="small" />
      <Card.Content>
        <Card.Header content={result.name} />
        <Card.Meta>{result.price}</Card.Meta>
        <Card.Description>{result.location.display_address}</Card.Description>
        <Button icon onClick={handleAddBusiness}>
          <Icon name="heart" />
        </Button>
      </Card.Content>
    </>
  );
}
