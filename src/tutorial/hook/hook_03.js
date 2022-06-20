import React, {useEffect, useState} from 'react';

// class Example extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             count: 0
//         };
//     }
//
//     render() {
//         return (
//             <div>
//                 <p>You clicked {this.state.count} times</p>
//                 <button onClick={() => this.setState({
//                     count: this.state.count + 1
//                 })}>
//                     Click me
//                 </button>
//             </div>
//         )
//     }
// }

function Example() {
    const [count, setCount] = useState(0);

    useEffect(() => {
       document.title = `You clicked ${count} times`;
    });

    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    )
}

export default Example;