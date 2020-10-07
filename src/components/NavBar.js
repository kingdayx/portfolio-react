import React, { useState, useEffect } from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav } from "react-bootstrap";
import { motion } from "framer-motion";

function debounce(fn, ms) {
  let timer;
  return (_) => {
    clearTimeout(timer);
    timer = setTimeout((_) => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
}

export default function Header() {
  const [dimensions, setDimensions] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [about, setAbout] = useState(false);
  const [home, setHome] = useState(false);
  const [open, setOpen] = useState(false);

  const iconVariants = {
    opened: { rotate: 45, scale: 2 },
    closed: { rotate: 0, scale: 1 },
  };
  const menuVariants = {
    opened: { top: 0 },
    closed: { top: "-90vh" },
  };

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

  const debouncedHandleResize = debounce(function handleResize() {
    const offset = window.innerWidth;
    if (offset < 601) {
      setDimensions(true);
    } else {
      setDimensions(false);
    }
  }, 1000);

  // const handleScrollPortfolio = () => {
  //   const offset = window.scrollY;
  //   if (offset > 783) {
  //     setAbout(true);
  //   } else {
  //     setAbout(false);
  //   }
  // };
  // const handleScrollContact = () => {
  //   const offset = window.scrollY;
  //   if (offset > 783) {
  //     setAbout(true);
  //   } else {
  //     setAbout(false);
  //   }
  // };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollAbout);
    window.addEventListener("scroll", handleScrollHome);
    window.addEventListener("resize", debouncedHandleResize);
    return (_) => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  });
  let x = ["nav"];
  if (scrolled) {
    x.push("scrolled");
  }
  let xx = ["item", "items"];
  if (about) {
    xx.pop();
    xx.push("scrollColor");
  }
  let xxx = ["item", "items"];
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
  const scrollToAbout = () => {
    window.scrollTo({
      top: 833,
      behavior: "smooth",
    });
  };

  return (
    <div className={dimensions ? "navView" : x.join(" ")}>
      <motion.svg
        variants={iconVariants}
        animate={open ? "opened" : "closed"}
        initial={false}
        onClick={() => setOpen((state) => !state)}
        className={dimensions ? "plus" : ""}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z"
          fill="currentColor"
        />
      </motion.svg>
      <motion.Nav
        initial={false}
        variants={menuVariants}
        animate={open ? "opened" : "closed"}
        defaultActiveKey="/home"
        as="ul"
        className={dimensions ? "navi1" : "navi"}
      >
        <Nav.Item as="li">
          <Nav.Link className={xxx.join(" ")} onClick={scrollToTop}>
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link
            eventKey="link-1"
            className={xx.join(" ")}
            onClick={scrollToAbout}
          >
            About
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-2" className="item items">
            Portfolio
          </Nav.Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Nav.Link eventKey="link-3" className="item1 items">
            Contact
          </Nav.Link>
        </Nav.Item>
      </motion.Nav>
    </div>
  );
}
