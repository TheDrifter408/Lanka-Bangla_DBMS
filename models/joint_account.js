const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('joint_account', {
    joint_account_number: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    spouse_name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    mother_name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    father_name: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    present_address: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    permanent_address: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    country: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    phone_number: {
      type: DataTypes.STRING(45),
      allowNull: true,
      unique: "phone_number_UNIQUE"
    },
    intro_id: {
      type: DataTypes.STRING(8),
      allowNull: true,
      references: {
        model: 'introducer',
        key: 'Introducer_id'
      }
    },
    bo_account_number: {
      type: DataTypes.STRING(16),
      allowNull: true,
      references: {
        model: 'bo_account',
        key: 'bo_number'
      },
      unique: "bo_account_no"
    },
    bank_account_number: {
      type: DataTypes.STRING(20),
      allowNull: true,
      references: {
        model: 'bank',
        key: 'account'
      },
      unique: "bank_account_no"
    }
  }, {
    sequelize,
    tableName: 'joint_account',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "joint_account_number" },
        ]
      },
      {
        name: "joint_account_number_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "joint_account_number" },
        ]
      },
      {
        name: "bo_account_number_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bo_account_number" },
        ]
      },
      {
        name: "bank_account_number_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bank_account_number" },
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
        name: "introducer_id_idx",
        using: "BTREE",
        fields: [
          { name: "intro_id" },
        ]
      },
    ]
  });
};
