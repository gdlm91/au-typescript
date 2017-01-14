import * as express from "express";
import { initRestApi } from "./api/api";

const app = express();

initRestApi(app);

app.listen(4300, () => {
    console.log('Server is running on port 4300..');
})
