const mongoose = require("mongoose");

const orderSchema = new  mongoose.Schema(
    {
        Name: {
            type: String,
            requiered: true
        },
        Last_Name: {
            type: String,
            requiered: true
        },
        DeliveryAddress: {
            type: String,
            requiered: true
        },
        City: {
            type: String,
            requiered: true
        },
        Phone: Number,
        is_active: {
            type: Boolean,
            default: true
          }
    },
    {timestamps: true}
);
const Orders = mongoose.model("Orders", orderSchema);

module.exports = Orders;

// module.exports = mongoose.model('Orders', orderSchema)