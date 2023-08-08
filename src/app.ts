import express, { Request, Response, NextFunction } from 'express';
import createError from 'http-errors';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';

import usersRouter from "./routes/users";

const app = express();
app.use(cors({
    credentials: true
}))
app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

// Routes
app.use('/api/user', usersRouter);

// App listeners
const server = http.createServer(app);
const port = 5001;
server.listen(port, () => {
    console.log('server listening on port ' + port);
})

// Error handlers
app.use(function (req: Request, res: Response, next: NextFunction) {
    next(createError(404));
});

app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    res.status(err.status || 500);
    res.send('Error: ' + err.status + " " + err.message);
});

export default app;
