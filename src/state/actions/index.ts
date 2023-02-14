import { ActionType } from "../action-types";

interface SearchRepositoriesAction {
  type: ActionType.SEARCH_REPOSITORIES;
}

interface SearchRepositoriesSuccessAction {
  type: ActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchRepositoriesErrorAction {
  type: ActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

interface GetGptPromptResponseAction {
  type: ActionType.GET_GPT_PROMPT_RESPONSE;
}

interface GetGptPromptResponseSuccessAction {
  type: ActionType.GET_GPT_PROMPT_RESPONSE_SUCCESS;
  payload: any;
}

interface GetGptPromptResponseErrorAction {
  type: ActionType.GET_GPT_PROMPT_RESPONSE_ERROR;
  payload: string;
}

export type Action =
  | SearchRepositoriesAction
  | SearchRepositoriesSuccessAction
  | SearchRepositoriesErrorAction
  | GetGptPromptResponseAction
  | GetGptPromptResponseSuccessAction
  | GetGptPromptResponseErrorAction;
