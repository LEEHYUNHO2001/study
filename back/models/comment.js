module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define('Comment', {
        //id는 기본적으로 mysql에 들어있다.
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    }, {
        charset: 'utf8mb4', //한글 + 이모티콘
        collate: 'utf8mb4_general_ci',//한글 저장
    }); 
    Comment.associate = (db) => {
        db.Comment.belongsTo(db.User);
        db.Comment.belongsTo(db.Post);
    };
    return Comment;
}