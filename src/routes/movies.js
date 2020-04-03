const {Router} = require("express");
const router = Router();
const _ = require("underscore");

const peliculas = require("../sample.json");
//console.log(peliculas);

router.get("/", (req,res) =>{
    res.json(peliculas);
});

router.post('/', (req,res) => {
    const {title, director, year, rating } = req.body;
    if(title && director && year && rating){
        const id = peliculas.length +1;
        const newMovie = {...req.body, id}
        //console.log(newMovie);
        peliculas.push(newMovie);
        res.json(peliculas);
    }else{
        res.status(500).json({error:"Hubo un error"}); 
    }
});


router.delete("/:id", (req,res) =>{
    const {id} = req.params;

    _.each(peliculas, (pelicula, i) =>{
        if(pelicula.id == id){
            peliculas.splice(i,1);
        }
    });
    res.send(peliculas);
});

router.put("/:id", (req, res)=>{
    const {id} = req.params;

    const { title, director, year, rating} = req.body;
    if(title && director&& year && rating){
        _.each(peliculas, (movie, i)=>{
            if(movie.id == id){
                movie.title = title;
                movie.director = director;
                movie.year = year;
                movie.rating = rating;
            }
        });
        res.json(peliculas);
    }else{
        res.status(500).json({error: "Hubo un error."});
    }
 
});

module.exports = router;