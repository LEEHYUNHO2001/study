import React, { useEffect } from 'react';
import Head from 'next/head';
import Router from 'next/router';

import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';
import { useSelector } from 'react-redux';

const Profile = () => {
    const {me} = useSelector((state) => state.user)

    //접근제어(로그인 없이 프로필 못들어감)
    useEffect(() => {
        //로그아웃하는 경우
        if(!(me && me.id)){
            Router.push('/');
        }
    },[me && me.id]);
    if(!me){
        return null;
    };

    return(
        <>
            <Head>
                <title>내 프로필 | NodeBird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="팔로잉" data={me.Followings} />
                <FollowList header="팔로워" data={me.Followers} />
            </AppLayout>
        </>
    );
};

export default Profile;