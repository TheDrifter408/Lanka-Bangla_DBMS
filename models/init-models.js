var DataTypes = require("sequelize").DataTypes;
var _authorized_person = require("./authorized_person");
var _bank = require("./bank");
var _bank_branch_name = require("./bank_branch_name");
var _bank_branch_number = require("./bank_branch_number");
var _bank_routing_number = require("./bank_routing_number");
var _bo_account = require("./bo_account");
var _client = require("./client");
var _corporate = require("./corporate");
var _first_account = require("./first_account");
var _introducer = require("./introducer");
var _joint_account = require("./joint_account");
var _kyc = require("./kyc");
var _nominee = require("./nominee");
var _power_of_attorney = require("./power_of_attorney");

function initModels(sequelize) {
  var authorized_person = _authorized_person(sequelize, DataTypes);
  var bank = _bank(sequelize, DataTypes);
  var bank_branch_name = _bank_branch_name(sequelize, DataTypes);
  var bank_branch_number = _bank_branch_number(sequelize, DataTypes);
  var bank_routing_number = _bank_routing_number(sequelize, DataTypes);
  var bo_account = _bo_account(sequelize, DataTypes);
  var client = _client(sequelize, DataTypes);
  var corporate = _corporate(sequelize, DataTypes);
  var first_account = _first_account(sequelize, DataTypes);
  var introducer = _introducer(sequelize, DataTypes);
  var joint_account = _joint_account(sequelize, DataTypes);
  var kyc = _kyc(sequelize, DataTypes);
  var nominee = _nominee(sequelize, DataTypes);
  var power_of_attorney = _power_of_attorney(sequelize, DataTypes);

  bank_branch_name.belongsTo(bank, { as: "bank_code_bank", foreignKey: "bank_code"});
  bank.hasOne(bank_branch_name, { as: "bank_branch_name", foreignKey: "bank_code"});
  bank_branch_number.belongsTo(bank, { as: "bank_code_bank", foreignKey: "bank_code"});
  bank.hasOne(bank_branch_number, { as: "bank_branch_number", foreignKey: "bank_code"});
  bank_routing_number.belongsTo(bank, { as: "bank_code_bank", foreignKey: "bank_code"});
  bank.hasOne(bank_routing_number, { as: "bank_routing_number", foreignKey: "bank_code"});
  client.belongsTo(bank, { as: "bank_account_number_bank", foreignKey: "bank_account_number"});
  bank.hasMany(client, { as: "clients", foreignKey: "bank_account_number"});
  joint_account.belongsTo(bank, { as: "bank_account_number_bank", foreignKey: "bank_account_number"});
  bank.hasOne(joint_account, { as: "joint_account", foreignKey: "bank_account_number"});
  client.belongsTo(bo_account, { as: "bo_account_number_bo_account", foreignKey: "bo_account_number"});
  bo_account.hasOne(client, { as: "client", foreignKey: "bo_account_number"});
  joint_account.belongsTo(bo_account, { as: "bo_account_number_bo_account", foreignKey: "bo_account_number"});
  bo_account.hasOne(joint_account, { as: "joint_account", foreignKey: "bo_account_number"});
  kyc.belongsTo(bo_account, { as: "bo_account_num_bo_account", foreignKey: "bo_account_num"});
  bo_account.hasOne(kyc, { as: "kyc", foreignKey: "bo_account_num"});
  power_of_attorney.belongsTo(bo_account, { as: "bo_number_bo_account", foreignKey: "bo_number"});
  bo_account.hasOne(power_of_attorney, { as: "power_of_attorney", foreignKey: "bo_number"});
  authorized_person.belongsTo(client, { as: "account_number_client", foreignKey: "account_number"});
  client.hasOne(authorized_person, { as: "authorized_person", foreignKey: "account_number"});
  corporate.belongsTo(client, { as: "corp_account_num_client", foreignKey: "corp_account_num"});
  client.hasOne(corporate, { as: "corporate", foreignKey: "corp_account_num"});
  first_account.belongsTo(client, { as: "first_account_number_client", foreignKey: "first_account_number"});
  client.hasOne(first_account, { as: "first_account", foreignKey: "first_account_number"});
  nominee.belongsTo(client, { as: "account_number_client", foreignKey: "account_number"});
  client.hasOne(nominee, { as: "nominee", foreignKey: "account_number"});
  client.belongsTo(introducer, { as: "intro", foreignKey: "intro_id"});
  introducer.hasMany(client, { as: "clients", foreignKey: "intro_id"});
  joint_account.belongsTo(introducer, { as: "intro", foreignKey: "intro_id"});
  introducer.hasMany(joint_account, { as: "joint_accounts", foreignKey: "intro_id"});

  return {
    authorized_person,
    bank,
    bank_branch_name,
    bank_branch_number,
    bank_routing_number,
    bo_account,
    client,
    corporate,
    first_account,
    introducer,
    joint_account,
    kyc,
    nominee,
    power_of_attorney,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
