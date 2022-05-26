import React from "react";
import { Card, Image, Button, Icon } from "semantic-ui-react";

export default function ReviewItem({review, deleteReview}) {
  return (
    <Card.Content>
      <Card.Header>{review.username}</Card.Header>
      <Card.Meta>Rating: {review.stars} out of 5 </Card.Meta>
      <Card.Description>{review.text}</Card.Description>
      <Image src={review.photoUrl} wrapped ui={true} size="large" />
      <Button icon onClick={() => deleteReview(review._id)}>
        <Icon name="trash alternate outline" />
      </Button>
    </Card.Content>
  );
}
