import React, { useState } from "react";
import { Dropdown, Icon, Menu, Container, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./PageHeader.css";

export default function PageHeader({ user, handleLogout }) {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const style = {
    backgroundColor: "#82ace6",
    color: "white",
    fontFamily: "Balsamiq Sans",
  };

  return (
      <Menu fixed="top" inverted borderless style={style} className={click ? 'active' : ''}>
        <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <Menu.Item as="a" header>
          <Image
            size="mini"
            style={{ marginRight: "1em" }}
            src="https://i.pinimg.com/originals/3e/c7/c4/3ec7c4ce95243e371f7e7469bdc5a518.png"
          />
          <Link to="/home">Up To You</Link>
        </Menu.Item>
        <Menu.Menu className={click ? 'active' : ''}>
        <Menu.Item>
          <Link to="/random">Random</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/search">Search</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/history">History</Link>
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
        </Menu.Item>
        </Menu.Menu>
      </Menu>
  );
}
