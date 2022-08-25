const DataTypes = require('sequelize');
const {Model} = DataTypes;

module.exports = class Post extends Model{
    static init(sequelize){
        return super.init({
        //id는 기본적으로 mysql에 들어있다.
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        }, {
            modelName: 'Post',
            tableName: 'posts',
            charset: 'utf8mb4', //한글 + 이모티콘
            collate: 'utf8mb4_general_ci',//한글 저장
            sequelize,
        });
    }
    static associate(db){
        db.Post.belongsTo(db.User); //post.addUser, post.getUser, post.setUser
        db.Post.hasMany(db.Comment); //post.addComments, post.getComments, post.setComments
        db.Post.belongsToMany(db.Hashtag, {through: 'PostHashtag'});
        db.Post.hasMany(db.Image);
        db.Post.belongsToMany(db.User, {through: 'Like', as: 'Likers'}); //post.addLikers, post.removeLikers
        db.Post.belongsTo(db.Post, {as: 'Retweet'}); //PostId면 헷갈리니 RetweetId로 바꾸어버림
    }
};