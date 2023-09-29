import express from 'express';
import _ from 'lodash';
import cors from 'cors';
import env from '../env';

const app = express();
const port = proccess.env.PORT || 3000;

app.use(cors());
app.use(express.json());


export default { app };