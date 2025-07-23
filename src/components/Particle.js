import backgroundVideo from '../Assets/background.mp4';


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
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay" />
    </div>
  );
}

export default Particle;
