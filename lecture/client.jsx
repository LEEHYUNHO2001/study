const React = require('react');
const ReactDom = require('react-dom');


const WordRelay = require('./game/wordrelay');
const GuGuDan = require('./game/gugudan');
const NumberBaseball = require('./game/numberbaseball/numberbaseball').default;
const ResponseCheck = require('./game/responsecheck').default;
const RSP = require('./game/rsp').default;

if(document.querySelector('.gugudan-root')){
    ReactDom.render(<div><GuGuDan /></div>, document.querySelector('.gugudan-root'));
}
if(document.querySelector('.wordrelay-root')){
    ReactDom.render(<div><WordRelay /></div>, document.querySelector('.wordrelay-root'));
}
if(document.querySelector('.numberbaseball-root')){
    ReactDom.render(<div><NumberBaseball /></div>, document.querySelector('.numberbaseball-root'));
}
if(document.querySelector('.responsecheck-root')){
    ReactDom.render(<div><ResponseCheck /></div>, document.querySelector('.responsecheck-root'));
}
if(document.querySelector('.rsp-root')){
    ReactDom.render(<div><RSP /></div>, document.querySelector('.rsp-root'));
}