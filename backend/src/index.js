const express = require('express');
const routes = require('./routes');
const cors = require('cors');

const app = express();

app.use(cors()); // Em produção colocar o parametro origin com host do frontend
app.use(express.json());
app.use(routes);

app.listen(3333);


//kill $(lsof -t -i:3333)
