import React, {Component} from 'react';

const rspCoords = {
    r : '0px',
    s : '-140px',
    p : '-280px',
};

const scores = {
    s: 1,
    r: 0,
    p: -1,
};

const computerChoice = (imgCoord) => {
    return Object.entries(rspCoords).find((v) => {
        return v[1] === imgCoord;
    })[0];
};

class RSP extends Component{
    state = {
        result: '',
        imgCoord: rspCoords.r,
        score: 0,
    };

    interval;

    componentDidMount(){
        this.interval = setInterval(this.changeHand, 50);
    };

    changeHand = () => {
        const {imgCoord} = this.state;
        if(imgCoord === rspCoords.r){
            this.setState({
                imgCoord: rspCoords.s,
            });
        } else if(imgCoord === rspCoords.s){
            this.setState({
                imgCoord: rspCoords.p,
            });
        }else if(imgCoord === rspCoords.p){
            this.setState({
                imgCoord: rspCoords.r,
            });
        }
    }

    componentDidUpdate(){

    };

    componentWillUnmount(){
        clearInterval(this.interval);
    };

    onClickBtn = (choice) => () => {
        clearInterval(this.interval);
        const {imgCoord} = this.state;
        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(imgCoord)];
        const diff = myScore - cpuScore;

        if(diff === 0){
            this.setState({
                result: '비겼습니다.',
            });
        } else if([-1, 2].includes(diff)){
            this.setState((prevState) => {
                return{
                    result: '이겼습니다.',
                    score: prevState.score + 1,
                }
            });
        } else{
            this.setState((prevState) => {
                return{
                    result: '졌습니다.',
                    score: prevState.score - 1,
                }
            });            
        }
        setTimeout(() => {
            this.interval = setInterval(this.changeHand, 50);
        }, 1000);
    };

    render(){
        const {result, score, imgCoord} = this.state;
        return (
            <>
                <div id="computer" style={{background: `url(https://sites.google.com/site/hafsrsp/_/rsrc/1468855017636/config/customLogo.gif?revision=2) ${imgCoord} 0`}} />
                <div>
                    <button id="rock" className="btn" onClick={this.onClickBtn('r')}>바위</button>
                    <button id="scissor" className="btn" onClick={this.onClickBtn('s')}>가위</button>
                    <button id="paper" className="btn" onClick={this.onClickBtn('p')}>보</button>
                </div>
                <div>{result}</div>
                <div>현재 : {score}점</div>
            </>

        )
    }
}

export default RSP;