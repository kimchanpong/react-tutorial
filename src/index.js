import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// function getGreeting(user) {
//     if(user) {
//         let greeting = <div>
//                             <img src={user.avatarUrl}/>
//                             <h1>Hello, {formatName(user)}</h1>
//                         </div>;
//         return greeting;
//     }
//     return <h1>No Data</h1>;
// }
//
// function formatName(user) {
//     return user.firstName + ' ' + user.lastName;
// }

// const user = '';
// const user = {
//     firstName: 'ChanHo!',
//     lastName: 'Kim!',
//     avatarUrl: 'https://product.cdn.cevaws.com/var/storage/images/_aliases/reference/media/feliway-2017/images/kor-kr/1_gnetb-7sfmbx49emluey4a/6341829-1-kor-KR/1_gNETb-7SfMBX49EMLUeY4A.jpg'
// }

// function tick() {
//     const element = (
//         <div>
//             <h1>hi welcome</h1>
//             <h2>시계 간다 ~ {new Date().toLocaleTimeString()}</h2>
//         </div>
//     );
//
//     ReactDOM.render(element, document.getElementById('root'));
// }

// const element = (<a href="https://www.reactjs.org" target="_blank">Link</a>);
// const element = getGreeting(user);

// root.render(
//     element
// );

// setInterval(tick, 1000);

// function Welcome(props) {
//     return <h1>안녕하세요, {props.name}</h1>
// }

// function formatDate(date) {
//     return date.toLocaleDateString();
// }
//
// function Comment(props) {
//     return (
//         <div className="Comment">
//             <UserInfo user={props.user}/>
//             <div className="Comment-text">
//                 {props.text}
//             </div>
//             <div className="Comment-date">
//                 {formatDate(props.date)}
//             </div>
//         </div>
//     )
// }
//
// function UserInfo(props) {
//     return (
//         <div className="UserInfo">
//             <Avatar user={props.user} />
//             <div className="UserInfo-name">
//                 {props.user.name}
//             </div>
//         </div>
//     )
// }
//
// function Avatar(props) {
//     return (
//         <img
//             className="Avartar"
//             src={props.user.avatarUrl}
//             alt={props.user.name}
//         />
//     )
// }
//
// const comment = {
//     date: new Date(),
//     text: '난 개발자다',
//     user: {
//         name: '김찬퐁',
//         avatarUrl: 'https://product.cdn.cevaws.com/var/storage/images/_aliases/reference/media/feliway-2017/images/kor-kr/1_gnetb-7sfmbx49emluey4a/6341829-1-kor-KR/1_gNETb-7SfMBX49EMLUeY4A.jpg'
//     }
// }

// function AppMain() {
//     return (
//         <div>
//             <Welcome name="Kim" />
//             <Welcome name="Chan" />
//             <Welcome name="Ho" />
//         </div>
//     );
// }

// const element = <Welcome name="Sara" />
// ReactDOM.render(
//     <Comment
//         date={comment.date}
//         text={comment.text}
//         author={comment.author}
//     />,
//     document.getElementById('root')
// )
// ;

// function Clock(props) {
//     return (
//       <div>
//           <h1>안녕하세요</h1>
//           <h2>휴가가고싶다 {props.date.toLocaleTimeString()}</h2>
//       </div>
//     );
// }

// function FormatteDate(props) {
//     return (
//         <div>
//             <h2>휴가가고싶다 {props.date.toLocaleTimeString()}</h2>
//         </div>
//     );
// }
//
// class Clock extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = { date:new Date() };
//     }
//
//     componentDidMount() {
//         console.log('componentDidMount');
//         this.timerId = setInterval(() => this.tick(), 1000);
//     }
//
//     componentWillUnmount() {
//         console.log('componentWillUnmount');
//         clearInterval(this.timerId);
//     }
//
//     tick() {
//         this.setState({
//             date: new Date()
//         });
//     }
//
//     render() {
//         return (
//             <div>
//                 <h1>안녕하세요</h1>
//                 <FormatteDate date={this.state.date}/>
//             </div>
//         )
//     };
// }
//
// function AppMain() {
//     return (
//         <div>
//             <Clock />
//             <Clock />
//             <Clock />
//         </div>
//     );
// }
//
// class Toggle extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {isToggleOn: true}
//
//         // this.handleClicka = this.handleClick.bind(this);
//     }
//
//     // handleClick() {
//     //     this.setState(prevState => ({
//     //         isToggleOn: !prevState.isToggleOn
//     //     }));
//     // }
//
//     handleClick = (msg) => {
//         this.setState(prevState => ({
//             isToggleOn: !prevState.isToggleOn
//         }));
//
//         alert(this.state.isToggleOn);
//     }
//
//     render() {
//         return (
//             <button onClick={this.handleClick.bind(this, 'test!')} >
//                 {
//                     this.state.isToggleOn ? 'ON' : 'OFF'
//                 }
//             </button>
//         );
//     }
// }

function UserGreeting(props) {
    return (
        <h1>돌아온걸 환영해</h1>
    )
}

function GeustGreeting(props) {
    return <h1>회원가입 좀 해주셈</h1>
}

class Greeting extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: props.isLoggedIn }
    }

    render() {
        if(this.state.isLoggedIn) {
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

}

root.render(
    <Greeting isLoggedIn={false} />
);


