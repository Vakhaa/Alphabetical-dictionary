import express, { Request, Response } from 'express'
import axios from 'axios'
import OpenAI from "openai";
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

const openai = new OpenAI({
  organization: process.env.OPENAI_API_ORGANIZATION_ID,
  apiKey: process.env.OPENAI_API_KEY
});


const router = express.Router();

/* GET a random word from the ai */
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

/* GET a random word. */
router.get('/dictionary/:letter', async function (req: Request<LetterType>, res: Response<DictionaryWordResponseType | NotFoundResponseType>) {
  const { letter } = req.params;

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

/* GET a specific word. */
router.get('/dictionary/search/:word', async function (req: Request<WordType>, res: Response<DictionaryWordResponseType | NotFoundResponseType>) {

  const { word } = req.params;

  try {

    const response = await axios.get<DictionaryResponseType>(`${process.env.URL_DICTIONARY_API}/${word}`)
    res.send(response.data);

  } catch (error) {

    res.sendStatus(404);
  }
});

/* GET a photo. */
router.get('/image/:word', async function (req: Request<WordType>, res: Response<PhotoResponseType | NotFoundResponseType>) {

  const { word } = req.params;

  try {

    const photo = await axios.get<PhotoApiResponseType>(`${process.env.URL_PHOTOS_API}/search/photos?query=${word}&per_page=1`, {
      headers: {
        'Authorization': process.env.PHOTOS_API_TOKEN
      }
    })

    if (!photo.data.results[0]?.urls?.full)
      throw new Error("https://iaaglobal.s3.amazonaws.com/bulk_images/no-image.png");

    res.send({
      width: photo.data.results[0].width,
      height: photo.data.results[0].height,
      color: photo.data.results[0].color,
      urls: photo.data.results[0].urls
    });
  } catch (error) {

    res.status(404).json({ message: (error as Error).message });
  }
});

export default router;
