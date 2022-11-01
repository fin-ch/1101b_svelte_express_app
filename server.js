import express from "express";
import { handler } from "./svelte/build/handler.js";

const app = express();
const port = 3000;

// Demo route
app.get("/expressroute", (req, res) => {
    res.send("This is an expess route!");
});

// THis wilㅣ connect your svelte kit app to your express server
app.use(handler);

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});
