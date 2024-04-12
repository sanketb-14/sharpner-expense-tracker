const express = require('express')
const sequelize = require('./util/database')
const expenseRoute = require('./routes/expenseRoutes')

const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/v1/expenses', expenseRoute)
sequelize
    .sync()
    .then(() => {
        console.log('Database synced');
    })
    .catch((error) => {
        console.log('Database sync error:', error);
    });





const port = 3000

app.listen(port, () => console.log("server is listening on port " + port))