const mongoose = require("mongoose");
const dbUrl =
"mongodb+srv://Javiervilla:3216761846@cluster0-v6be9.mongodb.net/ProyectoCintaR?retryWrites=true&w=majority"

const Orders = require("./Orders");
mongoose.connect(
    dbUrl,
    { useNewUrlParser: true, useUnifiedTopology: true },
    err => {
        !err ? console.log("successful connection") : console.log(err);
    }
);

module.exports = {
    Orders
};

