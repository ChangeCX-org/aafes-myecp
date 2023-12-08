import express from 'express';
import routes from './routes';
import cors from "cors";
import * as dotenv from "dotenv";
import swaggerDocs from './utils/swagger';
import swaggerUi from 'swagger-ui-express';
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.use('/v1', routes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(PORT, () => {
  console.log(`Application running on port ${PORT}`);
  swaggerDocs(app)
});
