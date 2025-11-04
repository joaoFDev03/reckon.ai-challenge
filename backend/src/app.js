// import express from 'express';
// import bloqRoutes from './routes/bloq.routes.js';
// import lockerRoutes from './routes/locker.routes.js';
// import rentRoutes from './routes/rent.routes.js';
// import { errorHandler } from './middleware/errorHandler.js';
// import bodyParser from 'body-parser';
// const app = express();

// app.use(express.json());
// app.use(bodyParser.json())


// app.use('/bloqs', bloqRoutes);
// app.use('/lockers', lockerRoutes);
// app.use('/rents', rentRoutes);


// app.use(errorHandler);

// export default app;

import express from "express";

const app = express()

app.use(express.json())

export default app
