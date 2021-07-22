const React = require('react');
const ReactDom = require('react-dom');

const WordRelay = require('./game/wordrelay');
const GuGuDan = require('./game/gugudan');

ReactDom.render(<div><GuGuDan /><WordRelay /></div>, document.querySelector('.root'));