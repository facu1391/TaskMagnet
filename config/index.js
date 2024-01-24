import dotenv from "dotenv";
dotenv.config();

const { NODE_ENV, PORT, MONGO_USERNAME, MONGO_PASSWORD, MONGO_HOSTNAME, MONGO_DATABASE } = process.env;

const config = {
    dev: NODE_ENV === "production",
    port: PORT || 5555,
    databaseUrl: `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}/?retryWrites=true&w=majority`,
    databaseName: MONGO_DATABASE
}

export default config;