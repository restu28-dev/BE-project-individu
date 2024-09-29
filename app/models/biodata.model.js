module.exports = (sequelize, DataTypes) => {
    const biodata = sequelize.define("biodata", {
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
  
      alamat: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
  
      email: {
        type: DataTypes.STRING(50),
        allowNull: true  // Kolom ini tidak boleh NULL
      },
  
      no_hp: {
        type: DataTypes.STRING,
        allowNull: true  // Kolom ini boleh NULL jika diperlukan
      }
    }, {
      sequelize,
      tableName: 'biodata',
      timestamps: true,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [
            { name: "id" }
          ]
        }
      ]
    });
  
    return biodata;
  };
  