import 'dotenv/config'
import createError from 'http-errors'
import express, { Express, Request, Response } from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import cors from 'cors'
import router from './routes/routes.js'

var app: Express = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({
  origin: process.env.CORS_URL,
  optionsSuccessStatus: 200
}));
app.use(router);

// catch 404 and forward to error handler
app.use(function (req: Request, res: Response, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req: Request, res: Response, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send(`${err.status || 500}, ${err.message}`);
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`app started on port ${PORT}`)
});
