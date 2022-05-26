import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Container, Image, Header, Label, Icon } from "semantic-ui-react";
import "./BusinessPage.css";
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

      <Container id="business-page" style={{ marginTop: "7em" }}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={8}>
              <Image src={business.image_url} size="large" wrapped={false}/>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header id="business-page" as='h1'>{business.name}</Header>
              <p>{business.rating} <Icon color='yellow' name='star'/> {business.price}</p>
              {business.categories.map((item) => <Label size='mini'>{item}</Label>)}
              <p style={{ paddingTop: '10px'}}>{business.location.join(', ')}</p>
              <a href={business.url}>Visit Yelp Page</a>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row style={{ justifyContent: 'center'}}>
              <Grid.Column width={8}>
                <h3 id="business-page">Leave a review!</h3>
                <AddReviewForm user={user} handleAddReview={handleAddReview} />
              </Grid.Column>
              <Grid.Column width={7}>
                <ReviewsSection reviews={reviews} setReviews={setReviews} user={user} />
              </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
  );
}
