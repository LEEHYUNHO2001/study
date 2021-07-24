const React = require('react');
const ReactDom = require('react-dom');


const WordRelay = require('./game/wordrelay');
const GuGuDan = require('./game/gugudan');
const NumberBaseball = require('./game/numberbaseball/numberbaseball');

if(document.querySelector('.gugudan-root')){
    ReactDom.render(<div><GuGuDan /></div>, document.querySelector('.gugudan-root'));
}
if(document.querySelector('.wordrelay-root')){
    ReactDom.render(<div><WordRelay /></div>, document.querySelector('.wordrelay-root'));
}
if(document.querySelector('.numberbaseball-root')){
    ReactDom.render(<div><NumberBaseball /></div>, document.querySelector('.numberbaseball-root'));
}