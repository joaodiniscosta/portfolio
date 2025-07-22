import React from "react";
import Particles from "react-tsparticles";

function Particle() {
  return (
    <div className="video-background-container">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="video-background"
      >
        <source src="/background_vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay" />
    </div>
  );
}

export default Particle;
