const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bank', {
    bank_code: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    account: {
      type: DataTypes.STRING(20),
      allowNull: true,
      unique: "account_UNIQUE"
    }
  }, {
    sequelize,
    tableName: 'bank',
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
        name: "bank_code_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bank_code" },
        ]
      },
      {
        name: "bank_code",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bank_code" },
        ]
      },
      {
        name: "bank_code_2",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bank_code" },
        ]
      },
      {
        name: "account_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "account" },
        ]
      },
    ]
  });
};
