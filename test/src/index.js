import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.css';
import reportWebVitals from './reportWebVitals';

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   if(this.state.date !== nextState.date){
  //     return true;
  //   }
  //   return false;
  // }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <>
    <h1>Hello, world!</h1>
    <Clock />
  </>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
