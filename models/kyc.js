const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('kyc', {
    bo_account_num: {
      type: DataTypes.STRING(16),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'bo_account',
        key: 'bo_number'
      }
    },
    account_name: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    type_of_account: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    intro_name: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    source_of_fund: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    passport_num: {
      type: DataTypes.STRING(45),
      allowNull: true,
      unique: "passport_num_UNIQUE"
    },
    tin_num: {
      type: DataTypes.STRING(45),
      allowNull: true,
      unique: "tin_num_UNIQUE"
    },
    var_reg_no: {
      type: DataTypes.STRING(45),
      allowNull: true,
      unique: "var_reg_no_UNIQUE"
    },
    driving_license_no: {
      type: DataTypes.STRING(45),
      allowNull: true,
      unique: "driving_license_no_UNIQUE"
    },
    signature: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'kyc',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bo_account_num" },
        ]
      },
      {
        name: "bo_account_num_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "bo_account_num" },
        ]
      },
      {
        name: "tin_num_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "tin_num" },
        ]
      },
      {
        name: "passport_num_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "passport_num" },
        ]
      },
      {
        name: "driving_license_no_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "driving_license_no" },
        ]
      },
      {
        name: "var_reg_no_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "var_reg_no" },
        ]
      },
    ]
  });
};
