import '../index.css';

function Question(props) {
    return (
      <button
        onClick={props.onStart}
        id="start-button"
        className="start-button"
        alt="start adventure button"
      >
        {props.memo}
      </button>
    );
  }
  
  export default Question;