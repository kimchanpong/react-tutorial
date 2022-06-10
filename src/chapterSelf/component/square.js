import React from 'react';

function SquareButton(props) {
    return (
        <button
            className="square"
            onClick={props.handleSquareEvent}>

            {props.arrVal}
        </button>
    )
}

function Square(props) {
    return (
        <SquareButton
            arrVal={props.arrVal}
            handleSquareEvent={props.handleSquareEvent}
        />
    );
}

export default Square;