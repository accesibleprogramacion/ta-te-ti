import './ScoreBoard.css';

const ScoreBoard = ({scoreX, scoreO}) => (
    <div className="score-board">
        <div>{scoreX}</div>
        <div>{scoreO}</div>
    </div>
)

export default ScoreBoard;