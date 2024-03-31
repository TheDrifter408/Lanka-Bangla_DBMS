//importing express
const express = require('express');
let cors = require('cors');

let corsOptions = [
    'http://localhost:5173'
]

//deciding port number
const PORT = 3000;

//importing database conneciton
let sequelize = require('./DBconfig.js');
//importing database models
let initModels = require('./models/init-models.js');
//all database models
let models = initModels(sequelize);

//calling express
const app = express();
//Middleware
//To send and receive data in json format
app.use(express.json());
//CORS Policy
app.use(cors({
    origin: corsOptions
}))

//Defining the API
app.get('/clients',async (req,res) => {
    let clients = await models.client.findAll();
    res.status(200).json(clients);
})


//Getting through gender m = MALE and f = FEMALE
app.get('/clients/g/m',async (req,res) => {
    let clients = await models.client.findAll({
        where:{
            title:'MR'
        }
    })
    res.status(200).json(clients);
})

app.get('/clients/g/f',async (req,res) => {
    let clients = await models.client.findAll(
        {
            where: {
                title:'MS'
            }
        }
    );
    res.status(200).json(clients)
})

//getting through permanent city/division
app.get('/clients/cities',async (req,res) => {
    //This ORM function translates to: 
    //SELECT permanent_city, COUNT(permanent_city) from client
    //GROUP BY permanent_city;
    let clients = await models.client.count({
        attributes:['permanent_city'], 
        group:['permanent_city']
    });

    res.status(200).json(clients);
})

//getting through permanent city/division m = MALE
app.get('/clients/cities/m', async (req,res) => {
    let clients = await models.client.count({
        where:{
            title: 'MR'
        },
        attributes:['permanent_city'],
        group:['permanent_city']
    });
    res.status(200).json(clients);
})

//getting through permanent city/division f = FEMALE
app.get('/clients/cities/f', async (req,res) => {
    let clients = await models.client.count({
        where:{
            title: 'MS'
        },
        attributes:['permanent_city'],
        group:['permanent_city']
    });
    res.status(200).json(clients);
})


//getting through branches
app.get('/clients/branches', async (req,res) => {
    let clients = await models.client.count({
        attributes:['branch'],
        group:['branch'],
    });
    res.status(200).json(clients);
})

//getting male accounts per branch
app.get('/clients/branches/m', async (req,res) => {
    let clients = await models.client.count({
        where:{
            title:'MR'
        },
        atttributes:['branch'],
        group: ['branch']
    });
    res.status(200).json(clients);
})

//getting female accounts per branch
app.get('/clients/branches/f', async (req,res) => {
    let clients = await models.client.count({
        where:{
            title:'MS'
        },
        atttributes:['branch'],
        group: ['branch']
    });
    res.status(200).json(clients);
})


app.listen(PORT, () => {
    console.log(`Listening on PORT:${PORT}`)
});