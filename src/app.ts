import Express  from "express";
import commonRoute from "./routes/routes";

const app = Express();

app.use(Express.json());

app.use("/api/task-flows", commonRoute);
app.get("/", (req, res) => {
  res.send("API is running...");
});

export default app;