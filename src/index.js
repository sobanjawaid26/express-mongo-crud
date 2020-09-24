let express = require('express');
let app = express();
let path = require('path');
let bodyParser = require('body-parser');
let personRoutes = require('./routes/person');
let customerRoutes = require('./routes/customer');
app.use(bodyParser.json())

app.use((req, res, next) => {
    console.log(`${new Date().toString()} => ${req.originalUrl}`, req.body);
    next();
})

app.use(personRoutes);
app.use(customerRoutes);

app.use(express.static('public'))
app.use((req,res, next) => {
    res.status(400).send('We think that you are lost');
})
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.sendFile(path.join(__dirname, '../public/500.html'));
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.info(`Server has started on ${PORT}`))
