const DataTypes = require('sequelize');
const {Model} = DataTypes;

module.exports = class User extends Model{
    static init(sequelize){
        return super.init({
        //id는 기본적으로 mysql에 들어있다.
        email: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true, //고유한 값
        },
        nickname: {
            type: DataTypes.STRING(30),
            allowNull: false, 
        },
        password: {
            type: DataTypes.STRING(100),
            allowNull: false, 
        },
        provider: {
            type: DataTypes.STRING(10),
            allowNull: false,
            defaultValue: 'local',
        },
        snsId:{
            type: DataTypes.STRING(30),
            allowNull: true,
        },
        }, {
            modelName: 'User',
            tableName: 'users',
            charset: 'utf8',
            collate: 'utf8_general_ci',//한글 저장
            sequelize,
        });
    }
    static associate(db){
        db.User.hasMany(db.Post);
        db.User.hasMany(db.Comment);
        db.User.belongsToMany(db.Post, {through: 'Like', as: 'Liked'}); //사용자와 게시글의 좋아요 관계
        db.User.belongsToMany(db.User, {through: 'Follow', as: 'Followers', foreignKey: 'FollowingId'});
        db.User.belongsToMany(db.User, {through: 'Follow', as: 'Followings', foreignKey: 'FollowerId'});
    }
};