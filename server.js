// dependencies - import => package.json "type": "module",
// ========================================
import express from 'express';


// local modules
import { config, SITE_NAME, PORT } from './configs.js';


// express app environment
// ========================================
const app = express();


// routes
// ========================================
app.get('/', (req, res) => {
    res.send(`Hello world ${config.SITE_NAME}`);
});


// listen on server requests
// ========================================
app.listen(PORT, (req, res) => {
    console.log(`Server running on port ${PORT}`);
});