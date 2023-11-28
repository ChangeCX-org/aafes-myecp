import express from 'express';
import routes from './routes';
import cors from "cors";
import * as dotenv from "dotenv";

//configure env;
dotenv.config();

const app = express();

const PORT =
  (process.env.PORT && process.env.PORT !== "" && parseInt(process.env.PORT)) ||
  3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Cors
app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.use('/v1', routes);

app.listen(PORT, () => {
  console.log(`Application running on port ${PORT}`);
});
