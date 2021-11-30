import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import './index.css';
import reportWebVitals from './reportWebVitals';

class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

class App1 extends React.Component{
  render(){
    return(
      <div>
        <Welcome name="hyunho"/>
        <Welcome name="hyunho2"/>
        <Welcome name="hyunho3"/>
      </div>
    )
  }
}

ReactDOM.render(
  <React.StrictMode>
    {/* <App /> */}
    <App1 />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
