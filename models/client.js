const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('client', {
    account_number: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    client_code: {
      type: DataTypes.STRING(15),
      allowNull: true,
      unique: "client_code_UNIQUE"
    },
    title: {
      type: DataTypes.STRING(3),
      allowNull: true
    },
    client_name: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    father_name: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    mother_name: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    spouse_name: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    country: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    permanent_city: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    permanent_post: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
    branch: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    phone_number: {
      type: DataTypes.STRING(13),
      allowNull: true,
      unique: "phone_number_UNIQUE"
    },
    operation: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    intro_id: {
      type: DataTypes.STRING(45),
      allowNull: true,
      references: {
        model: 'introducer',
        key: 'Introducer_id'
      }
    },
    bo_account_number: {
      type: DataTypes.STRING(45),
      allowNull: true,
      references: {
        model: 'bo_account',
        key: 'bo_number'
      },
      unique: "bo_account_number"
    },
    bank_account_number: {
      type: DataTypes.STRING(45),
      allowNull: true,
      references: {
        model: 'bank',
        key: 'account'
      }
    }
  }, {
    sequelize,
    tableName: 'client',
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
      {
        name: "account_number_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "account_number" },
        ]
      },
      {
        name: "client_code_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "client_code" },
        ]
      },
      {
        name: "bo_number_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bo_account_number" },
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
        name: "intro_id_idx",
        using: "BTREE",
        fields: [
          { name: "intro_id" },
        ]
      },
      {
        name: "bank_account_number_idx",
        using: "BTREE",
        fields: [
          { name: "bank_account_number" },
        ]
      },
    ]
  });
};
