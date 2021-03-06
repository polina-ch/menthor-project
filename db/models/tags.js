'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Menthor,Enteresses, Practis}) {
      // define association here
      this.belongsToMany(Menthor,({through:'Enteresses', foreignKey:'tag_id'}))
      this.belongsToMany(Practis,({through:'Enteresses', foreignKey:'practical_id'}))

    }
  };
  Tags.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tags',
  });
  return Tags;
};
