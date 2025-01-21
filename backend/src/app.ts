import express, { NextFunction, Request, Response } from "express";
import routes from "./routes";
const app = express();

const PORT = 9000;
const HOST = "127.0.0.1";

app.use("/api", routes);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack); // Log the error stack for debugging
    res.status(err.status || 500).json({
        error: true,
        message: err.message || "Internal Server Error",
    });
});

app.listen(PORT, HOST, (err) => {
    console.log(
        `Listening on http://${HOST}:${PORT} \nError:${err ? err : "None"}`
    );
});
