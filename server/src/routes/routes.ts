import express, { Request, Response } from 'express'
import axios from 'axios'
import OpenAI from "openai";
import { MailerSend, EmailParams, Recipient, Sender } from 'mailersend'
import { PhotoResponseType } from '../infrastructure/types/PhotoResponseType';
import { DictionaryResponseType } from '../infrastructure/types/DictionaryResponseType';
import { RandomWordApiResponseType } from '../infrastructure/types/RandomWordApiResponseType';
import { WordType } from '../infrastructure/types/WordType';
import { LevelType } from '../infrastructure/types/LevelType';
import { LetterType } from '../infrastructure/types/LetterType';
import { DictionaryWordResponseType } from '../infrastructure/types/DictionaryWordResponseType';
import { PhotoApiResponseType } from '../infrastructure/types/PhotoApiResponseType';
import { LevelEnum } from '../infrastructure/LevelEnum.js';
import { NotFoundResponseType } from '../infrastructure/types/NotFoundResponseType';
import { BadRequestResponseType } from '../infrastructure/types/BadRequestResponseType';
import { ContextType } from '../infrastructure/types/ContextType';
import { MailBodyRequestType } from '../infrastructure/types/MailBodyRequestType';
import { rateLimit } from 'express-rate-limit'

const openai = new OpenAI({
  organization: process.env.OPENAI_API_ORGANIZATION_ID,
  apiKey: process.env.OPENAI_API_KEY
});

const mailersend = new MailerSend({
  apiKey: process.env.SEND_MAILER_TOKEN,
});

const router = express.Router();

/**
 *  GET /openai/word/{letter}/{level}
 * @summary Get a random word from the open ai without context
 * @param {string} letter.path.required
 * @param {string} level.path.required - enum:beginner,intermediate,advanced
 * @return {WordType} 200 - success response - application/json
 * @return {NotFoundResponseType} 404 - Not found response - application/json
 * @return {BadRequestResponseType} 400 - Bad Request response - application/json
 */
router.get('/openai/word/:letter/:level', async function (
  req: Request<LetterType & LevelType>,
  res: Response<WordType | NotFoundResponseType | BadRequestResponseType>
) {
  const { letter, level } = req.params;

  try {
    if (!(level in LevelEnum)) throw new Error("the wrong level");

    const completion = await openai.chat.completions.create({
      messages: [
        { "role": "system", "content": `You are a strict dictionary for a ${level} level. Give a diffrent word each time in json. Don't repeat yourself.` },
        { "role": "user", "content": `Give me a random only one word which start with the letter "${letter}" ?` },
      ],
      model: "gpt-3.5-turbo-0125",
      response_format: { type: "json_object" }
    });

    const response = JSON.parse(completion.choices[0].message.content) as WordType;
    res.send(response);
  } catch (error) {

    if ((error as Error).message === "the wrong level")
      res.status(400).send({ message: (error as Error).message });
    else
      res.sendStatus(404);
  }
});

/**
 *  GET /openai/word/{letter}/{level}/{context}
 * @summary Get a random word from the open ai with context
 * @param {string} letter.path.required
 * @param {string} level.path.required - enum:beginner,intermediate,advanced
 * @param {string} context.path.required
 * @return {WordType} 200 - success response - application/json
 * @return {NotFoundResponseType} 404 - Not found response - application/json
 * @return {BadRequestResponseType} 400 - Bad Request response - application/json
 */
router.get('/openai/word/:letter/:level/:context', async function (
  req: Request<LetterType & LevelType & ContextType>,
  res: Response<WordType | NotFoundResponseType | BadRequestResponseType>
) {
  const { letter, level, context } = req.params;

  try {
    if (!(level in LevelEnum)) throw new Error("the wrong level");

    const completion = await openai.chat.completions.create({
      messages: [
        { "role": "system", "content": `You are a strict dictionary for a ${level} level. Give a diffrent word each time in json. Don't repeat yourself.` },
        { "role": "system", "content": `The context of word, the theme of the dictionary must be ${context}.` },
        { "role": "user", "content": `Give me a random only one word which start with the letter "${letter}" ?` },
      ],
      model: "gpt-3.5-turbo-0125",
      response_format: { type: "json_object" }
    });

    const response = JSON.parse(completion.choices[0].message.content) as WordType;
    res.send(response);
  } catch (error) {

    if ((error as Error).message === "the wrong level")
      res.status(400).send({ message: (error as Error).message });
    else
      res.sendStatus(404);
  }
});

/**
 *  GET /dictionary/{letter}
 * @summary Get a random word from the random word dictionary api
 * @deprecated
 * @param {string} letter.path.required
 * @return {DictionaryWordResponseType} 200 - success response - application/json
 * @return {NotFoundResponseType} 404 - Not found response - application/json
 */
router.get('/dictionary/:letter', async function (req: Request<LetterType>, res: Response<DictionaryWordResponseType | NotFoundResponseType>) {
  const { letter } = req.params;

  console.info('Endpoint /dictionary/:letter is deprecated. Use insted openai/word/:letter/:level or openai/word/:letter/:level/:contexts');

  try {
    const response = await axios.get<RandomWordApiResponseType>(`${process.env.URL_RANDOMWORD_API}/words/?letterPattern=^${letter}.*&random=true`, {
      headers: {
        'X-RapidAPI-Key': process.env.RANDOMWORD_API_KEY,
        'X-RapidAPI-Host': process.env.RANDOMWORD_API_HOST
      }
    });

    res.send({
      meanings: response.data?.results,
      phonetics: response.data?.pronunciation?.all,
      word: response.data.word,
    });
  } catch (error) {
    console.error(error);
    res.sendStatus(404);
  }
});

/**
 *  GET /dictionary/search/{word}
 * @summary Get a specific word with explanations and other data
 * @param {string} word.path.required
 * @return {DictionaryWordResponseType} 200 - success response - application/json
 * @return {NotFoundResponseType} 404 - Not found response - application/json
 */
router.get('/dictionary/search/:word', async function (req: Request<WordType>, res: Response<DictionaryWordResponseType | NotFoundResponseType>) {

  const { word } = req.params;

  try {

    const response = await axios.get<DictionaryResponseType>(`${process.env.URL_DICTIONARY_API}/${word}`)
    res.send(response.data);

  } catch (error) {

    res.sendStatus(404);
  }
});


const imageLimiter = rateLimit({
  windowMs: 4 * 15 * 60 * 1000, // 15 minutes
  limit: 10, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
  standardHeaders: 'draft-7', // draft-6: `RateLimit-*` headers; draft-7: combined `RateLimit` header
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
  // store: ... , // Redis, Memcached, etc. See below.
})

/**
 *  GET /image/{word}
 * @summary Get a image by a word from the image api
 * @param {string} word.path.required
 * @return {DictionaryWordResponseType} 200 - success response - application/json
 * @return {NotFoundResponseType} 404 - Not found response - application/json
 */
router.get('/image/:word', imageLimiter, async function (req: Request<WordType>, res: Response<PhotoResponseType | NotFoundResponseType>) {

  const { word } = req.params;

  try {

    const photo = await axios.get<PhotoApiResponseType>(`${process.env.URL_PHOTOS_API}/search/photos?query=${word}&per_page=1`, {
      headers: {
        'Authorization': process.env.PHOTOS_API_TOKEN,
      }
    })

    if (!photo.data.results[0]?.urls?.full)
      throw new Error("https://iaaglobal.s3.amazonaws.com/bulk_images/no-image.png");

    res.send({
      width: photo.data.results[0].width,
      height: photo.data.results[0].height,
      color: photo.data.results[0].color,
      urls: photo.data.results[0].urls,
      user:  photo.data.results[0].user
    });
  } catch (error) {

    res.status(404).json({ message: (error as Error).message });
  }
});

/**
 *  POST /mail/send
 * @summary Send the email to me
 * @param {MailBodyRequestType} request.body.required 
 * @return {object} 202 - Accepted  response - application/json
 * @return {object} 400 - Bad Request response - application/json
 * @return {object} 500 - Internal Server Error response - application/json
 */
router.post('/mail/send', async function (req: Request, res: Response) {

  const {
    name,
    email,
    message
  } = req.body as MailBodyRequestType

  try {

    const quotaresponse = await mailersend.others.getApiQuota();
    if (quotaresponse?.body.remaining < 1) throw new Error("used quota of mails");

    if (name === '' || email === '' || message === '') throw new Error("Bad Request");
    if (!name || !email || !message) throw new Error("Bad Request");
    if (!email.match('@')) throw new Error("Bad Request");

    const recipients = [new Recipient("denys.vynohradnyi.dev@gmail.com", "Denys Vynohradnyi")];
    const sender = new Sender("info@trial-x2p0347ym834zdrn.mlsender.net", "Alphabetic Dictionary");
    const emailParams = new EmailParams()
      .setFrom(sender)
      .setTo(recipients)
      .setReplyTo(sender)
      .setSubject(`Alphabetic Dictionary Form: ${name} <${email}>`)
      .setText(message);

    const response = await mailersend.email.send(emailParams);
    res.sendStatus(response.statusCode);

  } catch (error) {
    if ((error as Error).message === "Bad Request")
      res.sendStatus(400);
    else
      res.status(500).send(error);
  }
});



export default router;
