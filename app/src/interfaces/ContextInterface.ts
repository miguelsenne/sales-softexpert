import { Dispatch } from 'react';

export interface StateInterface {
  [key: string]: any;
}

export interface ActionInterface {
  type: any;
  [key: string]: any;
}

export interface ContextInterface {
  state: StateInterface;
  dispatch: Dispatch<ActionInterface>;
}

export type TDispatch = {
  type: string;
  payload?: any;
};

export interface AppState {
  [key: string]: any;
}

export interface AppContextInterface {
  state: AppState;
  dispatch: Dispatch<TDispatch>;
}
