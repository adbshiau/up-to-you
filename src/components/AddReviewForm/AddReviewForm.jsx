import React, { useState } from "react";
import { Button, Form, Grid, Segment, Message } from "semantic-ui-react";

export default function AddReviewForm({handleAddReview}) {
  const [selectedFile, setSelectedFile] = useState("");
  const [review, setReview] = useState({
    text: "",
    stars: "",
  });

  function handleFileInput(e) {
    setSelectedFile(e.target.files[0]);
  }

  function handleChange(e) {
    setReview({
      ...review,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData()
    formData.append('photo', selectedFile)
    formData.append('text', review.text)
    formData.append('stars', review.stars)

    handleAddReview(formData);
  }

  return (
    <Grid style={{ height: "25vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        
          <Form autoComplete="off" onSubmit={handleSubmit}>
            <Form.TextArea
              className="form-control"
              name="text"
              value={review.text}
              placeholder="How was your visit?"
              onChange={handleChange}
              required
            />
            <Form.Input
              className="form-control"
              name="stars"
              type='number'
              value={review.stars}
              placeholder="Stars (1-5)"
              min={1}
              max={5}
              onChange={handleChange}
              required
            />
            <Form.Input
              className="form-control"
              type="file"
              name="photo"
              placeholder="Upload image."
              onChange={handleFileInput}
            />
            <Message
            success
            header='Success'
            content='Thank you for leaving a review!' 
            />
            <Button type="submit" size='tiny' floated='left' style={{ backgroundColor: "#ffe196", color: "black" }}>
              Add Review
            </Button>
          </Form>
        
      </Grid.Column>
    </Grid>
  );
}
