import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import { router } from './routes/router';

const App = express();

App.use(cors());
App.use(bodyParser.json());
App.use(bodyParser.urlencoded({ extended: true }));
App.use(router);

export default App;
