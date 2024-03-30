import express, { Request, Response } from 'express'
import axios from 'axios'
import { PhotoResponseType } from '../types/PhotoResponseType';
import { DictionaryResponseType } from '../types/DictionaryResponseType';
import { RandomWordApiResponseType } from '../types/RandomWordApiResponseType';
import OpenAI from "openai";
import { WordType } from '../types/WordType';
import { OpenAIRandomWordRequestType } from '../types/OpenAIRandomWordRequestType';
import { LetterType } from '../types/LetterType';
import { DictionaryWordResponseType } from '../types/DictionaryWordResponseType';
import { PhotoApiResponseType } from '../types/PhotoApiResponseType';
import { PhotoErrorResponseType } from '../types/PhotoErrorResponseType';

const openai = new OpenAI({
  organization: process.env.OPENAI_API_ORGANIZATION_ID,
  apiKey: process.env.OPENAI_API_KEY
});


const router = express.Router();

/* GET a random word from the ai */
router.get('/openai/word/:letter/:level', async function (req: Request<OpenAIRandomWordRequestType>, res: Response<WordType>) {
  const { letter, level } = req.params;
  try {

    const completion = await openai.chat.completions.create({
      messages: [
        { "role": "system", "content": `You are a dictionary for a ${level} level. Give a diffrent word each time in json. Don't repeat yourself.` },
        { "role": "user", "content": `Give me a random only one word which start with the letter "${letter}" ?` },
      ],
      model: "gpt-3.5-turbo-0125",
      response_format: { type: "json_object" }
    });

    const response = JSON.parse(completion.choices[0].message.content);
    res.send(response);
  } catch (error) {
    console.error(error);
    res.sendStatus(404);
  }
});

/* GET a random word. */
router.get('/dictionary/:letter', async function (req: Request<LetterType>, res: Response<DictionaryWordResponseType>) {
  const { letter } = req.params;
  try {
    const response = await axios.get<RandomWordApiResponseType>(`${process.env.URL_RANDOMWORD_API}/words/?letterPattern=^${letter}.*&random=true`, {
      headers: {
        'X-RapidAPI-Key': process.env.RANDOMWORD_API_KEY,
        'X-RapidAPI-Host': process.env.RANDOMWORD_API_HOST
      }
    });
    console.log(response.data);
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
router.get('/dictionary/search/:word', async function (req: Request<WordType>, res: Response<DictionaryWordResponseType>) {

  const { word } = req.params;

  try {

    const response = await axios.get<DictionaryResponseType>(`${process.env.URL_DICTIONARY_API}/${word}`)
    console.log(response);
    res.send(response.data);

  } catch (error) {
    console.error(error);
    res.sendStatus(404);
  }
});

/* GET a photo. */
router.get('/image/:word', async function (req: Request<WordType>, res: Response<PhotoResponseType | PhotoErrorResponseType>) {

  const { word } = req.params;

  try {

    const photo = await axios.get<PhotoApiResponseType>(`${process.env.URL_PHOTOS_API}/search/photos?query=${word}&per_page=1`, {
      headers: {
        'Authorization': process.env.PHOTOS_API_TOKEN
      }
    })
    console.log("image/:word", photo.data.results[0].urls.full);

    if (!photo.data.results[0]?.urls?.full)
      throw new Error("404");

    res.send({
      width: photo.data.results[0].width,
      height: photo.data.results[0].height,
      color: photo.data.results[0].color,
      urls: photo.data.results[0].urls
    });
  } catch (error) {
    console.error(error);

    res.status(404).json({ photo: "https://iaaglobal.s3.amazonaws.com/bulk_images/no-image.png" });
  }
});

export default router;
