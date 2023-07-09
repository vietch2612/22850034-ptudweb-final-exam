'use strcit';
require('dotenv').config();

const express = require('express');
const expressHandlebars = require('express-handlebars');

const app = express();

// Static folders
app.use(express.static(__dirname + '/public'));

// Express Handlebars
app.engine('hbs', expressHandlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    extname: 'hbs',
    defaultLayout: 'layout',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
    }
}));
app.set('view engine', 'hbs');

// Get request body
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/menu', require('./routes/menuRouter'));
app.use('/contact', require('./routes/contactRouter'));

// Routes
app.get('/', (request, response) => {
    response.locals.isFeatured = true;
    response.render('index');
})

// Sync
app.use('/sync', (request, response) => {
    let models = require('./models');
    models.sequelize.sync().then(() => {
        response.send("Database schema sync completed!!")
    });
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    console.log(`Express server is running on port ${app.get('port')}`);
});
