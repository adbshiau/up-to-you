import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Form, Grid } from "semantic-ui-react";
import PageHeader from "../../components/PageHeader/PageHeader";
import AddReviewForm from "../../components/AddReviewForm/AddReviewForm";
import * as businessAPI from "../../utils/businessApi";
import * as reviewAPI from "../../utils/reviewApi";

export default function BusinessPage({ user, handleLogout, business }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  async function handleAddBusiness() {
    const categories = [];
    business.categories.forEach((element) => categories.push(element.title));
    const item = {
      yelpId: business.id,
      name: business.name,
      url: business.url,
      image_url: business.image_url,
      categories: categories,
      rating: business.rating,
      price: business.price,
      location: business.location.display_address,
      phone: business.phone,
      is_closed: business.is_closed,
    };
    try {
      setLoading(true);
      const data = await businessAPI.create(item);
      navigate("/home");
    } catch (err) {
      console.log(err);
      setError(err.message);
    }
  }

  async function getBusiness() {
    try {
      const data = await businessAPI.show();
      console.log(data, "data in homepage");
    } catch (err) {
      console.log(err, "getBusiness error");
    }
  }

  function handleClick() {
    window.location.assign(business.url);
  }

  async function handleAddReview(review) {
    setLoading(true);
    console.log(review, 'handleAddReview')
    console.log(business._id, 'business id')
    const data = await reviewAPI.create(review, business._id)
    
  }

  useEffect(() => {
    getBusiness();
  }, []);

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
      <button onClick={handleClick}>Yelp Link</button>
      <img src={business.image_url} />
      <AddReviewForm user={user} handleAddReview={handleAddReview}/>
    </>
  );
}
