const express = require("express");
const index = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const { Orders } = require("./modulos/App")

index.use(express.urlencoded({ extended: true }));
index.use(express.json());
index.use(cors());

index.post("/api/v1/create/order", (req, res) => {
    const newOrders = new Orders(req.body);
    newOrders.save((err, response) => {
        !err ? res.status(201).send(response) : res.status(204).sen(err)
    });
});

index.get("/api/v1/get/orders", (req, res) => {
    Orders.find(
        { is_active: true },
        (err, response) => {
            !err ? res.status(200).send(response) : res.status(204).sen(err)
        });
});

index.get("/api/v1/get/order/:orderid", (req, res) => {
    Orders.findById(req.params.orderid, (err, response) => {
        !err ? res.status(202).send(response) : res.status(400).sen(err)
    });
});

index.put("/api/v1/get/order/:orderid", (req, res) => {
    Orders.findByIdAndUpdate(
        req.params.orderid,
        { $set: req.body },
        { new: true },
        (err, response) => {
            !err ? res.status(201).send(response) : res.status(417).send(err)
        }
    );
});

index.delete("/api/v1/delete/order/:orderid", (req, res) => {
    Orders.findByIdAndUpdate(
        req.params.orderid,
        { $set: { is_active: false } },
        { new: true },
        (err, response) => {
            !err
                ? res.status(201).send({ mesagge: "Orden Eliminada" })
                : res.status(404).send(err);
        }
    );
});

index.patch("/api/v1/active/order/:orderid", (req, res) => {
    Orders.findByIdAndUpdate(
        req.params.orderid,
        { $set: { is_active: true } },
        { new: true },
        (err, response) => {
            !err ? res.status(200).send(response) : res.status(404).send(err);
        }
    );
});

index.listen(PORT, err => {
    if (err) {
        console.log(err);
    } else {
        console.log(`server running on port ${PORT}`);
    }
});
