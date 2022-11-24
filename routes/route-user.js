import express from "express";
import { SITE_NAME } from "../configs.js";
const router = express.Router();

import { listUsers, addUser } from "../controllers/controller-user.js";

router.get("/", (req, res) => {
    res.render("user", { site: SITE_NAME });
});

router.get("/register", (req, res) => {
    res.render("register", { site: SITE_NAME });
});

router.get("/login", (req, res) => {
    res.render("login", { site: SITE_NAME });
});


router.post("/register", (req, res) => {

    // formulärdata finns i req 
    // - se till att express hanterar formulär data som json
    console.log("req.body", req.body);

    // prepare obj reply
    let reply = { result: "", message: "" };

    addUser(req.body)
        .then((data) => {
            console.log("data", data);
            if (data.error !== undefined) {
                reply.result = "fail";
                reply.message = data.error;
            } else {
                reply.result = "success";
                reply.message = "användare sparades till databasen";
            }
        })
        .catch((error) => {
            console.log("error");
        })
        .finally((data) => {
            res.json(reply);
        });
});

router.post("/login", (req, res) => {
    console.log("login...", req.body);

      // prepare obj reply
      let reply = { result: "", message: "" };

    // contoller method...
    

});



// listUsers().then(data => {
//     console.log("data", data);
//     res.json(data);
// });

export default router;