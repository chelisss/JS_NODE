const {Router} = require("express");
const router = Router();

const peliculas = require("../sample.json");
//console.log(peliculas);

router.get("/", (req,res) =>{
    res.send(peliculas);
});

router.post('/', (req,res) => {
    console.log(req.body);
    res.send("Recibido");
});

module.exports = router;