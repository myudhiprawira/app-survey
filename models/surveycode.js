'use strict';
module.exports = (sequelize, DataTypes) => {
  const surveyCode = sequelize.define('surveyCode', {
    code: DataTypes.STRING
  }, {});
  surveyCode.associate = function(models) {
    // associations can be defined here
  };
  return surveyCode;
};