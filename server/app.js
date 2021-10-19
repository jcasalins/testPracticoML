const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const path = require('path');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');



const app = express();

//
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: "API Mercado Libre",
            description: "Consulta a varios endpoint de la API de Mercado Libre",
            contact: {
                name: "Jairo Casalins"
            },
            servers: ['http://localhost:3000']
        }
    },
    apis: ['./server/routes/*.js']
}

const swaggerDoc = swaggerJsDoc(swaggerOptions);


// setting
app.set('port', process.env.PORT || 4000);

// middleware

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(express.static(path.join(__dirname, '../client/build')));



// routes
app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
app.use('/api', require('./routes/index'));
app.get('*', (req, res) => res.sendFile(path.resolve('client', 'build', 'index.html')));


module.exports = app;
