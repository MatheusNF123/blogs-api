module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { 
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    displayName: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING
    },
    image:{
      type: DataTypes.STRING
    }
  },
    {
      timestamps: false,
      underscored: true,
      tableName: 'users'
    });

    // Patient_surgeries.associate = (models) => {
    //   models.Patient.belongsToMany(models.Surgerie,{
    //     foreignKey: 'patientId',
    //     otherKey: 'surgeryId',
    //     through: Patient_surgeries,
    //     as: 'sugeries'
    //   })
    //   models.Surgerie.belongsToMany(models.Patient,{
    //     foreignKey: 'surgeryId',
    //     otherKey: 'patientId',
    //     through: Patient_surgeries,
    //     as: 'patients'
    //   })
    // }

  return User;
};