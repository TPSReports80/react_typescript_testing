import { createContext, useContext, useReducer } from "react";

// state type
type StateType = {
  name: string;
  count: number;
};

// initial state
const initialState: StateType = {
  name: "Yoshi",
  count: 0,
};

// enum for action types
export const enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  RESET,
  LOG,
}

// reducer action type
type RenameAction = {
  type: "RENAME";
  payload: string;
};

type PayloadAction = {
  type: "INCREMENT" | "DECREMENT" | "RESET";
  payload: number;
};

type ReducerAction = RenameAction | PayloadAction;

// reducer function
function reducer(state: StateType, action: ReducerAction) {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + action.payload };
    case "DECREMENT":
      return { ...state, count: state.count - action.payload };
    case "RESET":
      return { ...state, count: 0 };
    case "RENAME":
      return { ...state, name: action.payload };
    default:
      return state;
  }
}

// custom hook that takes in initial state and returns state and dispatch
// used later in provider
function useAppContext(initialState: StateType) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return { state, dispatch };
}

// type for initial state of context
// using return type of custom hook above
type UseAppContextType = ReturnType<typeof useAppContext>;

// initial state of context
const initAppContextState: UseAppContextType = {
  state: initialState,
  dispatch: () => {},
};

// create context with initial context state passed in
export const AppContext = createContext<UseAppContextType>(initAppContextState);

// type for context provider
type AppContextProviderProps = {
  children?: React.ReactNode;
};

// provider with value equal to returned value from above custom hook call
export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  return (
    <AppContext.Provider value={useAppContext(initialState)}>
      {children}
    </AppContext.Provider>
  );
};

// defining type for custom useContext hook below
type UseAppContextHookType = {
  state: StateType;
  dispatch: React.Dispatch<ReducerAction>;
};

// custom hook that uses useContext to return state and dispatch
export const useAppContextHook = (): UseAppContextHookType => {
  const { state, dispatch } = useContext(AppContext);
  return { state, dispatch };
};
