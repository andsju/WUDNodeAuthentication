// dependencies - import => package.json "type": "module",
// ========================================
import express from "express";
import session from "express-session";

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

    // // propety views - our own setting to hold number of times user navigates on site
    // // condition if req.session.views not undefined
    // if (req.session.views) {

    //     // req.session.views is a number - increase
    //     req.session.views++;
        
    // } else {
        
    //     // req.session.views is undefined - set value to 1
    //     req.session.views = 1;
    // }

    // oneliner if condition - ternary operator    ? :  ;
    req.session.views ? req.session.views++ : req.session.views = 1;
    
    // show number of times users navigates before session been destroyed
    console.log("req.session.views", req.session.views);

    next();
});


app.get("/", (req, res) => {
    res.send(`Hello world ${config.SITE_NAME}`);
});


// listen on server requests
// ========================================
app.listen(PORT, (req, res) => {
    console.log(`Server running on port ${PORT}`);
});
