const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id:{
         dataType: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true
      },
      name:{
         dataType: DataTypes.STRING,
         allowNull: false
      },
      status:{
         dataType: DataTypes.ENUM("Alive", "Dead", "unknown"),
         allowNull: false
      },
      origin:{
         dataType: DataTypes.STRING,
         allowNull: false
      },
      image:{
         dataType: DataTypes.STRING,
         allowNull: false
      }
   }, { timestamps: false });
};
