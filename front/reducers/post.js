export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: '이현호'
        },
        content: 'first comment #해시태그 #익스프레스',
        Images: [{
            src:'https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/XGP7CUGLG5HFNO3WB25C6D6VY4.jpg',
        }, {
            src:'https://nodebird.com/favicon.ico'
        }, {
            src:'https://cdn.cms-twdigitalassets.com/content/dam/blog-twitter/official/ko_kr/products/2019/topics/CB-14444_TopicsCOMMS_7_20191107.png.img.fullhd.medium.png'
        }],
        Comments:[{
            User: {
                nickname: 'hoho',
            },
            content: '개정판?',
        }, {
            User: {
                nickname: 'yyzz',
            },
            content: '사고싶다',
        }]
    }],
    imagePaths: [],
    postAdded: false,
}

const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST,
};

const dummyPost = {
    id: 2,
    content: '더미데이터',
    User: {
        id: 1,
        nickname: '제로초',
    },
    Images: [],
    Comments: [],
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
            return {
                ...state,
                mainPosts:[dummyPost, ...state.mainPosts],
                postAdded: true,
            };
        default:
            return state;
    }

}

export default reducer;