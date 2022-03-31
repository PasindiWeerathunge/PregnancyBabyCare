import express from "express";
import cors from "cors";
import logger from "./utils/logger";
import 'dotenv/config';
import { connect } from "./utils/database.connection";

const app = express();
const PORT = process.env.PORT || "9070";

app.use(cors());
app.use(express.json({limit:"50mb"}));

app.get("/", (req, res, next)=>{
    res.send("<h2>Pregnancy & Baby Care System<h2>");
});

app.listen(PORT, ()=> {
    logger.info("Server is running on PORT " + PORT);
    connect();
});
