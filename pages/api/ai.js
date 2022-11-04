import { Configuration, OpenAIApi } from "openai";
import { inspect } from "util";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default function ai(req, res){
    const body = req.body;

    console.log('body: ', inspect(req, {showHidden: false, depth: null, colors: true}));

    if (!body.keywords) {
      return res.status(400).json({ data: 'keywords arg not found'})
    }

    let prompt = `Generate project names related to the following keywords: ${body.keywords}`

    openai.createCompletion({
      model: "text-davinci-002",
      prompt: prompt,
      temperature: 0.8,
      max_tokens: 60,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
    })
    .then((response) => {
    // this.setState({
    //   response: `${response.data}`
    // })
      console.log(`${JSON.stringify(response.data)}`);
      return res.status(200).json(response.data.choices);
    });
}