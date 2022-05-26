import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, Image, Button, Icon, Item } from "semantic-ui-react";
import './SearchItem.css';
import * as businessAPI from "../../utils/businessApi";

export default function SearchItem({
  result,
  removeBusiness,
  showProfile,
  onHome,
}) {
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
      showProfile(data._id);
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  }

  return (
    <Item className="search-item">
      <Item.Image src={result.image_url} wrapped ui={true} size="medium" onClick={() => showProfile(result._id)}/>
      <Item.Content>
        <Item.Header as="h3" style={{ marginBottom: 0, marginTop: '5px' }}>{result.name}</Item.Header>
        <Item.Description>{result.rating} <Icon color='yellow' name='star'/> {result.price}</Item.Description>
        <Item.Description style={{ paddingTop: "5px", paddingBottom: "5px" }}>{result.location.display_address[1]}</Item.Description>
        {onHome ? (
          ""
        ) : (
          <Button icon onClick={handleAddBusiness} size='mini'>
            <Icon name="heart" />
          </Button>
        )}
        <Button icon onClick={() => removeBusiness(result._id)} size='mini' style={{ backgroundColor: "#ffe196", color: "black" }}>
          Delete
        </Button>
      </Item.Content>
    </Item>
  );
}
