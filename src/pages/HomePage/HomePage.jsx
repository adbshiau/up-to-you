import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Grid, Header, Image } from "semantic-ui-react";
import "./HomePage.css";
import PageHeader from "../../components/PageHeader/PageHeader";
import * as businessAPI from '../../utils/businessApi';


export default function HomePage({ user, handleLogout, handleClick }) {
    
    const [businesses, setBusinesses] = useState([]);

    async function getBusinesses() {
        try {
            const data = await businessAPI.getAll();
            console.log(data, 'data in homepage')
            setBusinesses([...data.businesses])
        } catch(err) {
            console.log(err, 'getBusinesses error')
        }
    }

    async function removeBusiness(businessId) {
        try {
            const data = await businessAPI.removeBusiness(businessId);
            console.log(data, 'response from the server when removing a business');
            getBusinesses();
        } catch(err) {
            console.log(err, 'err from removeBusiness function')
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
            <Grid.Column>
            
            </Grid.Column>
        </Grid.Row>
      </Grid>
      
      <h1>Home Page</h1>
      {businesses.map((item) => {
                return (
                    <>
                    <h1>{item.name}</h1>
                    <img id='test' src={item.image_url}/>
                    <button onClick={() => removeBusiness(item._id)}>Delete</button>
                    <Link to={`/businesses/${item._id}`}><button onClick={() => handleClick(item)}>View Business</button></Link>
                    </>
                )
            })}
    </>
  );
}
