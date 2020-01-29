import { Sequelize } from "sequelize";

import accessEnv from "#root/helpers/accessEnv";

const DB_URI = accessEnv("DB_URI");

const sequelize = new Sequelize(DB_URI, {
  dialectOptions: {
    charset: "uft8",
    multipleStatements: true
  },
  logging: false
});

export default sequelize;
