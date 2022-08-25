import React, { useEffect, useState, useCallback } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { useSelector } from 'react-redux';
import {END} from 'redux-saga';
import axios from 'axios';
import useSWR from 'swr';

import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';
import wrapper from '../store/configureStore';
import {LOAD_MY_INFO_REQUEST} from '../reducers/user'

const Profile = () => {
    const {me} = useSelector((state) => state.user)
    const [followersLimit, setFollowersLimit] = useState(3);
    const [followingsLimit, setFollowingsLimit] = useState(3);

    const fetcher = (url) => axios.get(url, {withCredentials:true}).then((result) => result.data);
    const {data:followersData, error:followerError, mutate:mutateFollower} = useSWR(
        `http://localhost:3065/user/followers?limit=${followersLimit}`, fetcher);
    const {data:followingsData, error:followingError, mutate:mutateFollowing} = useSWR(
        `http://localhost:3065/user/followings?limit=${followingsLimit}`, fetcher);

    //접근제어(로그인 없이 프로필 못들어감)
    useEffect(() => {
        //로그아웃하는 경우
        if(!(me && me.id)){
            Router.push('/');
        }
    },[me && me.id]);

    const loadMoreFollowings = useCallback(() => {
        setFollowingsLimit((prev) => prev + 3);
    }, []);
    const loadMoreFollowers = useCallback(() => {
        setFollowersLimit((prev) => prev + 3);
    }, []);

    if(!me){
        return `내 정보 로딩중...`;
    };

    if(followerError || followingError){
        console.error(followerError || followingError);
        return '팔로잉/팔로워 로딩 중 에러가 발생했습니다.';
    }

    return(
        <>
            <Head>
                <title>내 프로필 | NodeBird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="팔로잉" data={followingsData} 
                onClickMore={loadMoreFollowings} loading={!followingsData && !followingError}
                mutateFollowing={mutateFollowing} />
                <FollowList header="팔로워" data={followersData} 
                onClickMore={loadMoreFollowers} loading={!followersData && !followerError}
                mutateFollower={mutateFollower}/>
            </AppLayout>
        </>
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

export default Profile;