const express = require("express"); //server framework
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./db");

const app = express();
const productRouter = require("./routes/productRoute");

const env = require("dotenv").config({path:'../.env'});

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

var corsOptions = {
    origin:"http://localhost:3000"
}

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors(corsOptions));
app.use(
    express.json({
        verify: function (req, res, buf) {
            if (req.originalUrl.startsWith('/webhook')) {
                req.rawBody = buf.toString();
            }
        },
    })
);

db.on("error", console.error.bind(console, "MongoDB connections fail"));

app.get("/", (req, res) => {
        res.json({message: "Welcome to Fond Ordering"})
    }
)

const PORT = process.env.PORT || 8080;
app.listen(PORT,()=>{
    console.log(
        `Server is running on port ${PORT}`
    )
})
app.use('/api/', productRouter);