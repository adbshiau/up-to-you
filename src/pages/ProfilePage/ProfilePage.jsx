import React, { useEffect, useState } from "react";
import { Grid, Header, Image, Container, Segment } from "semantic-ui-react";
import PageHeader from "../../components/PageHeader/PageHeader";
import SearchItem from "../../components/SearchItem/SearchItem";
import Loader from "../../components/Loader/Loader";
import * as businessAPI from "../../utils/businessApi";

export default function ProfilePage({ user, handleLogout, showProfile }) {
  const [businesses, setBusinesses] = useState();
  const [loading, setLoading] = useState(false);

  async function allFavorites() {
    const data = await businessAPI.get();
    console.log(data, "allFavorites");
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

  useEffect(() => {
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

        <Header>Favorites</Header>
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
      </Container>
    </div>
  );
}
