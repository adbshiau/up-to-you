import React, { useState, useEffect } from "react";
import { Card, Image, Button, Icon } from "semantic-ui-react";
import "./ReviewsSection.css";
import ReviewItem from "../ReviewItem/ReviewItem";
import * as reviewAPI from "../../utils/reviewApi";

export default function ReviewsSection({reviews, setReviews }) {

  async function deleteReview(reviewId) {
    try {
      const data = await reviewAPI.deleteReview(reviewId);
      await setReviews(data.reviews)
    } catch (err) {
      console.log(err, "err from the deleteReview function");
    }
  }

  useEffect(() => {}, [reviews]);

  if (reviews?.length) {
    return (
      <>
        <h1>There's reviews!</h1>
        <Card.Group>
          <Card>
            {reviews.map((review, key) => (
              <ReviewItem review={review} deleteReview={deleteReview}/>
            ))}
          </Card>
        </Card.Group>
      </>
    );
  }
  return <h1>Leave a review!</h1>;
}
