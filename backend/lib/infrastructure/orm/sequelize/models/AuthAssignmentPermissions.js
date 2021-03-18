const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auth_assignment_permissions', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'auth_users',
        key: 'id'
      }
    },
    id_rol: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'auth_roles',
        key: 'id'
      },
      unique: "qu_role_seccion"
    },
    id_permission: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'auth_permissions',
        key: 'id'
      },
      unique: "qu_role_permission"
    },
    id_section: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'auth_sections',
        key: 'id'
      },
      unique: "qu_role_seccion"
    },
    p_create: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    p_read: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    p_update: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    p_remove: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'auth_assignment_permissions',
<<<<<<< HEAD
<<<<<<< HEAD
    schema: 'public',
=======
    schema: 'auth',
>>>>>>> d34c8572adf068f1f02e60ad40e66e0127ec16d6
=======
    schema: 'auth',
>>>>>>> 7b5bd0660146ad3866c43875a6898c650852afec
    timestamps: false,
    indexes: [
      {
        name: "auth_assignment_permissions_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "qu_role_permission",
        unique: true,
        fields: [
          { name: "id_rol" },
          { name: "id_permission" },
        ]
      },
      {
        name: "qu_role_seccion",
        unique: true,
        fields: [
          { name: "id_rol" },
          { name: "id_section" },
        ]
      },
    ]
  });
};
