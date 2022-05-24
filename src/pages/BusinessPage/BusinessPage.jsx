import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import PageHeader from "../../components/PageHeader/PageHeader";
import * as businessAPI from '../../utils/businessApi';

export default function BusinessPage({ user, handleLogout, business }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleAddBusiness() {
      const item = {
          'yelpId': business.id,
          'businessName': business.name,
          'yelpUrl': business.url,
          'imageUrl': business.image_url
      }
    try {
        setLoading(true);
        const data = await businessAPI.create(item);
        navigate('/home')
    } catch (err) {
        console.log(err);
        setError(err.message);
    }
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
          <Grid.Column></Grid.Column>
        </Grid.Row>
      </Grid>
      <h1>Business Page</h1>
      <h1>{business.name}</h1>
      <button onClick={handleAddBusiness}>Favorite</button>
      <h2>Rating: {business.rating} stars</h2>
      <h2>Price: {business.price}</h2>
      <img src={business.image_url} />
    </>
  );
}
