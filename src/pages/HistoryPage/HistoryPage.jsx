import React from "react";
import { Container, Grid, Header } from "semantic-ui-react";
import "./HistoryPage.css";
import PageHeader from "../../components/PageHeader/PageHeader";

export default function HistoryPage({ user, handleLogout }) {
  return (
    <>
      <Container>
        <PageHeader user={user} handleLogout={handleLogout} />
      </Container>

      <Grid>
        <Grid.Row>
          <Grid.Column textAlign="left">
            <Header as="h3" id="history-page">
              Recently viewed businesses:
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  );
}
