import { useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const GptResponse: React.FC = () => {
  const [prompt, setPrompt] = useState("");
  const { getChatGptResponse } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.gptResponse
  );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    getChatGptResponse(prompt);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={prompt} onChange={(e) => setPrompt(e.target.value)} />
        <button>Get Response</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data && data.choices[0].text}
    </div>
  );
};

export default GptResponse;
