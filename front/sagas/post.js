import {all, fork, call, put, takeLatest, delay} from 'redux-saga/effects';

function addPostAPI(data){
    return axios.post('/api/post', data);
}

function* addPost(action) {
    try{
        //서버를 구현하기 전까지 delay로 비동기적인 효과 주자.
        yield delay(1000);
        //const result = yield call(addPostAPI, action.data);
        yield put({
            type: 'ADD_POST_SUCCESS',
            //data: result.data,
        });
    } catch(err){
        yield put({
            type: 'ADD_POST_FAILURE',
            //data: err.response.data,
        });
    }
}

function* watchAddPost(){
    yield takeLatest('ADD_POST_REQUEST', addPost);
}

export default function* postSaga(){
    yield all([
        fork(watchAddPost),
    ]);
}