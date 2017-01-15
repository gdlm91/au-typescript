import * as express from "express";
import { initRestApi } from "./api/api";
import { apiErrorHandler } from "./api/apiErrorHandler";

const app = express();

initRestApi(app);

app.use(apiErrorHandler);

app.listen(8080, () => {
    console.log('Server is running on port 8080..');
})
