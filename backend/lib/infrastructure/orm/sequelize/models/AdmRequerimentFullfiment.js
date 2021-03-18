const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adm_requeriment_fullfiment', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_prospect: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'adm_prospects_preference',
        key: 'id'
      }
    },
    id_detailed_req: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'adm_detailed_requeriment',
        key: 'id'
      }
    },
    url_validation: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    id_file_validation: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'main_files_manager',
        key: 'id'
      }
    },
    upload_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
<<<<<<< HEAD
    state: {
      type: DataTypes.ENUM("en revision","aprobado","reprobado"),
=======
    comment: {
      type: DataTypes.STRING(200),
>>>>>>> 7b5bd0660146ad3866c43875a6898c650852afec
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'adm_requeriment_fullfiment',
    schema: 'adm',
    timestamps: false,
    indexes: [
      {
        name: "adm_requeriment_fullfiment_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
