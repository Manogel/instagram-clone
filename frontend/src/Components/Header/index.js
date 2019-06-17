import React from "react";
import { Link } from "react-router-dom";

import { Container, Headeer, Logo, Camera } from "./styles";
import logo from "../../assets/logo.svg";
import camera from "../../assets/camera.svg";

export default function Header() {
  return (
    <Headeer>
      <Container>
        <Link to="/">
          <Logo src={logo} />
        </Link>
        <Link to="/new">
          <Camera src={camera} />
        </Link>
      </Container>
    </Headeer>
  );
}
