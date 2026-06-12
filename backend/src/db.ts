import postgres from "postgres";
import dotenv from "dotenv";

dotenv.config();
const sql = postgres();

export default sql;
