import React from 'react';

function OutputLi(props) {
    return (
      // <div>{props.doubleNumber}</div>
        <li>{props.number}</li>
    );
}

function mapTutorial() {
    const numbers = [1, 2, 3, 4, 5];
    // const double = numbers.map((number) => number * 2);
    const double = numbers.map((number, idx) =>
        // <li key={number.toString()}>{number * 2}</li>
        <OutputLi key={number.toString()} number={number * 2}/>
    );
    return(
        <ul>{double}</ul>
    );
}

export default mapTutorial;