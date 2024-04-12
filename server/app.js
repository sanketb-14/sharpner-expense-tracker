const express = require('express')
const sequelize = require('./util/database')
const expenseRoute = require('./routes/expenseRoutes')
const userRoute = require('./routes/userRoutes')

const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())


sequelize
    .sync()
    .then(() => {
        console.log('Database synced');
    })
    .catch((error) => {
        console.log('Database sync error:', error);
    });
app.use('/api/v1/expenses', expenseRoute)    
app.use('/api/v1/users' , userRoute)





const port = 3000

app.listen(port, () => console.log("server is listening on port " + port))