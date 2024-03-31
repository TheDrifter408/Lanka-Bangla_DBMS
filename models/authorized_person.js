const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('authorized_person', {
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
      type: DataTypes.STRING(30),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    spouse_name: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    mother_name: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    father_name: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    nid: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    address: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    country: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    dateofbirth: {
      type: DataTypes.DATE,
      allowNull: true
    },
    occupation: {
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
    tableName: 'authorized_person',
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
    ]
  });
};
