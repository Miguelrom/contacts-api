import 'dotenv/config';
import express from "express";
import helmet from "helmet";

const app = express();

app.use(helmet());

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}...`);
})
