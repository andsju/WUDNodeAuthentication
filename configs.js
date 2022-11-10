// dotenv
// ========================================
import dotenv from 'dotenv';

// read .env content into variable config
const config = dotenv.config().parsed;

// individual exports
const SITE_NAME = config.SITE_NAME;
const PORT = Number(config.PORT);
const SESSION_SECRET = config.SESSION_SECRET;
const SESSION_MAXAGE = Number(config.SESSION_MAXAGE); 

export { config, SITE_NAME, PORT, SESSION_SECRET, SESSION_MAXAGE };