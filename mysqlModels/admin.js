module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define('admin', {
      username: {
        type: DataTypes.STRING
      },
      password: {
        type: DataTypes.STRING
      },
      email:{
        type:DataTypes.STRING
      }
    });
    return Model;
}