import express, {
  type Request,
  type Response,
  type Express,
  type NextFunction,
} from "express";

import sql from "./db.js";

const app: Express = express();
const port = 3000;
const loggerMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log(`Received a ${req.method} request to ${req.url}`);
  next();
};

app.use(loggerMiddleware);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`Server is running in port ${port}`);
});
