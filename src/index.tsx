import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { IntlProvider } from "react-intl";
import { getLanguage } from "./multiLanguage/helpers/useLanguage";

import fetchAndLoadMessages from "./multiLanguage/helpers/getMessages";

const language = getLanguage();

async function setupApp() {
  const messages = await fetchAndLoadMessages();

  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );

  root.render(
    <React.StrictMode>
      <IntlProvider
        locale={language}
        messages={messages[language]}
        onError={(error) => {
          console.log("Error: ", error);
        }}>
        <App />
      </IntlProvider>
    </React.StrictMode>
  );
}

setupApp();
