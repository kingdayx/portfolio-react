import React, { useState, useEffect } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [about, setAbout] = useState(false);
  const [home, setHome] = useState(false);
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 833) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  const handleScrollAbout = () => {
    const offset = window.scrollY;
    if (offset > 783) {
      setAbout(true);
    } else {
      setAbout(false);
    }
  };
  const handleScrollHome = () => {
    const offset = window.scrollY;
    if (offset < 783) {
      setHome(true);
    } else {
      setHome(false);
    }
  };
  const handleScrollPortfolio = () => {
    const offset = window.scrollY;
    if (offset > 783) {
      setAbout(true);
    } else {
      setAbout(false);
    }
  };
  const handleScrollContact = () => {
    const offset = window.scrollY;
    if (offset > 783) {
      setAbout(true);
    } else {
      setAbout(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollAbout);
    window.addEventListener("scroll", handleScrollHome);
  });
  let x = ["nav"];
  if (scrolled) {
    x.push("scrolled");
  }
  let xx = ["items"];
  if (about) {
    xx.pop();
    xx.push("scrollColor");
  }
  let xxx = ["items"];
  if (home) {
    xxx.pop();
    xxx.push("scrollColor");
  }
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className={x.join(" ")}>
      <Nav defaultActiveKey="/home" as="ul" className="navi">
        <Nav.Item as="li">
          <Nav.Link className={xxx.join(" ")} onClick={scrollToTop}>
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-1" className={xx.join(" ")}>
            About
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2" className="items">
            Portfolio
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2" className="items">
            Contact
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}
