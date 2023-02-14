import { Provider } from "react-redux";
import { store } from "../state";
import GptResponse from "./GptResponse";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Get Gpt Response</h1>
        <GptResponse />
      </div>
    </Provider>
  );
};

export default App;
