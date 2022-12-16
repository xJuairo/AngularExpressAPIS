const express = require('express');
const app = express();
const misrutas = require("./routes/rutas");
bodyParser = require('body-parser');
const cors = require('cors');
port = 3080;

app.use(bodyParser.json());
app.use(express.static(process.cwd()+"/Examen/dist/examen/"))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/', misrutas)
app.use(cors);

app.get('/', (req,res) => {
    res.sendFile(process.cwd()+"/Examen/dist/examen/index.html")
});

app.listen(port, () =>{
    console.log(`Sever levantado en ${port}`);
})
