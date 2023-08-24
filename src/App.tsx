import React from "react";
import ChangeLanguageDropdown from "./multiLanguage/dropdown/ChangeLanguageDropdown";
import { useIntl } from "react-intl";

function App() {
  const { formatMessage } = useIntl();

  return (
    <>
      {" "}
      <ChangeLanguageDropdown></ChangeLanguageDropdown>
      <div className="app-container">
        <div className="content-container">
          <img
            src="./GlobalReach.png"
            alt="GlobalReachLogo"
            className="logo-image"
          />
          <h1 className="title" style={{ fontWeight: "800" }}>
            {formatMessage({ id: "home_title" })}
          </h1>
          <h4>{formatMessage({ id: "home_subtitle" })}</h4>
          <div className="features">
            <h2 style={{ textDecoration: "underline" }}>
              {formatMessage({ id: "key_features" })}{" "}
            </h2>
            <ul>
              <li>{formatMessage({ id: "key_features_1" })}</li>
              <li>{formatMessage({ id: "key_features_2" })}</li>
              <li>{formatMessage({ id: "key_features_3" })}</li>
              <li>{formatMessage({ id: "key_features_4" })}</li>
              <li>{formatMessage({ id: "key_features_5" })}</li>
              <li>{formatMessage({ id: "key_features_6" })}</li>
              <li>{formatMessage({ id: "key_features_7" })}</li>
              <li>{formatMessage({ id: "key_features_8" })}</li>
            </ul>
          </div>
        </div>
      </div>
      <footer
        id="footer"
        style={{
          textAlign: "center",
          backgroundColor: "black",
          color: "white",
          marginTop: "20px",
          flexShrink: 0,
        }}>
        <p>
          Global Reach - Developed by Piraveenan Kirupakaran
          <br />
          <a href="https://github.com/piraveenank/global-reach-react-typescript-internationalisation-boilerplate">
            GitHub
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
