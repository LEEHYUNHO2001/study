export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: '이현호'
        },
        content: 'first comment #해시태그 #익스프레스',
        img: [{
            src='https://cloudfront-ap-northeast-1.images.arcpublishing.com/chosunbiz/XGP7CUGLG5HFNO3WB25C6D6VY4.jpg',
            src='https://cdn.cms-twdigitalassets.com/content/dam/blog-twitter/official/ko_kr/products/2019/topics/CB-14444_TopicsCOMMS_7_20191107.png.img.fullhd.medium.png'
        }]
    }],
}

const reducer = (state = initialState, action) => {
    switch(action.type){

        default:
            return state;
    }

}

export default reducer;