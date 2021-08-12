export const initialState = {
    logInLoading: false,  //로그인 시도중(true면 로딩창)
    logInDone: false,
    logInError: null,
    logOutLoding: false, //로그아웃 시도중(true면 로딩창)
    logOutDone: false,
    logOutError: null,
    signUpLoding: false, //회원가입 시도중(true면 로딩창)
    signUpDone: false,
    signUpFailure: null,
    me: null,
    signUpData: {},
    loginData: {},
}

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE';

export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';

const dummyUser = (data) => ({
    ...data,
    nickname: '이현호',
    id: 1,
    //시퀄라이징에서 합쳐주기 때문에 대문자
    Posts: [],
    Followings: [],
    Followers: [],
})

export const loginRequestAction = (data) => {
    return{
        type: LOG_IN_REQUEST,
        data,
    }
};

export const logoutRequestAction = () => {
    return{
        type: LOG_OUT_REQUEST,
    }
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case LOG_IN_REQUEST:
            return{
                ...state,
                logInLoading: true,
                //me: null, //로딩창에서 데이터 없애고 보여줌
                logInError: null,
                logInDone: false,
            };
        case LOG_IN_SUCCESS:
            return{
                ...state,
                logInLoading: false,
                logInDone: true,
                me: dummyUser(action.data),
            };
        case LOG_IN_FAILURE:
            return{
                ...state,
                logInLoading: false,
                logInError: action.error,
            };
        case LOG_OUT_REQUEST:
            return{
                ...state,
                logOutLoding: true,
                logOutDone: false,
                logOutError: null,
            };
        case LOG_OUT_SUCCESS:
            return{
                ...state,
                logOutLoding: false,
                logOutDone: true,
                me: null,
            };
        case LOG_OUT_FAILURE:
            return{
                ...state,
                logOutLoding: false,
                logOutError: action.error,
            };
        case SIGN_UP_REQUEST:
            return{
                ...state,
                signUpLoding: true,
                signUpDone: false,
                signUpError: null,
            };
        case SIGN_UP_SUCCESS:
            return{
                ...state,
                signUpLoding: false,
                signUpDone: true,
                me: null,
            };
        case SIGN_UP_FAILURE:
            return{
                ...state,
                signUpLoding: false,
                signUpError: action.error,
            };
        default:
            return {
                ...state,
            };
    }

}

export default reducer;