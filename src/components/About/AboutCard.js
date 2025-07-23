import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">João Dinis Costa </span>
            from <span className="purple"> Porto, Portugal.</span>
            <br />
            <br />
            I’m someone who thrives at the intersection of<span className="purple"> technology</span>, <span className="purple">curiosity</span> and <span className="purple">continuous growth</span>. With a deep passion for <span className="purple">cybersecurity</span>, <span className="purple">blockchain</span>, <span className="purple">cryptocurrencies</span> and <span className="purple">fintech</span>, I enjoy exploring how these technologies shape the future of <span className="purple">digital trust</span> and <span className="purple">financial systems</span>. Outside of work, I’m equally interested in the world of <span className="purple">investing</span>, particularly the dynamics of the stock market.
            <br />
            <br />
            I’m also committed to personal development through <span className="purple">fitness</span> and unwinding on weekends by <span className="purple">relaxing</span>, <span className="purple">listening to podcasts</span> and <span className="purple">enjoying music</span>. I truly value meaningful conversations with people who share my interests, especially through <span className="purple">networking</span> and <span className="purple">collaborative learning</span>.
            <br />
            <br />
            What drives me is <span className="purple"> learning</span> from experienced individuals and <span className="purple"> observing</span> how they approach challenges, make decisions and solve complex problems. I tend to analyze situations carefully, aiming to act quickly, but only once I’m confident it’s the right move.
            <br />
            <br />
            Whether I’m coding, learning or lifting, I’m always seeking <span className="purple">growth</span>.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
