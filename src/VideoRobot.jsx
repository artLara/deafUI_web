import React from 'react';


export default function VideoRobot() {  
    return (
      <div>
        <video width="auto" height="auto" autoPlay muted>
            <source src={"../videos_robot/amar.mp4"} type="video/ogg"/>
            Your browser does not support the video tag.
        </video>
      </div>
    );
  }