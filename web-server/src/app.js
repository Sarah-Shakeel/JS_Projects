const path = require('path')
const server = require('express');
const hbs = require('hbs');

const request = require('request');
const geoCode = require('./utils/geoCode');
const forecast = require('./utils/forecast');

//creating a web server
const app = server();

//define paths for express configuration
const publicDirectoryPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Setup handlebars engine and views location
app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

//setup of static directory (when using static image, html etc)
app.use(server.static(publicDirectoryPath));

//setting up path for different webpages
app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Sarah Shakeel'
    });
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Page',
        name: 'Sarah Shakeel'
    });
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: 'Help Page',
        name: 'Sarah Shakeel',
        msg: 'It is the example message.'
    });
})

// app.get('/about', (req,res) => {
//     res.send('<h1>About Page</h1>');
// });
// //inputing the objects i.e. JSON data printing in a web page
// app.get('/help', (req,res) => {
//     res.send([{
//         name: 'Ali Hamza'
//     },
// {
//     name: 'Shakeel'
// }, {
//     MyAge: 22
// }]);
// });

//using query string in  weather page

// app.get('/weather', (req,res) => {
//     if(!req.query.address){
//         return res.send({
//             error:'Please provide a query with an address!'
//         })
//     }
//     res.send({
//         forecast: 'Its Scorching hot today! :( :(',
//         location: 'Lahore, Punjab, Pakistan',
//         address: req.query.address
//     });
// })

//taking actual coordinates from web server and forecast the weather of given location to the browser

app.get('/weather', (req,res) => {
    if(!req.query.address){
        return res.send({
            error:'Please provide a query with an address!'
        });
    }
        geoCode(req.query.address, (error, {latitude, longitude, location} = {}) => {
            if(error) {
                res.send({error});
            }
            forecast(latitude, longitude, (error, forecastData) => {
                if(error) {
                    res.send({error});
                }
                res.send({
                    forecast: forecastData,
                    location,
                    address: req.query.address
                });
            })
        }) 
    });

// Handling errors i.e. searching the pages whose path is not given, thus using wild card charcter '*'
app.get('/help/*', (req, res) => {
    res.render('404',{
        title: '404',
        name: 'Sarah Shakeel',
        errorMsg: 'Help article not found'
    })
})

// Handling errors i.e. searching the pages whose path is not given, thus using wild card charcter '*'
app.get('*', (req, res) => {
    res.render('404',{
        title: '404',
        name: 'Sarah Shakeel',
        errorMsg: 'This page is not found'
    })
})

app.listen(3000, () => {
    console.log('Server 3000 is up and working');
})