const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('bo_account', {
    bo_number: {
      type: DataTypes.STRING(16),
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(40),
      allowNull: true,
      unique: "email_UNIQUE"
    },
    bo_nid: {
      type: DataTypes.STRING(16),
      allowNull: true,
      unique: "bo_nid_UNIQUE"
    },
    occupation: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DOB: {
      type: DataTypes.DATE,
      allowNull: true
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
    },
    account_type: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    operation_type: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    opening_date: {
      type: DataTypes.STRING(25),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'bo_account',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bo_number" },
        ]
      },
      {
        name: "bo_number_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bo_number" },
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
      {
        name: "bo_nid_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bo_nid" },
        ]
      },
    ]
  });
};
