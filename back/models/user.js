module.exports = (sequelize, DataTypes) => {
    //Mysql 에서 users로 테이블 생성됨
    const User = sequelize.define('User', {
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
        charset: 'utf8',
        collate: 'utf8_general_ci',//한글 저장
    }); 
    User.associate = (db) => {
        db.User.hasMany(db.Post);
        db.User.hasMany(db.Comment);
        db.User.belongsToMany(db.Post, {through: 'Like', as: 'Likers'}); //사용자와 게시글의 좋아요 관계
        db.User.belongsToMany(db.User, {through: 'Follow', as: 'Followers', foreignKey: 'FollowingId'});
        db.User.belongsToMany(db.User, {through: 'Follow', as: 'Followings', foreignKey: 'FollowerId'});
    };
    return User;
}