import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Header, Image } from "semantic-ui-react";
import "./HomePage.css";
import PageHeader from "../../components/PageHeader/PageHeader";
import SearchItem from "../../components/SearchItem/SearchItem";
import * as businessAPI from "../../utils/businessApi";

export default function HomePage({ user, handleLogout, showProfile }) {
  const [businesses, setBusinesses] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getBusinesses() {
    try {
      setLoading(true);
      const data = await businessAPI.getAll();
      setLoading(false);
      setBusinesses([...data.businesses]);
    } catch (err) {
      console.log(err, "getBusinesses error");
    }
  }

  async function removeBusiness(businessId) {
    try {
      setLoading(true);
      const data = await businessAPI.removeBusiness(businessId);
      setLoading(false);
      getBusinesses();
    } catch (err) {
      console.log(err, "removeBusiness error");
    }
  }

  useEffect(() => {
    getBusinesses();
  }, []);

  return (
    <>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <PageHeader user={user} handleLogout={handleLogout} />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column></Grid.Column>
        </Grid.Row>
      </Grid>

      <h1>Home Page</h1>
      {businesses.map((item) => {
        return (
          <SearchItem
            result={item}
            removeBusiness={removeBusiness}
            showProfile={showProfile}
          />
        );
      })}
    </>
  );
}
