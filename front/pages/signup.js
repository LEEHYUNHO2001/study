import React, { useCallback, useState } from 'react';
import Head from 'next/head';
import {Form, Input, Checkbox, Button} from 'antd';
import styled from 'styled-components';

import AppLayout from '../components/AppLayout';
import useInput from '../hooks/useInput';

const ErrorMessage = styled.div`
    color:red;
`;

const Signup = () => {
    const [id, onChangeId] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password, onChangePassword] = useInput('');

    const [check, setCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [term, setTerm] = useState('');
    const [termError, setTermError] = useState(false);   

    const onChangeCheck = useCallback((e) => {
        setCheck(e.target.value);
        setPasswordError(e.target.value !== password);
    },[password]);

    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.checked);
        setTermError(false);
    }, []);

    const onSubmit = useCallback(() => {
        if(password !== check){
            return setPasswordError(true);
        }
        if(!term){
            return setTermError(true);
        }
        console.log(id, nickname, password);
    }, [password, check, term]);

    return(
        <AppLayout>
        <Head>
            <title>회원가입 | NodeBird</title>
        </Head>
        <Form onFinish={onSubmit}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br/>
                <Input name="user-id" value={id} onChange={onChangeId} required />
            </div>
            <div>
                <label htmlFor="user-nickname">닉네임</label>
                <br/>
                <Input name="user-nickname" value={nickname} onChange={onChangeNickname} required />
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br/>
                <Input name="user-password" type="password" value={password} onChange={onChangePassword} required />
            </div>            <div>
                <label htmlFor="user-check">비밀번호체크</label>
                <br/>
                <Input name="user-check" type="password" value={check} onChange={onChangeCheck} required />
                {passwordError && <ErrorMessage style={{color:'red'}}>비밀번호가 일치하지 않습니다.</ErrorMessage>}
            </div>
            <div>
                <Checkbox name="uesr-term" checked={term} onChange={onChangeTerm}>NodeBird 약관에 동의합니다.</Checkbox>
                {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
            </div>
            <div style={{marginTop:10}}>
                <Button type="primary" htmlType="submit">가입하기</Button>
            </div>
        </Form>
    </AppLayout>
    );
};

export default Signup;