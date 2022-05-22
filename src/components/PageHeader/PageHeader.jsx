import React from "react";
import { Dropdown, Icon, Menu, Container, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function PageHeader({ user, handleLogout }) {
  console.log(user);
  const style = {
    padding: "10px",
    backgroundColor: "#d61e27",
    color: "white",
    fontFamily: "Balsamiq Sans",
  };

  return (
    <div>
      <Menu fixed="top" inverted borderless style={style}>
        <Container>
          <Menu.Item as="a" header>
            <Icon size="big" name="food" style={{ marginRight: "0.3em" }} />
            <Link to="/home">Up To You</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/login">Randomizer</Link>
          </Menu.Item>
          <Menu.Item>
            <Image
              src={
                user?.photoUrl
                  ? user?.photoUrl
                  : "https://react.semantic-ui.com/images/wireframe/square-image.png"
              }
              avatar
            ></Image>
          </Menu.Item>
          <Dropdown item simple text={user.username} floating="right">
            <Dropdown.Menu>
              <Dropdown.Item>
                <Link to={`/${user?.username}`} style={{ color: "black" }}>
                  Profile Page
                </Link>
              </Dropdown.Item>
              <Dropdown.Item>
                <Link to="/" style={{ color: "black" }} onClick={handleLogout}>
                  Logout
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Menu>
    </div>
  );
}
