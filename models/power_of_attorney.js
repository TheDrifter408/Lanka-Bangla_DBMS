const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('power_of_attorney', {
    bo_number: {
      type: DataTypes.STRING(16),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'bo_account',
        key: 'bo_number'
      }
    },
    CDBL_account_no: {
      type: DataTypes.STRING(45),
      allowNull: true,
      unique: "CDBL_account_no_UNIQUE"
    },
    name_of_account_holder: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    attorney_name: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    attorney_address: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    attorney_number: {
      type: DataTypes.STRING(11),
      allowNull: true,
      unique: "attorney_number_UNIQUE"
    },
    attorney_passport_no: {
      type: DataTypes.STRING(45),
      allowNull: true,
      unique: "attorney_passport_no_UNIQUE"
    },
    attorney_country: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    attorney_nationality: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    attorney_dob: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    effective_date: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'power_of_attorney',
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
        name: "CDBL_account_no_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "CDBL_account_no" },
        ]
      },
      {
        name: "attorney_passport_no_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "attorney_passport_no" },
        ]
      },
      {
        name: "attorney_number_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "attorney_number" },
        ]
      },
    ]
  });
};
