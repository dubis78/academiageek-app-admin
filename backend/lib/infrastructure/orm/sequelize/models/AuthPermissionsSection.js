const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auth_permissions_section', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_permission: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'auth_permissions',
        key: 'id'
      }
    },
    id_section: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'auth_sections',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'auth_permissions_section',
<<<<<<< HEAD
    schema: 'public',
=======
    schema: 'auth',
>>>>>>> d34c8572adf068f1f02e60ad40e66e0127ec16d6
    timestamps: false,
    indexes: [
      {
        name: "auth_permissions_section_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
