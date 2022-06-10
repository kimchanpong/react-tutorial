import React from 'react';

class NameForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            content: '',
            selectedValue: '',
            checkedbox: false
        }
    }

    // handleName = (event) => {
    //     this.setState({
    //         name: event.target.value
    //     })
    // }
    //
    // handleEmail = (event) => {
    //     this.setState({
    //         email: event.target.value
    //     })
    // }
    //
    // handleContent = (event) => {
    //     this.setState({
    //         content: event.target.value
    //     })
    // }
    //
    // handleSelect = (event) => {
    //     this.setState({
    //         selectedValue: event.target.value
    //     })
    // }

    handleTag = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        alert('이름 전송완료: ' + this.state.name);
        event.preventDefault();

        console.log('state data :::: ', this.state);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div>
                    Name:
                    <input type="text" name="name" value={this.state.name} onChange={this.handleTag.bind(this)}/>
                </div>
                <div>
                    email:
                    <input type="text" name="email" value={this.state.email} onChange={this.handleTag.bind(this)}/>
                </div>
                <div>
                    content:
                    <textarea name="content" value={this.state.content} onChange={this.handleTag.bind(this)} />
                </div>
                <div>
                    checkbox:
                    <input type="checkbox" name="checkedbox" onChange={this.handleTag.bind(this)} />
                </div>
                <div>
                    <select name="selectedValue" value={this.state.selectedValue} onChange={this.handleTag.bind(this)}>
                        <option value="a">a</option>
                        <option value="b">b</option>
                        <option value="c">c</option>
                    </select>
                </div>
                <button type="submit">전송</button>
            </form>
        )
    }
}

export default NameForm;