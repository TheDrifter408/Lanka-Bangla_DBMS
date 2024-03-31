const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bank_routing_number', {
    bank_code: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'bank',
        key: 'bank_code'
      }
    },
    routing_number: {
      type: DataTypes.STRING(10),
      allowNull: true,
      unique: "routing_number_UNIQUE"
    }
  }, {
    sequelize,
    tableName: 'bank_routing_number',
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
        name: "routing_number_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "routing_number" },
        ]
      },
    ]
  });
};
