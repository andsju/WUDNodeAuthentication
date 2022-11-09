// dotenv
// ========================================
import dotenv from 'dotenv';

// read .env content into variable config
const config = dotenv.config().parsed;

// individual exports
const SITE_NAME = config.SITE_NAME;
const PORT = Number(config.PORT);

export { config, SITE_NAME, PORT };