import React, { useCallback, useEffect, useState } from 'react';
import Head from 'next/head';
import {Form, Input, Checkbox, Button} from 'antd';
import styled from 'styled-components';
import Router from 'next/router';
import {END} from 'redux-saga';
import axios from 'axios';

import AppLayout from '../components/AppLayout';
import useInput from '../hooks/useInput';
import { SIGN_UP_REQUEST, LOAD_MY_INFO_REQUEST } from '../reducers/user';
import { useDispatch, useSelector } from 'react-redux';
import wrapper from '../store/configureStore';


const ErrorMessage = styled.div`
    color:red;
`;

const Signup = () => {
    const dispatch = useDispatch();
    const {signUpLoading, signUpDone, signUpError, me} = useSelector((state) => state.user);

    //접근제어(로그인하면 회원가입페이지 못들어감)
    useEffect(() => {
        //로그아웃하는 경우
        if(me && me.id){
            Router.replace('/');
        }
    },[me && me.id]);

    useEffect(() => {
        if(signUpDone){
            Router.replace('/');
        }
    }, [signUpDone]);

    useEffect(() => {
        if(signUpError){
            alert(signUpError);
        }
    }, [signUpError]);

    const [email, onChangeEmail] = useInput('');
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
        console.log(email, nickname, password);
        dispatch({
            type: SIGN_UP_REQUEST,
            data: {email, password, nickname}
        })
    }, [email, password, check, term]);

    return(
        <AppLayout>
        <Head>
            <title>회원가입 | NodeBird</title>
        </Head>
        <Form onFinish={onSubmit}>
            <div>
                <label htmlFor="user-email">이메일</label>
                <br/>
                <Input name="user-email" type="email" value={email} onChange={onChangeEmail} required />
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
                <Button type="primary" htmlType="submit" loading={signUpLoading}>가입하기</Button>
            </div>
        </Form>
    </AppLayout>
    );
};

export const getServerSideProps = wrapper.getServerSideProps(async (context) => {
    const cookie = context.req ? context.req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if(context.req && cookie){
        axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
        type: LOAD_MY_INFO_REQUEST,
    });
    context.store.dispatch(END);
    await context.store.sagaTask.toPromise();
});

export default Signup;