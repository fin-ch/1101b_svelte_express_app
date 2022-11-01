import express from "express";

const app = express();
const port = 3000;

// Demo route
app.get("/expressroute", (req, res) => {
    res.send("This is an expess route!");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});
