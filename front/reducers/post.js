import shortId from 'shortid';
import produce from 'immer';
import faker from 'faker';

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

export const generateDummyPost = (number) => Array(number).fill().map(() => ({
    id: shortId.generate(),
    User: {
        id: shortId.generate(),
        nickname: faker.name.findName(),
    },
    content: faker.lorem.paragraph(),
    Images: [
        {
            src: faker.image.image(),
        }
    ],
    Comments: [{
        User: {
            id: shortId.generate(),
            nickname: faker.name.findName(),
        },
        content: faker.lorem.sentence(),
    }],
}));

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

const reducer = (state = initialState, action) =>     produce(state, (draft) => {
    switch(action.type){
        case LOAD_POSTS_REQUEST:
            draft.loadPostsLoading = true;
            draft.loadPostsDone = false;
            draft.loadPostsError = null;
            break;
            
        case LOAD_POSTS_SUCCESS:
            //action.data에 더미데이터 10개 들어있을것임. 기존데이터랑 합쳐서 보여줌
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
            draft.mainPosts.unshift(dummyPost(action.data));
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
            const post = draft.mainPosts.find((v) => v.id === action.data.postId);
            //게시글에 새 댓글 넣어줌
            post.Comments.unshift(dummyComment(action.data.content));
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