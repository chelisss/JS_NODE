const express = require("express");
const morgan = require("morgan");

const app = express();

//Settings
app.set("port", process.env.PORT || 3000);
app.set("json spaces",2);

//Middleware
app.use(morgan("dev"));

app.use(express.json());//Nos permite recibir formatos JSON
app.use(express.urlencoded({extended: false})); //Nos permite entender datos que vienen de formularios


//Routes
app.use(require('./routes/index'));
app.use('/api/movies',require('./routes/movies'));



//Starting the server
app.listen(app.get("port"), () => {
    console.log(`Server on port ${3000}`);
});