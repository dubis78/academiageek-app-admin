const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auth_session', {
    sid: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    sess: {
      type: DataTypes.JSON,
      allowNull: false
    },
    expire: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'auth_session',
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
        name: "IDX_session_expire",
        fields: [
          { name: "expire" },
        ]
      },
      {
        name: "session_pkey",
        unique: true,
        fields: [
          { name: "sid" },
        ]
      },
    ]
  });
};
