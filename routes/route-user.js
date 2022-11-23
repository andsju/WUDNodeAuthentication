import express from 'express';
import { SITE_NAME } from '../configs.js';
const router = express.Router();


import { listUsers } from '../controllers/controller-user.js';

// send json response
router.get("/", (req, res) => {

    res.render("user", {site: SITE_NAME});

    // listUsers().then(data => {
    //     console.log("data", data);
    //     res.json(data);    
    // });
});

export default router;