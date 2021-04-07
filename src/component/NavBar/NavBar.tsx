import React from "react";

import { Container, Header, Link, Links, Nav } from "./NavBarElement";
import { privateRoutes, publicRoutes } from "../../routes";

const NavBar = () => {
  const user = false;

  return (
    <Header>
      <Container>
        <Links>
          {user
            ? privateRoutes.map(({ path, name, id }) => (
                <Link key={id}>
                  <Nav to={path}>{name}</Nav>
                </Link>
              ))
            : publicRoutes.map(({ path, name, id }) => (
                <Link key={id}>
                  <Nav to={path}>{name}</Nav>
                </Link>
              ))}
        </Links>
      </Container>
    </Header>
  );
};

export default NavBar;
