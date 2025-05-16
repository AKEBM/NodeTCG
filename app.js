const express = require ("express");
const fileUpload = require ("express-fileupload");
const sharp = require('sharp')


const path = require ("path");
const fs = require ("fs");
const { engine } = require("express-handlebars");
const { NONAME } = require("dns");
const { start } = require("repl");

const app = express();
const port = 3000;

app.engine('handlebars', engine())
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, "views"))



app.use(express.static(path.join(__dirname, "public")));


app.get('/', (req, res)=>{
    
    res.render('home');
})


app.get('/get_data', (req, res)=>{
    
    res.render('data', {data: fs.readFileSync("commands.txt")});
})

app.get('/move/:start/:finish', (req, res)=>{
    console.log(req.params.start, req.params.finish);
    if (req.params.start!=req.params.finish){
        var text = fs.readFileSync("commands.txt");
        fs.writeFileSync('commands.txt', text+'move('+req.params.start.split('.')[1]+','+req.params.start.split('.')[2]+','+req.params.finish.split('.')[1]+','+req.params.finish.split('.')[2]+');')
    }
    res.render('data', {data: fs.readFileSync("commands.txt")});
})

app.get('/get_card_out/:div/:nb/:player', (req, res)=>{
    console.log(req.params.div, req.params.nb);
    var text = fs.readFileSync("commands.txt");
    fs.writeFileSync('commands.txt', text+'card_out('+"'"+req.params.div+"'"+','+req.params.nb+','+req.params.player+');');
    
    res.render('data', {data: fs.readFileSync("commands.txt")});
})


app.get('/aurelien', (req, res)=>{
    res.render('aurelien', {});
})






app.listen(port, ()=>{
    console.log("App listening", port)
})