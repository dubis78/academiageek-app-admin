var DataTypes = require("sequelize").DataTypes;
var _auth_assignment_permissions = require("./AuthAssignmentPermissions");
var _auth_permissions = require("./AuthPermissions");
var _auth_permissions_section = require("./AuthPermissionsSection");
var _auth_roles = require("./AuthRoles");
var _auth_sections = require("./AuthSections");
var _auth_session = require("./AuthSession");
var _auth_user_roles = require("./AuthUserRoles");
var _auth_user_status = require("./AuthUserStatus");
var _auth_users = require("./AuthUsers");

function initModels(sequelize) {
  var auth_assignment_permissions = _auth_assignment_permissions(sequelize, DataTypes);
  var auth_permissions = _auth_permissions(sequelize, DataTypes);
  var auth_permissions_section = _auth_permissions_section(sequelize, DataTypes);
  var auth_roles = _auth_roles(sequelize, DataTypes);
  var auth_sections = _auth_sections(sequelize, DataTypes);
  var auth_session = _auth_session(sequelize, DataTypes);
  var auth_user_roles = _auth_user_roles(sequelize, DataTypes);
  var auth_user_status = _auth_user_status(sequelize, DataTypes);
  var auth_users = _auth_users(sequelize, DataTypes);

  auth_assignment_permissions.belongsTo(auth_permissions, { as: "id_permission_auth_permission", foreignKey: "id_permission"});
  auth_permissions.hasOne(auth_assignment_permissions, { as: "auth_assignment_permission", foreignKey: "id_permission"});
  auth_permissions_section.belongsTo(auth_permissions, { as: "id_permission_auth_permission", foreignKey: "id_permission"});
  auth_permissions.hasMany(auth_permissions_section, { as: "auth_permissions_sections", foreignKey: "id_permission"});
  auth_assignment_permissions.belongsTo(auth_roles, { as: "id_rol_auth_role", foreignKey: "id_rol"});
  auth_roles.hasMany(auth_assignment_permissions, { as: "auth_assignment_permissions", foreignKey: "id_rol"});
  auth_user_roles.belongsTo(auth_roles, { as: "id_role_auth_role", foreignKey: "id_role"});
  auth_roles.hasMany(auth_user_roles, { as: "auth_user_roles", foreignKey: "id_role"});
  auth_assignment_permissions.belongsTo(auth_sections, { as: "id_section_auth_section", foreignKey: "id_section"});
  auth_sections.hasMany(auth_assignment_permissions, { as: "auth_assignment_permissions", foreignKey: "id_section"});
  auth_permissions_section.belongsTo(auth_sections, { as: "id_section_auth_section", foreignKey: "id_section"});
  auth_sections.hasMany(auth_permissions_section, { as: "auth_permissions_sections", foreignKey: "id_section"});
  auth_users.belongsTo(auth_user_status, { as: "status_auth_user_status", foreignKey: "status"});
  auth_user_status.hasMany(auth_users, { as: "auth_users", foreignKey: "status"});
  auth_assignment_permissions.belongsTo(auth_users, { as: "id_user_auth_user", foreignKey: "id_user"});
  auth_users.hasMany(auth_assignment_permissions, { as: "auth_assignment_permissions", foreignKey: "id_user"});
  auth_user_roles.belongsTo(auth_users, { as: "id_user_auth_user", foreignKey: "id_user"});
  auth_users.hasMany(auth_user_roles, { as: "auth_user_roles", foreignKey: "id_user"});

  return {
    auth_assignment_permissions,
    auth_permissions,
    auth_permissions_section,
    auth_roles,
    auth_sections,
    auth_session,
    auth_user_roles,
    auth_user_status,
    auth_users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
