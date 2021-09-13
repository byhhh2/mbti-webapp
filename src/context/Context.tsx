import React, { useReducer, useContext, createContext, Dispatch } from 'react';

type State = {
  mbti: String;
};

type Action = { type: 'SET_MBTI'; mbti: String };
type _Dispatch = Dispatch<Action>;

//context
const StateContext = createContext<State>({
  mbti: '',
});

const DispatchContext = createContext<_Dispatch>(() => null);

//reducer
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_MBTI':
      return {
        ...state,
        mbti: action.mbti,
      };
    default:
      throw new Error('Unhandled action');
  }
}

//provider
export function Provider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    mbti: '',
  });

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export function useStateContext(): State {
  const state = useContext(StateContext);
  return state;
}

export function useDispatchContext(): _Dispatch {
  const dispatch = useContext(DispatchContext);
  return dispatch;
}
