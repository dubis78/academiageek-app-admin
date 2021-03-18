const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auth_permissions', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    permission_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'auth_permissions',
<<<<<<< HEAD
    schema: 'public',
=======
    schema: 'auth',
>>>>>>> d34c8572adf068f1f02e60ad40e66e0127ec16d6
    timestamps: false,
    indexes: [
      {
        name: "auth_permissions_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
