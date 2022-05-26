import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Header, Image, Container, Card } from "semantic-ui-react";
import "./HomePage.css";
import PageHeader from "../../components/PageHeader/PageHeader";
import SearchItem from "../../components/SearchItem/SearchItem";
import * as businessAPI from "../../utils/businessApi";

export default function HomePage({ user, handleLogout, showProfile }) {
  const [businesses, setBusinesses] = useState([]);
  const [business, setBusiness] = useState();
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
      <Container>
        <PageHeader user={user} handleLogout={handleLogout} />
      </Container>

      <Container id="home" style={{ marginTop: "7em" }}>
        <Grid>
          <Grid.Row>
              <Card>
                {businesses.map((item, key) => {
                  return (
                    <SearchItem
                      onClick={() => {}}
                      result={item}
                      removeBusiness={removeBusiness}
                      showProfile={showProfile}
                    />
                  );
                })}
              </Card>
          </Grid.Row>
        </Grid>
      </Container>
    </>
  );
}
