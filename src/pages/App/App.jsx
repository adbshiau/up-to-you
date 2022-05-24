import React, { useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import SearchPage from "../SearchPage/SearchPage";
import ProfilePage from "../ProfilePage/ProfilePage";
import RandomPage from "../RandomPage/RandomPage";
import BusinessPage from "../BusinessPage/BusinessPage";
import HomePage from "../HomePage/HomePage";
import userService from "../../utils/userService";
import yelpService from "../../utils/yelpService";

function App() {
  const [user, setUser] = useState(userService.getUser()); // getUser decodes our JWT token, into a javascript object
  // this object corresponds to the jwt payload which is defined in the server signup or login function that looks like
  // this  const token = createJWT(user); // where user was the document we created from mongo

  const [searchResults, setSearchResults] = useState([]);
  const [business, setBusiness] = useState({})

  function handleSignUpOrLogin() {
    setUser(userService.getUser()); // getting the user from localstorage decoding the jwt
  }

  function handleLogout() {
    userService.logout();
    setUser(null);
  }

  function handleClick(data) {
    setBusiness(data);
  }

  async function handleSearch(data) {
    const results = await yelpService.search(data);
    setSearchResults(results.businesses);
  }

  if (user) {
    return (
      <Routes>
        <Route
          path="/search"
          element={
            <SearchPage
              user={user}
              handleLogout={handleLogout}
              results={searchResults}
            />
          }
        />
        <Route
          path="/home"
          element={
            <HomePage
              user={user}
              handleLogout={handleLogout}
              handleSearch={handleSearch}
              results={searchResults}
              handleClick={handleClick}
            />
          }
        />
        <Route
          path="/login"
          element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route
          path="/signup"
          element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
        />
        <Route
          path="/:username"
          element={<ProfilePage user={user} handleLogout={handleLogout} />}
        />
        <Route
          path="/random"
          element={
            <RandomPage
              user={user}
              handleLogout={handleLogout}
              handleSearch={handleSearch}
            />}
        />
        <Route
          path="/businesses/:id"
          element={
          <BusinessPage 
          user={user} 
          handleLogout={handleLogout} 
          business={business}/>}
        />
      </Routes>
    );
  }

  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route
        path="/signup"
        element={<SignupPage handleSignUpOrLogin={handleSignUpOrLogin} />}
      />
      <Route path="/*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
