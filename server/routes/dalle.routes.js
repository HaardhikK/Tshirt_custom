import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi} from 'openai';
// import { Promise } from 'mongoose';
import pkg from 'mongoose';
const { Promise } = pkg;

dotenv.config();

const router = express.Router();

const config = new Configuration({
  apiKey: process.env.OpenAIApi,
  
});

const openai = new OpenAIApi(config);

router.route('/').get((req, res) => {
  res.status(200).json({ message: "dalle.routes working fine" })
})

router.route('/').post(async (req, res) => {
  try {
    const { prompt } = req.body;

    const response = await openai.createImage({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json'
    });

    const image = response.data.data[0].b64_json;

    res.status(200).json({ photo: image });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" })
  }
})

export default router;

//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
// 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