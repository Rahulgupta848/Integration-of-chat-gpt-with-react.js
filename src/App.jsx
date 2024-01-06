import { useState } from "react";
import CustomInput from "./components/CustomInput";
import OpenAI from "openai";
import GptOutput from "./components/GptOutput";

function App() {
  const openai = new OpenAI({ apiKey: '*************************', dangerouslyAllowBrowser: true });
  const [search, setSearch] = useState('');
  const [gptOutput, setGptOutput] = useState('');
  const [loading, setLoading] = useState(false);


  const generateAiResult = async () => {
    setLoading(true);
    const result = await openai.chat.completions.create({
      messages: [{ role: "user", content: search }],
      model: "gpt-3.5-turbo",
    });

    const formattedResult = getMessage(result?.choices[0].message.content)
    setLoading(false);
    setGptOutput(formattedResult);
  }

  const getMessage = (msg) => {
    // Parse HTML to extract the message content
    const parser = new DOMParser();
    const doc = parser.parseFromString(msg, 'text/html');
    const textContent = doc.body.textContent;

    const paragraphs = textContent?.split(/\n+/);
    return paragraphs;
  };

  return (
    <div className="h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="pt-10">
        <div className="flex justify-center text-white text-[20px]">Ask Me Anything ...</div>
        <CustomInput search={search} setSearch={setSearch} loading={loading} handleSearch={generateAiResult} />
        <GptOutput loading={loading} gptOutput={gptOutput} setGptOutput={setGptOutput} />
      </div>
    </div>
  );
}

export default App;
