const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bank_branch_name', {
    bank_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'bank',
        key: 'bank_code'
      }
    },
    branch_name: {
      type: DataTypes.STRING(15),
      allowNull: true,
      unique: "branch_name_UNIQUE"
    }
  }, {
    sequelize,
    tableName: 'bank_branch_name',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bank_code" },
        ]
      },
      {
        name: "branch_name_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "branch_name" },
        ]
      },
    ]
  });
};
