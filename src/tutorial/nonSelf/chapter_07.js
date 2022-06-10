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

class Mailbox extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            unreadMsg: props.unreadMsg
        }
    }

    render() {
        const unreadMsg = this.state.unreadMsg;

        return (
            <div>
                <h1>안녕!</h1>
                {
                    unreadMsg.length > 0 &&
                    <h2>
                        당신은 {unreadMsg.length}건의 메세지를 가졌습니다.
                    </h2>
                }
            </div>
        );
    }
}

// const msg = ['a', 'b', 'c'];
const msg = [];

function WarningBanner(props) {
    if(!props.warn) {
        return null;
    }

    return (
        <div className="warning">
            위험!!
        </div>
    );
}

class Page extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            showWarning: true
        }
    }

    handleToggleClick = () => {
        this.setState(state => ({
            showWarning: !state.showWarning
        }));
    }

    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        )
    }
}

export default LoginControl;