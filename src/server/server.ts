import * as express from "express";
import { findAllCourses } from "./queries/findAllCourses";

const app = express();

app.route('/api/courses')
    .get((req, res) => {
        findAllCourses()
            .then(results => {
                res.status(200).json({results});
            });
    })

app.listen(4300, () => {
    console.log('Server is running on port 4300..');
})
