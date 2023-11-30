import { Dialect, Sequelize } from "sequelize";
export let sequelize = new Sequelize("sqlite::memory:");
import { CONFIG } from "../config";
if (process.env.NODE_ENV !== "test") {
	const connString = `postgres://${CONFIG.dbUserName}:${CONFIG.dbPassword}@${CONFIG.dbHost}/${CONFIG.dbName}`;
	sequelize = new Sequelize(connString);
}
