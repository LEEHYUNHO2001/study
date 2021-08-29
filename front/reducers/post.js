import produce from 'immer';

export const initialState = {
    mainPosts: [],
    imagePaths: [],
    hasMorePost: true,
    loadPostsLoading: false,
    loadPostsDone: false,
    loadPostsError: null,
    addPostLoading: false,
    addPostDone: false,
    addPostError: null,
    removePostLoading: false,
    removePostDone: false,
    removePostError: null,
    addCommentLoading: false,
    addCommentDone: false,
    addCommentError: null,
};

export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST';
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS';
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE';

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

const reducer = (state = initialState, action) =>     produce(state, (draft) => {
    switch(action.type){
        case LOAD_POSTS_REQUEST:
            draft.loadPostsLoading = true;
            draft.loadPostsDone = false;
            draft.loadPostsError = null;
            break;
            
        case LOAD_POSTS_SUCCESS:
            //기존 게시글에  concat으로 action.data 추가.
            draft.mainPosts = action.data.concat(draft.mainPosts);
            draft.loadPostsDone = true;
            draft.loadPostsLoading = false;
            //50개까지만 더 불러오기
            draft.hasMorePost = draft.mainPosts.length < 50;
            break;

        case LOAD_POSTS_FAILURE:
            draft.loadPostsLoading = false;
            draft.loadPostsError = action.error;
            break;

        case ADD_POST_REQUEST:
            draft.addPostLoading = true;
            draft.addPostDone = false;
            draft.addPostError = null;
            break;
            
        case ADD_POST_SUCCESS:
            draft.mainPosts.unshift(action.data);
            draft.addPostDone = true;
            draft.addPostLoading = false;
            break;

        case ADD_POST_FAILURE:
            draft.addPostLoading = false;
            draft.addPostError = action.error;
            break;

        case REMOVE_POST_REQUEST:
            draft.removePostLoading = true;
            draft.removePostDone = false;
            draft.removePostError = null;
            break;

        case REMOVE_POST_SUCCESS:
            draft.mainPosts = draft.mainPosts.filter((v) => v.id !== action.data);
            draft.removePostDone = true;
            draft.removePostLoading = false;
            break;

        case REMOVE_POST_FAILURE:
            draft.removePostLoading = false;
            draft.removePostError = action.error;
            break;

        case ADD_COMMENT_REQUEST:
            draft.addCommentLoading = true;
            draft.addCommentDone = false;
            draft.addCommentError = null;
            break;

        case ADD_COMMENT_SUCCESS:{  
            //조건을 만족하는 게시글 index 찾기
            const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
            //게시글에 새 댓글 넣어줌
            post.Comments.unshift(action.data);
            draft.addCommentLoading = false;
            draft.addCommentDone = true;
            break;
        }

        case ADD_COMMENT_FAILURE:
            draft.addCommentLoading = false;
            draft.addCommentError = action.error;
            break;

        default:
            break;
    };
});

export default reducer;