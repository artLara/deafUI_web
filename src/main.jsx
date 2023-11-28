import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import TrafficLightApp from "./TrafficLightApp";
import VideoRobot from "./VideoRobot"

import { MantineProvider } from "@mantine/core";
import { CharacterAnimationsProvider } from "./contexts/CharacterAnimations";

ReactDOM.createRoot(document.getElementById("root")).render(
  <VideoRobot/>

  
);

ReactDOM.createRoot(document.getElementById("trafficLight")).render(
  <React.StrictMode>
    <TrafficLightApp/>
  </React.StrictMode>
);