const mongoose = require("mongoose");

const orderSchema = new  mongoose.Schema(
    {
        almacen: {
            type: String,
            requiered: true
        },
        marca: {
            type: String,
            requiered: true
        },
        vendedor: {
            type: String,
            requiered: true
        },
        direccion: {
            type: String,
            requiered: true
        },
    },
    {timestamps: true}
);
const Orders = mongoose.model("Orders", orderSchema);

module.exports = Orders;

// module.exports = mongoose.model('Orders', orderSchema)