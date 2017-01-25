import * as express from "express";
import * as bodyParser from "body-parser";

import { initRestApi } from "./api/api";
import { apiErrorHandler } from "./api/apiErrorHandler";

const app = express();

app.use(bodyParser.json());

initRestApi(app);

app.use(apiErrorHandler);

app.listen(4200, () => {
    console.log('Server is running on port 4200..');
})
