import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Grid } from "semantic-ui-react";
import PageHeader from "../../components/PageHeader/PageHeader";
import SearchItem from "../../components/SearchItem/SearchItem";
import AddReviewForm from "../../components/AddReviewForm/AddReviewForm";
import ReviewsSection from "../../components/ReviewsSection/ReviewsSection";
import * as reviewAPI from "../../utils/reviewApi";

export default function BusinessPage({ user, handleLogout, business, showProfile }) {
  
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
    await setReviews(data.reviews)
    showProfile(business._id);
    setLoading(false);
  }

    useEffect(() => {
    }, [reviews]);

  return (
    <Grid>
      <Grid.Row>
          <Grid.Column>
          <PageHeader user={user} handleLogout={handleLogout} />
          </Grid.Column>
      </Grid.Row>
      <Grid.Row>
          <Grid.Column>
              <SearchItem result={business} />
          </Grid.Column>
      </Grid.Row>
      <Grid.Row>
          <Grid.Column>
                <AddReviewForm user={user} handleAddReview={handleAddReview} />
          </Grid.Column>
      </Grid.Row>
      <Grid.Row>
          <Grid.Column>
                <ReviewsSection reviews={reviews} setReviews={setReviews}/>
          </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
