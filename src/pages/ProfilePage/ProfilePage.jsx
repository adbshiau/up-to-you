import React, { useEffect, useState } from "react";
import { Grid, Header, Image, Container, Segment, Icon } from "semantic-ui-react";
import PageHeader from "../../components/PageHeader/PageHeader";
import SearchItem from "../../components/SearchItem/SearchItem";
import Loader from "../../components/Loader/Loader";
import * as businessAPI from "../../utils/businessApi";
import * as reviewAPI from "../../utils/reviewApi";

export default function ProfilePage({ user, handleLogout, showProfile }) {
  const [businesses, setBusinesses] = useState();
  const [loading, setLoading] = useState(false);

  async function allFavorites() {
    const data = await businessAPI.get();
    await setBusinesses(data);
  }

  async function removeBusiness(businessId) {
    try {
      setLoading(true);
      const data = await businessAPI.removeBusiness(businessId);
      allFavorites();
      setLoading(false);
    } catch (err) {
      console.log(err, "removeBusiness error");
    }
  }

  // async function allReviews() {
  //   const data = await reviewAPI.index(user._id);
  //   console.log(data, 'all reviews')
  // }

  useEffect(() => {
    // allReviews();
    allFavorites();
  }, []);

  return (
    <div>
      <Container>
        <PageHeader user={user} handleLogout={handleLogout} />
      </Container>
      <Container text style={{ marginTop: "7em" }}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={5}>
              <Image src={user.photoUrl} wrapped={false} />
            </Grid.Column>
            <Grid.Column width={11} style={{ paddingLeft: 0 }}>
              <Header as="h1" style={{ paddingTop: "120px", marginBottom: 0 }}>
                {user.username}
              </Header>
              <Header as="h5" style={{ marginTop: 0, color: "gray" }}>
                {user.location}
              </Header>
              <p style={{ marginTop: 0 }}>{user.bio}</p>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Header><Icon name='heart outline' />Favorites</Header>
        <Segment>
          {businesses?.map((item, key) => {
            return (
              <SearchItem
                result={item}
                removeBusiness={removeBusiness}
                showProfile={showProfile}
              />
            );
          })}
        </Segment>

        <Header><Icon name='comment outline' />Reviews</Header>
        <Segment>
          
        </Segment>
      </Container>
    </div>
  );
}
