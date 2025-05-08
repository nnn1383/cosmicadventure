import Question from "./Question";
import HomeImage from "./images/blastoffgif.gif";

function HomePage() {
  return (
      <div className="homepage">
          <main>
              <h1 className="adventure-title">Cosmic Adventure</h1>
          </main>
          <img src={HomeImage} alt="spaceship gif" height={"400px"}></img>
          <Question 
            memo="Start Adventure"
          />
      </div>
  )
}

export default HomePage;