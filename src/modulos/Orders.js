const mongoose = require("mongoose");

const orderSchema = new  mongoose.Schema(
    {
        warehouse: {
            type: String,
            requiered: true
        },
        brand: {
            type: String,
            requiered: true
        },
        seller: {
            type: String,
            requiered: true
        },
        address: {
            type: String,
            requiered: true
        },
    },
    {timestamps: true}
);
const Orders = mongoose.model("Orders", orderSchema);

module.exports = Orders;

// module.exports = mongoose.model('Orders', orderSchema)