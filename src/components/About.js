import React, { useState, useEffect } from "react";
import "../App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faLaptopCode,
  faLightbulb,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { useSpring, animated } from "react-spring";

export default function About() {
  const [about, setAbout] = useState(false);
  const [hr, setHr] = useState(false);
  const [hex, setHex] = useState(false);

  const handleAbout = () => {
    const offset = window.scrollY;
    if (offset > 833) {
      setAbout(true);
    } else {
      setAbout(false);
    }
  };
  const handleHr = () => {
    const offset = window.scrollY;
    if (offset > 833) {
      setHr(true);
    } else {
      setHr(false);
    }
  };
  const handleHex = () => {
    const offset = window.scrollY;
    if (offset > 833) {
      setHex(true);
    } else {
      setHex(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleAbout);
    window.addEventListener("scroll", handleHr);
    window.addEventListener("scroll", handleHex);
  });
  let x = ["head"];
  if (about) {
    x.push("scrollIn");
  }
  let xx = ["hr2"];
  if (hr) {
    xx.push("scrollIn");
  }
  let xxx = ["hexs"];
  if (hex) {
    xxx.push("scrollInHex");
  }
  const props = useSpring({
    to: [{ translateX: 0, opacity: 0 }, { opacity: 1 }],
    delay: 1500,
    from: { opacity: 0, translateX: -500 },
  });

  return (
    <div className="about">
      <div className="hr1">
        <div>
          <div className={x.join(" ")}>
            <h1>About</h1>
          </div>

          <animated.hr style={props} className="hr2" />
        </div>
      </div>
      <div className="contain">
        <animated.div className={xxx.join(" ")}>
          <div className="hex">
            <div className="hex1">
              <div className="container">
                <div className="tri1"></div>
                <div className="hexa">
                  <FontAwesomeIcon
                    className="icon"
                    size="4x"
                    icon={faTachometerAlt}
                  />
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
                  <FontAwesomeIcon
                    className="icon"
                    size="4x"
                    icon={faLaptopCode}
                  />
                </div>
                <div className="tri2"></div>
              </div>
              <div>
                <h3>Responsive</h3>
              </div>
              <div>
                <p>My layouts will work on any device, big or small.</p>
              </div>
            </div>
          </div>
          <div className="hex">
            <div className="hex1">
              <div className="container">
                <div className="tri1"></div>
                <div className="hexa">
                  <FontAwesomeIcon
                    className="icon"
                    size="4x"
                    icon={faLightbulb}
                  />
                </div>
                <div className="tri2"></div>
              </div>
              <div>
                <h3 id="fastest1">Intuitive</h3>
              </div>
              <div>
                <p>Strong preference for easy to use, intuitive UX/UI.</p>
              </div>
            </div>
            <div className="hex1">
              <div className="container">
                <div className="tri1"></div>
                <div className="hexa">
                  <FontAwesomeIcon className="icon" size="4x" icon={faRocket} />
                </div>
                <div className="tri2"></div>
              </div>
              <div>
                <h3 id="fastest2">Dynamic</h3>
              </div>
              <div>
                {" "}
                <p>
                  Websites don't have to be static, I love making pages come to
                  life.
                </p>
              </div>
            </div>
          </div>
        </animated.div>
      </div>
      {/* <img
        src="/images/pfp.jpg"
        width="500"
        height="600"
        alt="the blockchain developer"
      /> */}
      <p>
        I was born and raised in Nashville, TN and moved to Atlantic City, NJ 5
        years ago. I started learning programming 7 years ago when I was 17. My
        first language was C++. When I wrote my first application with C++ I was
        so baffled! I was challenged to learn blockchain development in only 2
        months 3 years ago by a friend of my mom. Ever since I've been
        determined and excited to pave the future with blockchain technologies{" "}
      </p>{" "}
      *
    </div>
  );
}
