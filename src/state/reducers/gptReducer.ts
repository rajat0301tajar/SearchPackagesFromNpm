import { ActionType } from "../action-types";
import { Action } from "../actions";

interface GptState {
  loading: boolean;
  error: string | null;
  data: any;
}

const initialState = {
  loading: false,
  error: null,
  data: {},
};

const reducer = (state: GptState = initialState, action: Action): GptState => {
  switch (action.type) {
    case ActionType.GET_GPT_PROMPT_RESPONSE:
      return { loading: true, error: null, data: "" };
    case ActionType.GET_GPT_PROMPT_RESPONSE_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case ActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: "" };
    default:
      return state;
  }
};

export default reducer;
