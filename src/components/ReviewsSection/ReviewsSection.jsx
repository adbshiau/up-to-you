import React, { useState } from "react";
import { Card, Image, Button, Icon } from "semantic-ui-react";
import "./ReviewsSection.css";
import * as reviewAPI from "../../utils/reviewApi";

export default function ReviewsSection({ business }) {
  const [reviews, setReviews] = useState(business.reviews);

  async function deleteReview(reviewId) {
      try {
        const data = await reviewAPI.deleteReview(reviewId);
        console.log(data, 'response from the server when removeing a review')
        setReviews(business.reviews);
      } catch (err) {
        console.log(err, 'err from the deleteReview function')
      }
  }
  

  if (business.reviews.length) {
    return (
      <>
        <h1>There's reviews!</h1>
        <Card.Group>
          <Card>
            {reviews.map((review) => (
              <Card.Content>
                <Card.Header>{review.username}</Card.Header>
                <Card.Meta>Rating: {review.stars} out of 5 </Card.Meta>
                <Card.Description>{review.text}</Card.Description>
                <Image src={review.photoUrl} wrapped ui={true} size="large" />
                <Button icon onClick={() => deleteReview(review._id)}>
                  <Icon name="trash alternate outline" />
                </Button>
              </Card.Content>
            ))}
          </Card>
        </Card.Group>
      </>
    );
  }
  return <h1>Leave a review!</h1>;
}
