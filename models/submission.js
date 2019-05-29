'use strict';
module.exports = (sequelize, DataTypes) => {
  const submission = sequelize.define('submission', {
    code: DataTypes.STRING,
    score: DataTypes.FLOAT,
    answers: DataTypes.STRING
  }, {});
  submission.associate = function(models) {
    // associations can be defined here
  };
  return submission;
};
