import React from 'react';

class ShoppingList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="shopping-list">
                <h1>쇼핑 리스트 {this.props.name}</h1>
                <ul>
                    <li>a</li>
                    <li>b</li>
                    <li>c</li>
                </ul>
            </div>
        );
    }
}

export default ShoppingList;