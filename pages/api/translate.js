import * as deepl from "deepl-node";
const authKey = process.env.NEXT_PUBLIC_DEEPL_API_KEY;
const translator = new deepl.Translator(authKey);

export default async function handler(req, res) {
  if (req.method === "GET") {
    const { input: inputValue } = req.query;

    const result = await translator.translateText(`${inputValue}`, null, "ja");
    res.status(200).json({ name: result.text });
  }
}
