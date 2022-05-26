import React from "react";
import { Image, Button, Rating, Comment } from "semantic-ui-react";

export default function ReviewItem({ review, deleteReview, user }) {
  const newDate = new Date(review.createdAt).toLocaleDateString("en-us");
  return (
    <>
      <Comment.Avatar src={user.photoUrl} />
      <Comment.Content>
        <Comment.Author>{review.username}</Comment.Author>
        <Comment.Metadata style={{ marginLeft: 0 }}>{newDate}</Comment.Metadata>
        <Comment.Text><Rating size='mini' icon='star' defaultRating={review.stars} maxRating={5}/></Comment.Text>
        <Comment.Text>{review.text}</Comment.Text>
        <Image src={review.photoUrl} wrapped ui={true} />
        <Button size='tiny' icon onClick={() => deleteReview(review._id)}>Delete</Button>
      </Comment.Content>
    </>
  );
}
