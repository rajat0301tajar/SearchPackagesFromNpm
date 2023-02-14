import axios from "axios";
import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES,
    });

    try {
      const { data } = await axios.get(
        "https://registry.npmjs.org/-/v1/search",
        {
          params: {
            text: term,
          },
        }
      );

      const names = data.objects.map((result: any) => {
        return result.package.name;
      });

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_ERROR,
        payload: err?.message,
      });
    }
  };
};

export const getChatGptResponse = (prompt: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_GPT_PROMPT_RESPONSE,
    });

    try {
      const { data } = await axios.post(
        "https://assistgpt.openai.azure.com/openai/deployments/AssistTextGPT/completions?api-version=2022-12-01",
        { prompt },
        {
          headers: {
            "Content-Type": "application/json",
            "API-KEY": "",
          },
        }
      );
      dispatch({
        type: ActionType.GET_GPT_PROMPT_RESPONSE_SUCCESS,
        payload: data,
      });
    } catch (err: any) {
      dispatch({
        type: ActionType.GET_GPT_PROMPT_RESPONSE_ERROR,
        payload: err?.message,
      });
    }
  };
};
