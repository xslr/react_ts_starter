import * as React from 'react'

import './TicTacToe.scss'

interface SquareProps {
  value: string,
  onClick: () => void
}
interface SquareState { }

function Square(props: SquareProps) {
  return (
    <button
        className="square"
        onClick={props.onClick}>
      {props.value}
    </button>
  );
}

interface BoardProps {
  xIsNext: boolean,
  squares: string[],
  onClick: (i: number) => void
}
interface BoardState {}
class Board extends React.Component<BoardProps, BoardState> {
  renderSquare(i: number) {
    return <Square
              value={this.props.squares[i]}
              onClick={() => this.props.onClick(i)} />;
  }

  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

interface GameProps { };
interface GameState {
  history: { squares: string[] }[],
  xIsNext: boolean,
  stepNumber: number,
};
export class Game extends React.Component<GameProps, GameState> {
  constructor(props: GameProps) {
    super(props);
    this.state = {
      history: [ {
        squares: Array(9).fill(null)
      } ],
      xIsNext: true,
      stepNumber: 0,
    };
  }

  handleSquareClick(i: number) {
    const history = this.state.history;
    const squares = history[history.length - 1].squares;
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    let squaresMut = squares.slice();
    squaresMut[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{squares: squaresMut}]),
      xIsNext: !this.state.xIsNext,
      stepNumber: this.state.stepNumber + 1,
    });
  }

  jumpTo(move: number) {
    this.setState({
      history: this.state.history.slice(0, move + 1),
      stepNumber: move,
      xIsNext: (move % 2) == 0,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[history.length - 1];
    const winner = calculateWinner(current.squares);

    const moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';

        return (
          <li key={move}>
            <button onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
        );
    });

    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
              squares={history[history.length-1].squares}
              xIsNext={this.state.xIsNext}
              onClick={(i) => this.handleSquareClick(i)}/>
        </div>
        <div className="game-info">
          <div className="status">{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

function calculateWinner(squares: string[]) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i<lines.length; i++) {
    const [a,b,c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}
