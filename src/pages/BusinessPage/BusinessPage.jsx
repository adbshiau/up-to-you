import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Container } from "semantic-ui-react";
import './BusinessPage.css'
import PageHeader from "../../components/PageHeader/PageHeader";
import SearchItem from "../../components/SearchItem/SearchItem";
import AddReviewForm from "../../components/AddReviewForm/AddReviewForm";
import ReviewsSection from "../../components/ReviewsSection/ReviewsSection";
import * as reviewAPI from "../../utils/reviewApi";

export default function BusinessPage({
  user,
  handleLogout,
  business,
  showProfile,
}) {
  const [reviews, setReviews] = useState(business.reviews);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleLinkClick() {
    window.location.assign(business.url);
  }

  async function handleAddReview(review) {
    setLoading(true);
    const data = await reviewAPI.create(review, business._id);
    await setReviews(data.reviews);
    showProfile(business._id);
    setLoading(false);
  }

  useEffect(() => {}, [reviews]);

  return (
    <div>
      <Container>
        <PageHeader user={user} handleLogout={handleLogout} />
      </Container>

      <Container id='profile'style={{ marginTop: "7em" }}>
        <Grid>
          <Grid.Row>
            <SearchItem result={business} />
          </Grid.Row>

          <Grid.Row>
            <AddReviewForm user={user} handleAddReview={handleAddReview} />
          </Grid.Row>

          <Grid.Row>
            <ReviewsSection reviews={reviews} setReviews={setReviews} />
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
