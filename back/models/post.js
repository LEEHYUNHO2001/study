module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define('Post', {
        //id는 기본적으로 mysql에 들어있다.
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    }, {
        charset: 'utf8mb4', //한글 + 이모티콘
        collate: 'utf8mb4_general_ci',//한글 저장
    }); 
    Post.associate = (db) => {
        db.Post.belongsTo(db.User);
        db.Post.hasMany(db.Comment);
        db.Post.belongsToMany(db.Hashtag, {through: 'PostHashtag'});
        db.Post.hasMany(db.Image);
        db.Post.belongsToMany(db.User, {through: 'Like', as: 'Liked'});
        db.Post.belongsTo(db.Post, {as: 'Retweet'}); //PostId면 헷갈리니 RetweetId로 바꾸어버림
    };
    return Post;
}