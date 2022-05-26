import React from "react";
import { Card, Image, Button, Icon, Comment } from "semantic-ui-react";

export default function ReviewItem({ review, deleteReview, user }) {
  const newDate = new Date(review.createdAt).toLocaleDateString("en-us");
  return (
    <>
      <Comment.Avatar src={user.photoUrl} />
      <Comment.Content>
        <Comment.Author>{review.username}</Comment.Author>
        <Comment.Metadata style={{ marginLeft: 0 }}>{newDate}</Comment.Metadata>
        <Comment.Metadata><Icon name='star' color='yellow'/> {review.stars} stars</Comment.Metadata>
        <Comment.Text>{review.text}</Comment.Text>
        <Image src={review.photoUrl} wrapped ui={true} />
        <Button size='tiny' icon onClick={() => deleteReview(review._id)}>Delete</Button>
      </Comment.Content>
      
      
      
    </>
  );
}
