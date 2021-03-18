const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auth_roles', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    role_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    parent: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'auth_roles',
<<<<<<< HEAD
    schema: 'public',
=======
    schema: 'auth',
>>>>>>> d34c8572adf068f1f02e60ad40e66e0127ec16d6
    timestamps: false,
    indexes: [
      {
        name: "auth_roles_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
