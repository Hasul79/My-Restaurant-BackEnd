require("dotenv").config();
const express = require("express");
const Pizza = require('./models/pizzaModel');
const cors = require('cors')
const router= require('./routes/nodMailerRouter')
// const authRoute = require("./routes/auth");
// const passport = require('passport');
// const cookieSession = require('cookie-session');
// const passportStrategy = require("./passport");

const pizzasRoute = require('./routes/pizzasRoute')
const userRoute = require('./routes/userRoute')
const ordersRoute = require('./routes/ordersRoute')


const app = express();
const db = require('./db.js')
app.use(express.json());
app.use(cors());
app.use(router);


// app.use(
// 	cookieSession({
// 		name: "session",
// 		keys: ["cyberwolve"],
// 		maxAge: 24 * 60 * 60 * 100,
// 	})
// );


// app.use(passport.initialize());
// app.use(passport.session());

// app.use(
// 	cors({
// 		origin: "http://localhost:3000",
// 		methods: "GET,POST,PUT,DELETE",
// 		credentials: true,
// 	})
// );

// app.use("/auth", authRoute);






app.use('/api/pizzas/', pizzasRoute)
app.use('/api/users/', userRoute)
app.use('/api/orders/' , ordersRoute)
app.get("/", (req, res) => {
    res.send("Server working " + port);
});




const port = process.env.PORT || 7000;

app.listen(port, () => 'Server running an port 🔥');

