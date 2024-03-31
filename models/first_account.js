const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('first_account', {
    first_account_number: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'client',
        key: 'account_number'
      }
    },
    nid: {
      type: DataTypes.STRING(10),
      allowNull: true,
      unique: "nid_UNIQUE"
    },
    dateOfbirth: {
      type: DataTypes.DATE,
      allowNull: true
    },
    occupation: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    phone_number: {
      type: DataTypes.STRING(11),
      allowNull: true,
      unique: "phone_number_UNIQUE"
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: true,
      unique: "email_UNIQUE"
    },
    nationality: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    photo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    signature: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'first_account',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "first_account_number" },
        ]
      },
      {
        name: "first_account_number_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "first_account_number" },
        ]
      },
      {
        name: "nid_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nid" },
        ]
      },
      {
        name: "phone_number_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "phone_number" },
        ]
      },
      {
        name: "email_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
    ]
  });
};
