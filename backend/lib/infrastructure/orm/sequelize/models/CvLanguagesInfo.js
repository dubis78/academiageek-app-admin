const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cv_languages_info', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_cv_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cv_personal_info',
        key: 'id'
      }
    },
    id_language: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'main_languages',
        key: 'id'
      }
    },
    reading: {
<<<<<<< HEAD
      type: DataTypes.ENUM("Básico","Intermedio","Avanzado"),
      allowNull: true
    },
    writing: {
      type: DataTypes.ENUM("Básico","Intermedio","Avanzado"),
      allowNull: true
    },
    speaking: {
      type: DataTypes.ENUM("Básico","Intermedio","Avanzado"),
=======
      type: DataTypes.ENUM("Avanzado","Básico","Intermedio"),
      allowNull: true
    },
    writing: {
      type: DataTypes.ENUM("Avanzado","Básico","Intermedio"),
      allowNull: true
    },
    speaking: {
      type: DataTypes.ENUM("Avanzado","Básico","Intermedio"),
>>>>>>> 7b5bd0660146ad3866c43875a6898c650852afec
      allowNull: true
    },
    id_lang_certf: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'main_files_manager',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'cv_languages_info',
    schema: 'cv',
    timestamps: false,
    indexes: [
      {
        name: "cv_languages_info_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
