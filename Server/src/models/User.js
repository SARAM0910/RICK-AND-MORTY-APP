const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
      id:{
         dataType: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true
      },
      email:{
         dataType: DataTypes.STRING,
         allowNull: false,
         isEmail: true
      },
      password:{
         dataType: DataTypes.STRING,
         allowNull: false
      }
   }, 
   { timestamps: false });
};
