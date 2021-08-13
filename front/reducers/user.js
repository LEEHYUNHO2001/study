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
    changeNicknameLoding: false, //닉네임 변경 시도중(true면 로딩창)
    changeNicknameDone: false,
    changeNicknameFailure: null,
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

export const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
export const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
export const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';

export const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE';

export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';

export const ADD_POST_TO_ME = 'ADD_POST_TO_ME';
export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME';

const dummyUser = (data) => ({
    ...data,
    nickname: '이현호',
    id: 1,
    //시퀄라이징에서 합쳐주기 때문에 대문자
    Posts: [{id : 1}],
    Followings: [{nickname: 'zerocho'}, {nickname: 'LEEHYUNHO2001'}],
    Followers: [{nickname: 'nodebird'}],
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
        case CHANGE_NICKNAME_REQUEST:
            return{
                ...state,
                changeNicknameLoding: true,
                changeNicknameDone: false,
                changeNicknameError: null,
            };
        case CHANGE_NICKNAME_SUCCESS:
            return{
                ...state,
                changeNicknameLoding: false,
                changeNicknameDone: true,
                me: null,
            };
        case CHANGE_NICKNAME_FAILURE:
            return{
                ...state,
                changeNicknameLoding: false,
                changeNicknameError: action.error,
            };
        case ADD_POST_TO_ME:
            return{
                ...state,
                me: {
                    ...state.me,
                    Posts:[{id:action.data}, ...state.me.Posts],
                },
            };
        case REMOVE_POST_OF_ME:
            return{
                ...state,
                me: {
                    ...state.me,
                    Posts:state.me.Posts.filter((v) => v.id !== action.data),
                },
            };
        default:
            return state;

    }

}

export default reducer;