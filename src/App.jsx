import "./App.css";
import "./normalize.css";
import { useState } from "react";

function App() {
  const [about, setAbout] = useState(false);
  const [skills, setSkills] = useState(false);
  const [contact, setContact] = useState(false);

  const switchCheck = (state, alt, base) => {
    return state ? alt : base;
  };

  return (
    <div className="main">
      <div className="top-container">
        <div className={switchCheck(about, "info-box", "info-box-hidden")}>
          <h2>About Me</h2>
          <p>
            Hello! I'm a 21 year old student, currently enrolled in the Computer
            Science program at Keyin College.
          </p>
          <br />
          <p>
            I've been interested in computers and technology my entire life.
            Always searching for some sort of challenge, something to put my
            knowledge and experience to the test.
          </p>
          <br />
          <p>
            After finally receiving official education, I'm certain I've found
            my direction.
          </p>
        </div>
        <div className={switchCheck(skills, "info-box", "info-box-hidden")}>
          <h2>Skills</h2>
          <p>proficient in various programming languages such as:</p>
          <ul>
            <li>Python</li>
            <li>JS</li>
            <li>HTML and CSS</li>
            <li>The list keeps growing...</li>
          </ul>
          <br />
          <p>
            I've also taken the <span className="important">AWS Academy</span>{" "}
            course as a part of my program.
          </p>
        </div>
      </div>
      <div className="bottom-container">
        <h1>Daniel Hayward</h1>
        <h1>Portfolio</h1>
        <h2>Select any options</h2>
        <div className="switch-container">
          <div className="top-switches">
            <div
              className="switch"
              onClick={() => {
                about ? setAbout(false) : setAbout(true);
              }}
            >
              <div
                className={switchCheck(about, "circle-clicked", "circle")}
              ></div>
              <p>About Me</p>
            </div>
            <div
              className="switch"
              onClick={() => {
                skills ? setSkills(false) : setSkills(true);
              }}
            >
              <div
                className={switchCheck(skills, "circle-clicked", "circle")}
              ></div>
              <p>Skills</p>
            </div>
          </div>
          <div className="bottom-switch">
            <div
              className="switch"
              onClick={() => {
                contact ? setContact(false) : setContact(true);
              }}
            >
              <div
                className={switchCheck(contact, "circle-clicked", "circle")}
              ></div>
              <p>Contact</p>
            </div>
          </div>
        </div>
        <div
          className={switchCheck(contact, "contact-box", "contact-box-hidden")}
        >
          <h2>Contact</h2>
          <p>Email: danielkevinhayward@outlook.com</p>
        </div>
      </div>
    </div>
  );
}
export default App;
