const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('corporate', {
    corp_account_num: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'client',
        key: 'account_number'
      }
    },
    company_name: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'corporate',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "corp_account_num" },
        ]
      },
      {
        name: "corp_account_num_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "corp_account_num" },
        ]
      },
    ]
  });
};
