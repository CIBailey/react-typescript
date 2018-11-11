// Action reducer module
import { push, goBack } from 'connected-react-router';

// Types
import { Action, Dispatch, RouterType, RouterState } from './types';

export const RouterPush = (to: string): Action<RouterType, RouterState> => (
  dispatch: Dispatch<RouterType, RouterState>
) => dispatch(push(to));

export const RouterGoBack = (): Action<RouterType, RouterState> => (dispatch: Dispatch<RouterType, RouterState>) =>
  dispatch(goBack());