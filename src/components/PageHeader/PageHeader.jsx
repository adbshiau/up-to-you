import React, { useState } from "react";
import { Dropdown, Icon, Menu, Image } from "semantic-ui-react";
import { Link } from "react-router-dom";
import "./PageHeader.css";

export default function PageHeader({ user, handleLogout }) {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const style = {
    backgroundColor: "#82ace6",
    color: "white",
    fontFamily: "Balsamiq Sans",
  };

  return (
      <Menu fixed="top" inverted borderless style={style} className={click ? 'active' : ''}>
        <div className="menu-icon" onClick={handleClick}>
            <Icon name={click ? "close" : "bars"} />
        </div>
        <Menu.Item as="a" header>
          <Image
            size="mini"
            style={{ marginRight: "1em" }}
            src="https://i.pinimg.com/originals/3e/c7/c4/3ec7c4ce95243e371f7e7469bdc5a518.png"
          />
          <Link to="/home" onClick={closeMobileMenu}>Up To You</Link>
        </Menu.Item>
        <Menu.Menu className={click ? 'active' : ''}>
        <Menu.Item>
          <Link to="/random" onClick={closeMobileMenu}>Random</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/search" onClick={closeMobileMenu}>Search</Link>
        </Menu.Item>
        <Menu.Item>
          <Link to="/history" onClick={closeMobileMenu}>History</Link>
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
              <Link to={`/${user?.username}`} style={{ color: "black" }} onClick={closeMobileMenu}>
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
