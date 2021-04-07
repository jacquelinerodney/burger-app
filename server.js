const require = require ("express");
const exphbs = require ("express-handlebars");
const app = express ();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

//parse application json
app.use(express.urlencoded({extended: true }));
app.use(express.json());

//handlebars
app.engine('handlebars', exphbs ({defaultLayout: 'main'}));
app.set('vew engine', 'handlebars');


//routes
const route = require('.contollers/burgerController.js');
app.use (routes);

//listening on port
app.listen(PORT, () =>
    console.log(`Server listening on port ${PORT}`)

);