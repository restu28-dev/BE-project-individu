module.exports = (sequelize, DataTypes) => {

    const Pendidikan = sequelize.define("pendidikan", {
  
          id: {
            autoIncrement: true,
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true 
          },  
  
         sekolah: {
            type: DataTypes.STRING,
            allowNull: true 
          },

          nama_sekolah: {
            type: DataTypes.STRING,
            allowNull: true 
          },
  
          // jurusan: {
          //   autoIncrement: false,
          //   type: DataTypes.STRING(50),
          //   allowNull: false,
          //   primaryKey: false
          // },
  
          // mulai : {
          //   autoIncrement: false,
          //   type: DataTypes.STRING(50),
          //   allowNull: false,
          //   primaryKey: false
          // },

          // tamat : {
          //   autoIncrement: false,
          //   type: DataTypes.STRING(50),
          //   allowNull: false,
          //   primaryKey: false
          // },
  
    }, {
  
      sequelize,
      tableName: 'pendidikan',
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
  
  
  
    return Pendidikan;
  }; 