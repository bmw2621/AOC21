import { config as configEnv } from "dotenv";
configEnv();

export default `session=${process.env.AOC_COOKIE}`;
