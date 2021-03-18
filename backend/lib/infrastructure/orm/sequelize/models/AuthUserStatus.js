const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auth_user_status', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_status: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'auth_user_status',
<<<<<<< HEAD
    schema: 'public',
=======
    schema: 'auth',
>>>>>>> d34c8572adf068f1f02e60ad40e66e0127ec16d6
    timestamps: false,
    indexes: [
      {
        name: "auth_user_status_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
