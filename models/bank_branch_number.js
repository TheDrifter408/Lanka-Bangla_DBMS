const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bank_branch_number', {
    bank_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'bank',
        key: 'bank_code'
      }
    },
    branch_no: {
      type: DataTypes.STRING(45),
      allowNull: true,
      unique: "branch_no_UNIQUE"
    }
  }, {
    sequelize,
    tableName: 'bank_branch_number',
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
        name: "branch_no_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "branch_no" },
        ]
      },
    ]
  });
};
