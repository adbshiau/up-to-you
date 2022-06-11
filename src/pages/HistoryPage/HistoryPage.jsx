import React from 'react';
import { Container } from 'semantic-ui-react';
import PageHeader from "../../components/PageHeader/PageHeader";

export default function HistoryPage({user, handleLogout}) {
    return (
        <>
          <Container>
            <PageHeader user={user} handleLogout={handleLogout} />
          </Container>
    
          <h1>Hello?</h1>
        </>
      );
}