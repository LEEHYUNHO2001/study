import shortId from 'shortid';

export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: '이현호'
        },
        content: 'first comment #해시태그 #익스프레스',
        Images: [{
            id: shortId.generate(),
            src:'https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/XGP7CUGLG5HFNO3WB25C6D6VY4.jpg',
        }, {
            id: shortId.generate(),
            src:'https://nodebird.com/favicon.ico'
        }, {
            id: shortId.generate(),
            src:'https://cdn.cms-twdigitalassets.com/content/dam/blog-twitter/official/ko_kr/products/2019/topics/CB-14444_TopicsCOMMS_7_20191107.png.img.fullhd.medium.png'
        }],
        Comments:[{
            id: shortId.generate(),
            User: {
                id: shortId.generate(),
                nickname: 'hoho',
            },
            content: '개정판?',
        }, {
            id: shortId.generate(),
            User: {
                id: shortId.generate(),
                nickname: 'yyzz',
            },
            content: '사고싶다',
        }]
    }],
    imagePaths: [],
    addPostLoading: false,
    addPostDone: false,
    addPostError: null,
    removePostLoading: false,
    removePostDone: false,
    removePostError: null,
    addCommentLoading: false,
    addCommentDone: false,
    addCommentError: null,
}

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST';
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS';
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

//동적 action creater(액션을 그때그때 생성)
export const addPost = (data) => ({
    type: ADD_POST_REQUEST,
    data,
});

export const addComment = (data) => ({
    type: ADD_COMMENT_REQUEST,
    data,
});

const dummyPost = (data) => ({
    id: data.id,
    content: data.content,
    User: {
        id: 1,
        nickname: '이현호',
    },
    Images: [],
    Comments: [],
});

const dummyComment = (data) => ({
    id: shortId.generate(),
    content: data,
    User: {
        id: 1,
        nickname: '이현호',
    },
});

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST_REQUEST:
            return {
                ...state,
                addPostLoading: true,
                addPostDone: false,
                addPostError: null,
            };
        case ADD_POST_SUCCESS:
            return {
                ...state,
                mainPosts:[dummyPost(action.data), ...state.mainPosts],
                addPostDone: true,
                addPostLoading: false,
            };
        case ADD_POST_FAILURE:
            return{
                ...state,
                addPostLoading: false,
                addPostError: action.error,
            };
        case REMOVE_POST_REQUEST:
            return {
                ...state,
                removePostLoading: true,
                removePostDone: false,
                removePostError: null,
            };
        case REMOVE_POST_SUCCESS:
            return {
                ...state,
                mainPosts: state.mainPosts.filter((v) => v.id !== action.data),
                removePostDone: true,
                removePostLoading: false,
            };
        case REMOVE_POST_FAILURE:
            return{
                ...state,
                removePostLoading: false,
                removePostError: action.error,
            };
        case ADD_COMMENT_REQUEST:
            return {
                ...state,
                addCommentLoading: true,
                addCommentDone: false,
                addCommentError: null,
            };
        case ADD_COMMENT_SUCCESS:{
            //mainPosts에서 id가 action.data.postId와 같은 인덱스 찾기
            const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
            //mainPosts[postIndex]가 변경될 포스트이므로 얕은복사
            const post = {...state.mainPosts[postIndex]};
            //Comments 얕은복사하면서 댓글 넣어주기
            post.Comments = [dummyComment(action.data.content), ...post.Comments];
            //Comments가 얕은복사되어 새로운 객체가 생겼으니 mainPosts도 새로운 객체로 만듬
            const mainPosts = [...state.mainPosts];
            //원래포스트 있던 자리에 post 넣어줌
            mainPosts[postIndex] = post;

            return {
                ...state,
                //메인포스트 변경된값 추가
                mainPosts,
                addCommentDone: true,
                addCommentLoading: false,
            };
        }
        case ADD_COMMENT_FAILURE:
            return{
                ...state,
                addCommentLoading: false,
                addCommentError: action.error,
            };
        default:
            return state;
    };

};

export default reducer;