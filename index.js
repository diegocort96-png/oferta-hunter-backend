const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/search", (req, res) => {
const query = req.query.query;

res.json({
product: query,
results: [
{
store: "Mercado Libre",
title: query,
price: 18000
},
{
store: "Amazon",
title: query,
price: 18500
}
]
});
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log("Servidor corriendo en puerto " + PORT);
});