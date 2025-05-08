import './index.css';

function Question(props) {
    return (
        <>
            <input type="button" value={props.memo} className="start-button" alt="start adventure button"></input>
        </>
    )
}

export default Question;