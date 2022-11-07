import { Configuration, OpenAIApi } from "openai";
import { inspect } from "util";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function ai(req, res) {
  const body = req.body;

  if (!body.keywords) {
    return res.status(400).json({ data: "keywords arg not found" });
  }

  let prompt = `Generate project names related to the following keywords: ${body.keywords}`;

 await openai.createCompletion({
    model: "text-davinci-002",
    prompt: prompt,
    temperature: 0.8,
    max_tokens: 60,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  })
  .then(
    (response) => {
      return (res
        .send({body: response.data.choices[0].text.split("\\n")}));
    }
  )
}
