import React, { useState, useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import SignupPage from "../SignupPage/SignupPage";
import LoginPage from "../LoginPage/LoginPage";
import SearchPage from "../SearchPage/SearchPage";
import ProfilePage from "../ProfilePage/ProfilePage";
import RandomPage from "../RandomPage/RandomPage";
import BusinessPage from "../BusinessPage/BusinessPage";
import HomePage from "../HomePage/HomePage";
import HistoryPage from "../HistoryPage/HistoryPage";
import userService from "../../utils/userService";
import * as businessAPI from "../../utils/businessApi";

function App() {
  const [user, setUser] = useState(userService.getUser()); // getUser decodes our JWT token, into a javascript object
  // this object corresponds to the jwt payload which is defined in the server signup or login function that looks like
  // this  const token = createJWT(user); // where user was the document we created from mongo

  const [business, setBusiness] = useState();

  const navigate = useNavigate();

  function handleSignUpOrLogin() {
    setUser(userService.getUser()); // getting the user from localstorage decoding the jwt
  }

  function handleLogout() {
    userService.logout();
    setUser(null);
  }

  async function showProfile(businessId) {
    const data = await businessAPI.show(businessId);
    setBusiness(data);
    navigate(`/businesses/${businessId}`);
  }

  if (user) {
    return (
      <Routes>
        <Route
          path="/home"
          element={
            <HomePage
              user={user}
              handleLogout={handleLogout}
              showProfile={showProfile}
              onHome={true}
            />
          }
        />
        <Route
          path="/search"
          element={
            <SearchPage
              user={user}
              handleLogout={handleLogout}
              showProfile={showProfile}
              onHome={false}
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
          element={
            <ProfilePage
              user={user}
              handleLogout={handleLogout}
              showProfile={showProfile}
              onHome={true}
            />
          }
        />
        <Route
          path="/random"
          element={
            <RandomPage
              user={user}
              handleLogout={handleLogout}
              showProfile={showProfile}
              onHome={false}
            />
          }
        />
        <Route
          path="/businesses/:id"
          element={
            <BusinessPage
              user={user}
              handleLogout={handleLogout}
              business={business}
              showProfile={showProfile}
            />
          }
        />
        <Route
          path="/history"
          element={
            <HistoryPage
              user={user}
              handleLogout={handleLogout}
              showProfile={showProfile}
            />
          }
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
