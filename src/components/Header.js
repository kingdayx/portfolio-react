import React from "react";
import Button from "react-bootstrap/Button";
import "../App.css";

function Header() {
  const scrollToAbout = () => {
    window.scrollTo({
      top: 834,
      behavior: "smooth",
    });
  };
  return (
    <div className="header">
      <header className="App-header">
        <div className="name">
          <h1>
            Hello, I'm
            <a className="name1"> Elisha Day</a>.
          </h1>
        </div>
        <h1>I am a Blockchain Developer.</h1>
        <Button
          variant="outline-primary"
          className="view button"
          size="lg"
          onClick={scrollToAbout}
        >
          View my work <i className="fas fa-arrow-right rotate"></i>
        </Button>
      </header>
    </div>
  );
}

export default Header;
