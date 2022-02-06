import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { useRouter } from "next/router";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Container,
} from "reactstrap";
import logo from "../../assets/images/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="topbar" id="top">
      <div className="header6">
        <Container className="po-relative">
          <Navbar
            className="navbar-expand-lg h6-nav-bar"
            fixed="top"
            style={{
              backgroundColor: "#000",
              padding: "0 40px",
            }}
          >
            <NavbarBrand>
              <Link href="/">
                <a>
                  <Image src={logo} alt="doa-cariri" width={80} height={60} />
                </a>
              </Link>
            </NavbarBrand>
            <NavbarToggler onClick={toggle}>
              <span className="ti-menu"></span>
            </NavbarToggler>
            <Collapse
              isOpen={isOpen}
              navbar
              className="hover-dropdown ml-auto"
              id="h6-info"
            ></Collapse>
          </Navbar>
        </Container>
      </div>
    </div>
  );
};

export default Header;
