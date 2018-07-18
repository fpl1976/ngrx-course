import { apiGetUserThreads } from './api/apiGetUserThreads';
import * as express from 'express';
import * as bodyParser from 'body-parser';

const app = new express();
app.use(bodyParser.json());

apiGetUserThreads(app);

app.listen(8090, () => {
    console.log('Server is now running on port 8090...');
});
