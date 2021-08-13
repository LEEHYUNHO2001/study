import {all, fork, call, put, takeLatest, delay} from 'redux-saga/effects';
import shortId from 'shortid';
import axios from 'axios';

import {
    ADD_POST_REQUEST, ADD_POST_SUCCESS, ADD_POST_FAILURE,
    REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS, REMOVE_POST_FAILURE,
    ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS, ADD_COMMENT_FAILURE
} from '../reducers/post';
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from '../reducers/user';

function addPostAPI(data){
    return axios.post('/api/post', data);
}

function* addPost(action) {
    const id = shortId.generate();
    try{
        //서버를 구현하기 전까지 delay로 비동기적인 효과 주자.
        yield delay(1000);
        //const result = yield call(addPostAPI, action.data);
        yield put({
            type: ADD_POST_SUCCESS,
            //data: result.data,
            data: {
                id,
                content: action.data,
            },
        });
        yield put({
            type: ADD_POST_TO_ME,
            data: id,
        });
    } catch(err){
        yield put({
            type: ADD_POST_FAILURE,
            error: err.response.data,
        });
    }
}

function removePostAPI(data){
    return axios.delete('/api/post', data);
}

function* removePost(action) {
    try{
        //서버를 구현하기 전까지 delay로 비동기적인 효과 주자.
        yield delay(1000);
        //const result = yield call(removePostAPI, action.data);
        yield put({
            type: REMOVE_POST_SUCCESS,
            //data: result.data,
            data: action.data
        });
        yield put({
            type: REMOVE_POST_OF_ME,
            data: action.data,
        });
    } catch(err){
        yield put({
            type: REMOVE_POST_FAILURE,
            error: err.response.data,
        });
    }
}

function addCommentAPI(data){
    return axios.post(`/api/post/${data.postId}/comment`, data);
}

function* addComment(action) {
    try{
        //서버를 구현하기 전까지 delay로 비동기적인 효과 주자.
        yield delay(1000);
        //const result = yield call(addCommentAPI, action.data);
        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: action.data,
            //data: result.data,
        });
    } catch(err){
        yield put({
            type: ADD_COMMENT_FAILURE,
            error: err.response.data,
        });
    }
}

function* watchAddPost(){
    yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchRemovePost(){
    yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

function* watchAddComment(){
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

export default function* postSaga(){
    yield all([
        fork(watchAddPost),
        fork(watchRemovePost),
        fork(watchAddComment),
    ]);
}