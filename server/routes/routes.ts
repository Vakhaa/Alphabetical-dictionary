import express, { Request, Response } from 'express'
import axios from 'axios'

const router = express.Router();


/* GET a word. */
router.get('/dictionary/:letter', async function (req: Request, res: Response) {
  const {letter} = req.params;
  try {
    const randomWord = await axios.get(`${process.env.URL_RANDOMWORD_API}/words/?letterPattern=^${letter}.*&random=true`, {
      headers: {
        'X-RapidAPI-Key': process.env.RANDOMWORD_API_KEY,
        'X-RapidAPI-Host': process.env.RANDOMWORD_API_HOST
      }
    });

    res.send(randomWord.data);
  } catch (error) {
    console.error(error);
    res.sendStatus(404);
  }
});

/* GET a photo. */
router.get('/image/:word', async function (req: Request, res: Response ) {
  const {word} = req.params;
  try {
    
    const photo = await axios.get(`${process.env.URL_PHOTOS_API}/search/photos?query=${word}&per_page=1`, {
      headers:{
        'Authorization': process.env.PHOTOS_API_TOKEN
      }
    })
    console.log("image/:word", photo.data.results[0].urls.full);

    res.send({
      data: photo.data.results[0].urls.full
    });
  } catch (error) {
    console.error(error);
    res.sendStatus(404);
  }
});

export default router;
