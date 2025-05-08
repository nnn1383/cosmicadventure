import Question from "./Question";
import HomeImage from "../images/blastoffgif.gif";

function HomePage({onStart}) {
  return (
    <div className="homepage">
      <main>
        <h1 className="adventure-title">Cosmic Adventure</h1>
      </main>
      <img src={HomeImage} alt="spaceship gif" height="400px" />
      <Question 
        memo="Start Adventure"
        onStart={onStart}
      />
    </div>
  );
}

export default HomePage;
