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
          <p></p>
        </div>
        <div className={switchCheck(skills, "info-box", "info-box-hidden")}>
          <h2>Skills</h2>
        </div>
      </div>
      <div className="bottom-container">
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
              <p>About Me</p>
            </div>
          </div>
        </div>
        <div
          className={switchCheck(contact, "contact-box", "contact-box-hidden")}
        >
          <h2>Contact</h2>
        </div>
      </div>
    </div>
  );
}
export default App;
