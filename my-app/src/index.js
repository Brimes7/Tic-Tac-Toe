import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//To remember things components use state


//This sets the state of each square
class Square extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         value: null,
    //     };
    // }
    //These components are rendering a single button
    //Or 9 squares

    render() {
        return (
            //Arrow function syntax
            //When you call setState inside of a component
            //React automatically updates the child too.
            <button className="square" onClick={() => this.props.onClick()}>
                {/*shows the value*/}
                {this.props.value}
            </button>
        );
    }
}

class Board extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };
    }
    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = 'X';
        this.setState({squares: squares});
    }

    renderSquare(i) {
        // passed prop of parent Board component to a child Square component
        return (
            <Square value={this.state.squares[i]} onClick={() => this.handleClick(i)}/>);
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
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

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
