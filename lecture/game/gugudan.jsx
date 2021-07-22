const React = require('react');

const GuGuDan = () => {
    const [first, setFirst] = React.useState(Math.ceil(Math.random() * 9));
    const [second, setSecond] = React.useState(Math.ceil(Math.random() * 9));
    const [value, setValue] = React.useState('');
    const [result, setResult] = React.useState('');
    const inputRef = React.useRef(null);

    const onChangeInput = (e) => {
        setValue(e.target.value);
    }

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(parseInt(value) === first * second){
            setResult(first + ' x ' + second + ' = ' + value + ' 정답 ');
            setFirst(Math.ceil(Math.random() * 9));
            setSecond(Math.ceil(Math.random() * 9));
            setValue('');
        } else{
            setResult(first + ' x ' + second + ' != ' + value + ' 오답 ');
            setValue('');
        }
        inputRef.current.focus();
    }

    return (
        <React.Fragment>
            <div>구구단</div>
            <div>{first} 곱하기 {second} 는?</div>
            <form onSubmit={onSubmitForm}>
                <input ref={inputRef} onChange={onChangeInput} value={value}/>
                <button>입력</button>
            </form>
            <div>{result}</div>
        </React.Fragment>
        )
}

module.exports = GuGuDan;