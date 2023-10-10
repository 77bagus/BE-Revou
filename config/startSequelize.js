import { Sequelize } from "sequelize";

export const startSequelize = async (sequelize) => {
  try {
    await sequelize.authenticate();
    await sequelize.sync({ alter: true });
    console.log("Connection to database established!");
    
  } catch (e) {
    console.error("Connection to database failure!", e);
  }
};