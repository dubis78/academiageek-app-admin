const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cv_personal_info', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'auth_users',
        key: 'id'
      }
    },
    id_status: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    document_type: {
      type: DataTypes.ENUM("CC","TI","CE","PA","Otro"),
      allowNull: true
    },
    document: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: "cv_personal_info_document_key"
    },
    gender: {
      type: DataTypes.ENUM("Masculino","Femenino","Otro"),
      allowNull: true
    },
    birth_date: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    id_birth_country: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'main_country',
        key: 'id'
      }
    },
    id_birth_city: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'main_city',
        key: 'id'
      }
    },
    address: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    socioeconomic_status: {
      type: DataTypes.ENUM("1","2","3","4","5","6"),
      allowNull: true
    },
    citizenship: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    scolarity: {
      type: DataTypes.ENUM("Bachiller","Técnico","Tecnólogo","Profesional","Especialista","Maestría","Doctorado","Otro"),
      allowNull: true
    },
    disability: {
      type: DataTypes.ENUM("Ninguna","Movilidad","Auditiva o hipoacusia","Visual","Cognitiva","Afectaciones psicosociales"),
      allowNull: true
    },
    population_type: {
      type: DataTypes.ENUM("Indígena","Afrodescendiente","LGBT+","Desplazado","Mujer cabeza de hogar","Migrante no regularizado","Migrante regularizado","Colombiano retornado","Otro"),
      allowNull: true
    },
    residence_phone: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    facebook_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    twitter_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    linkedin_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    github_url: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    id_photo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'main_files_manager',
        key: 'id'
      }
    },
    id_cv_file: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'main_files_manager',
        key: 'id'
      }
    },
    registration_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    sequelize,
    tableName: 'cv_personal_info',
    schema: 'cv',
    timestamps: false,
    indexes: [
      {
        name: "cv_personal_info_document_key",
        unique: true,
        fields: [
          { name: "document" },
        ]
      },
      {
        name: "cv_personal_info_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
