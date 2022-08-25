import React, { useEffect, useState } from "react";
import {
  Grid,
  Header,
  Image,
  Container,
  Segment,
  Icon,
} from "semantic-ui-react";
import "./ProfilePage.css";
import SearchItem from "../../components/SearchItem/SearchItem";
import Loader from "../../components/Loader/Loader";
import * as businessAPI from "../../utils/businessApi";
import * as reviewAPI from "../../utils/reviewApi";

export default function ProfilePage({
  user,
  handleLogout,
  showProfile,
  onHome,
}) {
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
    <div className="profile-page">
      <Container id="profile-bio">
        <Image id="profile-img" src={user.photoUrl} wrapped={true} />
        <div className="profile-stats">
          <div className="stats-reviews">
            <p id="stats-value">7</p>
            <p>Reviews</p>
          </div>
          <div className="stats-followers">
            <p id="stats-value">8</p>
            <p>Followers</p>
          </div>
          <div className="stats-following">
            <p id="stats-value">9</p>
            <p>Following</p>
          </div>
        </div>
      </Container>

      <Container id="profile-about-me">
        <h3>{user.username}</h3>
        <p><Icon name="map pin"/>{user.location}</p>
        <p><Icon name="comment alternate outline"/>{user.bio}</p>
      </Container>

      <Container>
        <Header id="profile-page">
          <Icon name="heart outline" />
          Favorites
        </Header>
        <Grid container columns={3} doubling stackable>
          <Grid.Column>
            {businesses?.map((item, key) => {
              return (
                <Segment>
                  <SearchItem
                    result={item}
                    removeBusiness={removeBusiness}
                    showProfile={showProfile}
                    onHome={onHome}
                  />
                </Segment>
              );
            })}
          </Grid.Column>
        </Grid>

        <Header id="profile-page">
          <Icon name="comment outline" />
          Reviews
        </Header>
      </Container>
    </div>
  );
}
