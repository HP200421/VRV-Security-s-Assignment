import dotenv from "dotenv";
import connectDB from "./db/index.js";
import app from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("Error while connecting to the database", error);
    });

    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server started on PORT: ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.error("Mongodb connection error", error);
  });
