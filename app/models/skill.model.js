module.exports = (sequelize, DataTypes) => {

    const skill = sequelize.define("skill", {
  
          id: {
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true
  
          },  
  
         nama: {
            type: DataTypes.STRING(50),
            allowNull: true
  
          },
  
          // deskripsi: {
          //   autoIncrement: false,
          //   type: DataTypes.TEXT,
          //   allowNull: false,
          //   primaryKey: false 
          // },
  
    }, {
  
      sequelize,
      tableName: 'skill',
      timestamps: true,
      indexes: [
  
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "id" },
          ]
        },
      ]
    });
  
  
  
    return skill;
  
  }; 