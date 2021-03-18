const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auth_sections', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    section_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    section_parent: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    section_link: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: "uq_link_seccion"
    },
    section_order: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    isadmin: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      comment: "Estas secciones solo se le van a cargar a los usuarios que tienen que en auth_user en su campo admin 1"
    },
    isprivate: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      comment: "Estas secciones no se cargan en el menu, hacen parte de secciones que son internas de cada funcionalida. Deben ser asignadas a los usuarios, pero no se cargan en el menu principal. "
    }
  }, {
    sequelize,
    tableName: 'auth_sections',
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
        name: "auth_sections_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "uq_link_seccion",
        unique: true,
        fields: [
          { name: "section_link" },
        ]
      },
    ]
  });
};
