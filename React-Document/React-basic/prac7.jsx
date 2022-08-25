import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.css';
import reportWebVitals from './reportWebVitals';

function formatDate(date) {
  return date.toLocaleDateString();
}

const comment = {
  date: new Date(),
  text: 'I hope you enjoy learning React!',
  author: {
    name: 'Hello Kitty',
    avatarUrl: 'https://placekitten.com/g/64/64',
  },
};

class Avatar extends React.Component{
  render(){
    return(
      <img
      className="Avatar"
      src={this.props.user.avatarUrl}
      alt={this.props.user.name}
    />
    )
  }
}

class UswerInfo extends React.Component{
  render(){
    return(
      <div className="UserInfo">
        <Avatar user={this.props.user} />
        <div className="UserInfo-name">
          {this.props.user.name}
        </div>
    </div>
    );
  }
}

class Comment extends React.Component{
  render(){
    return(
      <div className="Comment">
        <UswerInfo user={this.props.author}/>
        <div className="Comment-text">{this.props.text}</div>
        <div className="Comment-date">
          {formatDate(this.props.date)}
        </div>
    </div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <Comment
    date={comment.date}
    text={comment.text}
    author={comment.author}
  />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
