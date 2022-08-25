const React = require('react');
const {useState, useRef} = React;

const WordRelay  = () => {
    const [word, setWord] = useState('이현호');
    const [value, setValue] = useState('');
    const [result, setfResult] = useState('');
    const inputRef = useRef(null);

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(word[word.length - 1] === value[0]){
            setfResult('정답');
            setWord(value);
            setValue('');
        } else{
            setfResult('오답');
            setValue('');
        }
        inputRef.current.focus();
    };

    const onChangeInput = (e) =>{
        setValue(e.target.value);
    };


    return (
        <React.Fragment>
            <div>끝말잇기</div>
            <div>{word}</div>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} value={value} onChange={onChangeInput}/>
                <button>입력</button>
            </form>
            <div>{result}</div>
        </React.Fragment>
    )
}

module.exports = WordRelay;