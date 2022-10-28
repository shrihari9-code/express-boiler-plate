module.exports = (sequelize, DataTypes) => {
    const Model = sequelize.define('marks', {
      Studentid: {
        type: DataTypes.INTEGER,
        primaryKey:true
      },
      Courseid: {
        type: DataTypes.INTEGER,
        foriegnKey:true
      },
      Physics: {
        type: DataTypes.INTEGER
      },
      Chemistry: {
        type: DataTypes.INTEGER
      },
      Maths:{
        type:DataTypes.INTEGER
      },
      Biology:{
        type:DataTypes.INTEGER
      }
    })

     Model.associate=function(mysqlModel){
    this.belongsTo(mysqlModel.student,{foreignKey:'CourseId'})
  }
    return Model;
}
