const {Router} = require("express");
const router = Router();

//Routes
router.get("/test", (req,res) =>{
    const data = {
        "name":"Luis",
        "website": "www.google.com"
    }
    res.json(data);
});

module.exports = router;