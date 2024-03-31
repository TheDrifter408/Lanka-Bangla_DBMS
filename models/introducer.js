const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('introducer', {
    Introducer_id: {
      type: DataTypes.STRING(8),
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    phone_number: {
      type: DataTypes.STRING(11),
      allowNull: true,
      unique: "phone_number_UNIQUE"
    },
    email: {
      type: DataTypes.STRING(40),
      allowNull: true,
      unique: "email_UNIQUE"
    },
    occupation: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    DOB: {
      type: DataTypes.STRING(25),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'introducer',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Introducer_id" },
        ]
      },
      {
        name: "Introducer_id_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "Introducer_id" },
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
        name: "phone_number_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "phone_number" },
        ]
      },
    ]
  });
};
