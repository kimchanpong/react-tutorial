import React from 'react';
import ReactDOM from 'react-dom/client';

function UserGreeting(props) {
    return (
        <h1>돌아온걸 환영해</h1>
    )
}

function GeustGreeting(props) {
    return <h1>회원가입 좀 해주셈123</h1>
}

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: props.isLoggedIn }
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        if(isLoggedIn) {
            return (
                <UserGreeting />
            )
        }

        return (
            <GeustGreeting />
        )
    };
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    )
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn: false
        };
    }

    handleLoginClick = () => {
        this.setState({
           isLoggedIn: true
        });
    }

    handleLogoutClick = () => {
        this.setState({
            isLoggedIn: false
        });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if(isLoggedIn) {
            button = <LoginButton onClick={this.handleLoginClick}/>
        } else {
            button = <LogoutButton onClick={this.handleLogoutClick()}/>
        }

        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        )
    }
}

export default LoginControl;