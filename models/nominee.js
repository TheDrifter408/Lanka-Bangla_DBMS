const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('nominee', {
    account_number: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'client',
        key: 'account_number'
      }
    },
    title: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    phone_number: {
      type: DataTypes.STRING(11),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    state: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    post_code: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    nid: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    dateofbirth: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'nominee',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "account_number" },
        ]
      },
    ]
  });
};
