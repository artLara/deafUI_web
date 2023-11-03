import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import TrafficLightApp from "./TrafficLightApp";

import { MantineProvider } from "@mantine/core";
import { CharacterAnimationsProvider } from "./contexts/CharacterAnimations";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        globalStyles: (_theme) => ({
          body: {
            width: "100vw",
            height: "100vh",
          },
          "#root": {
            width: "80%",
            height: "80%",
          },
        }),
      }}
    >
      <CharacterAnimationsProvider>
        <App />
      </CharacterAnimationsProvider>
    </MantineProvider>
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById("trafficLight")).render(
  <React.StrictMode>
    <TrafficLightApp/>
  </React.StrictMode>
);