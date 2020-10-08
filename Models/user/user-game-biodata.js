module.exports = (sequelize, Sequelize) => {
  const usrGameBio = sequelize.define("user_game_biodata", {
    user_game_biodata_id: {
      // type: Sequelize.UUID, // ini buat apa ya?
      type: Sequelize.INTEGER,
      allowNull: false,
      // defaultValue: Sequelize.UUIDV4, // ini buat apa ya?
      primaryKey: true,
      autoIncrement: true, // ini buat apa ya?
    },
    // user_id: {
    //   type: Sequelize.INTEGER,
    //   // type: Sequelize.UUID,  // ini buat apa ya ?
    //   allowNull: false,
    // },
    fullname: {
      type: Sequelize.STRING,
    },
    sex: {
      type: Sequelize.STRING,
    },
    jobs: {
      type: Sequelize.STRING,
    },
  });

  return usrGameBio;
};
