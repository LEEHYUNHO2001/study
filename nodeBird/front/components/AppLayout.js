import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {Menu, Input, Row, Col} from 'antd';
import styled, { createGlobalStyle } from 'styled-components';
import {useSelector} from 'react-redux';
import Router from 'next/router';

import UserProfile from './UserProfile';
import LoginForm from './LoginForm';
import useInput from '../hooks/useInput';


const SearchInput = styled(Input.Search)`
    vertical-align: 'middle';
`;
//Row에서 gutter를 넣어줬는데, 스크롤생기는 버그가 있어 해결
const Global = createGlobalStyle`
    .ant-row{
        margin-right: 0 !important;
        margin-left: 0 !important;
    }
    .ant-col::first-child{
        padding-left: 0 !important;
    }
    .ant-col::last-child{
        padding-right: 0 !important;
    }
`;
const AppLayout = ({children}) => {
    const [searchInput, onChangeSearchInput] = useInput('');
    const {me} = useSelector((state) => state.user);

    const onSearch = useCallback(() => {
        Router.push(`/hashtag/${searchInput}`)
    }, [searchInput]);

    return(
        <div>
            <Global />
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/"><a>노드버드</a></Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile"><a>프로필</a></Link>                   
                </Menu.Item>
                <Menu.Item>
                    <SearchInput enterButton value={searchInput} placeholder="해시태그를 입력하세요."
                    onChange={onChangeSearchInput} onSearch={onSearch} />           
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup"><a>회원가입</a></Link>                   
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6} >
                    {me ? <UserProfile /> : <LoginForm />}
                </Col>
                <Col xs={24} md={12} >
                    {children}
                </Col>
                <Col xs={24} md={6} >
                    <a href="https://github.com/LEEHYUNHO2001/React-NodeBird"
                     target="_blank" rel="noreferrer noopener">LEEHYUNHO</a>
                </Col>
            </Row>
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;