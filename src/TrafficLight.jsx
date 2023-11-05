import { useEffect, useState } from "react";
import { getColorLight } from "./api/traffic_ligth.api";

export default function TrafficLight({ trafficStates }) {
  const [currentColor, setCurrentColor] = useState("green");
  const [time, setTime] = useState(Date.now());


  // useEffect(() => {
  //   const { duration, next } = trafficStates[currentColor];

  //   const timerId = setTimeout(() => {
  //     setCurrentColor(next);
  //   }, duration);

  //   return () => {
  //     clearTimeout(timerId);
  //   };
  // }, [currentColor]);


 

  useEffect(() => {
    

    // Update component every X seconds
    const interval = setInterval(() => {
      setTime(new Date());

      // Get request
      async function loadColorLight(){
        const res = await getColorLight();
        setCurrentColor(res.data.color);
        // console.log(res.data.color)
      }
      loadColorLight();
    }, 2000);

    return () => clearInterval(interval);
  }, [currentColor]);


  return (
    <div className="traffic-light-container">
      {Object.keys(trafficStates).map((color) => (
        <div
          className="traffic-light"
          style={{
            backgroundColor:
              color === currentColor && trafficStates[color].backgroundColor
          }}
        />
      ))}
    </div>
  );
}
