import React, {useState, useRef, useEffect, memo} from 'react';

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

const RSP = memo(() => {
    const [result, setResult] = useState('');
    const [imgCoord, setImgCoord] = useState(rspCoords.r);
    const [score, setScore] = useState(0);
    const interval = useRef();

    useEffect(() => { //componentDidMount, componentDidUpdate 역할(1대1 대응은 아님)
        interval.current = setInterval(changeHand, 50);
        return () => { //componentWillUnmount 역할
            clearInterval(interval.current);
        }
    }, [imgCoord]);

    const changeHand = () => {
        if(imgCoord === rspCoords.r){
            setImgCoord(rspCoords.s);
        } else if(imgCoord === rspCoords.s){
            setImgCoord(rspCoords.p);
        }else if(imgCoord === rspCoords.p){
            setImgCoord(rspCoords.r);
        }
    }

    const onClickBtn = (choice) => () => {
        clearInterval(interval.current);
        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(imgCoord)];
        const diff = myScore - cpuScore;

        if(diff === 0){
            setResult('비겼습니다.');
        } else if([-1, 2].includes(diff)){
            setResult('이겼습니다.');
            setScore((prevScore) =>prevScore + 1);
        } else{
            setResult('졌습니다.');
            setScore((prevScore) =>prevScore - 1);          
        }
        setTimeout(() => {
            interval.current = setInterval(changeHand, 50);
        }, 1000);
    }

    return(
        <>
            <div id="computer" style={{background: `url(https://sites.google.com/site/hafsrsp/_/rsrc/1468855017636/config/customLogo.gif?revision=2) ${imgCoord} 0`}} />
            <div>
                <button id="rock" className="btn" onClick={onClickBtn('r')}>바위</button>
                <button id="scissor" className="btn" onClick={onClickBtn('s')}>가위</button>
                <button id="paper" className="btn" onClick={onClickBtn('p')}>보</button>
            </div>
            <div>{result}</div>
            <div>현재 : {score}점</div>
        </>
    );

})

export default RSP;