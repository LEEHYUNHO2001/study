const React = require('react');
const ReactDom = require('react-dom');

const WordRelay = require('./game/wordrelay');
const GuGuDan = require('./game/gugudan');
const NumberBaseball = require('./game/numberbaseball/numberbaseball').default;
const ResponseCheck = require('./game/responsecheck').default;
const RSP = require('./game/rsp').default;
const Lotto = require('./game/lotto/lotto').default;
const TicTacToe = require('./game/tictactoe/tictactoe').default;
const MineSearch = require('./game/minesearch/minesearch').default;


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
if(document.querySelector('.lotto-root')){
    ReactDom.render(<div><Lotto /></div>, document.querySelector('.lotto-root'));
}
if(document.querySelector('.tictactoe-root')){
    ReactDom.render(<div><TicTacToe /></div>, document.querySelector('.tictactoe-root'));
}
if(document.querySelector('.minesearch-root')){
    ReactDom.render(<div><MineSearch /></div>, document.querySelector('.minesearch-root'));
}