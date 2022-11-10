// dependencies - import => package.json "type": "module",
// ========================================
import express from "express";
import session from "express-session";
import path from 'path';

// local modules
import { config, SITE_NAME, PORT, SESSION_SECRET, SESSION_MAXAGE } from "./configs.js";

// express app environment
// ========================================
const app = express();

// sessions
// ========================================
app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: SESSION_MAXAGE },
    })
);


// routes
// ========================================

// check sessions
// middleware - make sure using next as 3rd argument
app.get('*', (req, res, next) => {

    // oneliner if condition - ternary operator  ? :  ;
    req.session.views ? req.session.views++ : req.session.views = 1;
    
    // show number of times users navigates before session been destroyed
    console.log("req.session.views", req.session.views);

    next();
});


app.get("/", (req, res) => {
    // res.send(`Hello world ${config.SITE_NAME}`);

    // send a file using express
    res.sendFile(path.resolve('./public/index.html'));
});


// listen on server requests
// ========================================
app.listen(PORT, (req, res) => {
    console.log(`Server running on port ${PORT}`);
});
