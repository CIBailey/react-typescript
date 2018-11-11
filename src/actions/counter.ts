// Types
import { Action, Dispatch, CounterType, CounterState } from './types';

// Action set the counter
export const setCounter = (counter: number): Action<CounterType, CounterState> => (
  dispatch: Dispatch<CounterType, CounterState>
) =>
  dispatch({
    type: 'ADD_COUNTER',
    payload: {
      counter
    }
  });

// Action for reset the counter from 0
export const resetCounter = (): Action<CounterType, CounterState> => (dispatch: Dispatch<CounterType, CounterState>) =>
  dispatch({
    type: 'SET_COUNTER',
    payload: {
      counter: 0
    }
  });

// Action set in async the counter
export const AsyncSetCounter = (counter: number): Action<CounterType, CounterState> => (
  dispatch: Dispatch<CounterType, CounterState>
) => {
  // Simulate the api
  setTimeout(() => {
    // Dispatch in async
    dispatch({
      type: 'ADD_COUNTER',
      payload: {
        counter
      }
    });
  }, 500);
};