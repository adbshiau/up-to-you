import React, { useState, useEffect } from "react";
import { Comment, Header } from "semantic-ui-react";
import "./ReviewsSection.css";
import ReviewItem from "../ReviewItem/ReviewItem";
import * as reviewAPI from "../../utils/reviewApi";

export default function ReviewsSection({ reviews, setReviews, user }) {
  async function deleteReview(reviewId) {
    try {
      const data = await reviewAPI.deleteReview(reviewId);
      await setReviews(data.reviews);
    } catch (err) {
      console.log(err, "err from the deleteReview function");
    }
  }

  useEffect(() => {}, [reviews]);

  if (reviews?.length) {
    return (
      <>
        <Comment.Group>
            <Header as='h3' id="business-page">Reviews:</Header>
          <Comment>
            {reviews.map((review, key) => (
              <ReviewItem review={review} deleteReview={deleteReview} user={user}/>
            ))}
          </Comment>
        </Comment.Group>
      </>
    );
  }
  return <h3>No reviews yet.</h3>;
}
