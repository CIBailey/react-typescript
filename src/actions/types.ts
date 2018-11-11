// Modules
import { Action } from 'redux';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { I18nState } from 'react-redux-i18n';
import { LocationActionPayload } from 'connected-react-router';

// Types
import { IReduxState } from '../reducers';
import { Type as CounterType, State as CounterState } from '../reducers/counter';

// All interface Action
export interface IAction<T, P> {
  type: T;
  payload: P;
}

// Thunk (async dispatch/action)
export type Dispatch<T, P> = ThunkDispatch<IReduxState, null, IAction<T, P>>;
export type Action<T, P> = ThunkAction<void, IReduxState, null, IAction<T, P>>;

// Module reducer I18n
export type I18nType = string;
export type I18nState = I18nState;

/// Module reducer Router
export type RouterType = string;
export type RouterState = LocationActionPayload;

// Reducer Counter
export type CounterType = CounterType;
export type CounterState = CounterState;