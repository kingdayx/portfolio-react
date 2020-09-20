import React from "react";
import "../App.css";

export default function About() {
  return (
    <div>
      <div className="about">
        <div className="head">
          <h1>About</h1>
        </div>
        <hr />
        <div className="hexs">
          <div className="hex">
            <div className="hex1">
              <div className="container">
                <div className="tri1"></div>
                <div className="hexa">
                  <i className="fas fa-tachometer-alt icon fa-3x"></i>
                </div>
                <div className="tri2"></div>
              </div>
              <div className="fast">
                <h3 id="fastest">Fast</h3>
              </div>
              <div>
                <p className="para">
                  Fast load times and lag free interaction, my highest priority.
                </p>
              </div>
            </div>
            <div className="hex1">
              <div className="container">
                <div className="tri1"></div>
                <div className="hexa">
                  <i className="fas fa-laptop-code icon fa-3x"></i>
                </div>
                <div className="tri2"></div>
              </div>
              <div>
                <h3>Responsive</h3>
                <p>My layouts will work on any device, big or small.</p>
              </div>
            </div>
          </div>
          <div className="hex">
            <div className="hex1">
              <div className="container">
                <div className="tri1"></div>
                <div className="hexa">
                  <i className="far fa-lightbulb icon fa-3x"></i>
                </div>
                <div className="tri2"></div>
              </div>
              <div>
                <h3>Intuitive</h3>
                <p>Strong preference for easy to use, intuitive UX/UI.</p>
              </div>
            </div>
            <div className="hex1">
              <div className="container">
                <div className="tri1"></div>
                <div className="hexa">
                  <i className="fas fa-rocket icon fa-3x"></i>
                </div>
                <div className="tri2"></div>
              </div>
              <div>
                <h3>Dynamic</h3>
                <p>
                  Websites don't have to be static, I love making pages come to
                  life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <img
        src="/images/pfp.jpg"
        width="500"
        height="600"
        alt="the blockchain developer"
      /> */}
      <p>
        <i className="far fa-lightbulb"></i>
        <i className="fas fa-rocket"></i>I was born and raised in Nashville, TN
        and moved to Atlantic City, NJ 5 years ago. I started learning
        programming 7 years ago when I was 17. My first language was C++. When I
        wrote my first application with C++ I was so baffled! I was challenged
        to learn blockchain development in only 2 months 3 years ago by a friend
        of my mom. Ever since I've been determined and excited to pave the
        future with blockchain technologies{" "}
      </p>{" "}
      *
    </div>
  );
}
