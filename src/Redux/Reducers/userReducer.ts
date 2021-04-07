import firebase from "firebase";
import { AppStateType, InferActionsType } from "../store";
import { ThunkAction } from "redux-thunk";
import { auth } from "../../fire";

const USERDATA = "chatApp/userReducer/USERDATA";

const initialState = {
  user: null as null | {},
};

type InitialStateType = typeof initialState;

export const userReducer = (
  state = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case USERDATA:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

type ActionsType = ReturnType<InferActionsType<typeof actions>>;

const actions = {
  SetUserData: (user: any) => {
    return { type: USERDATA, payload: user };
  },
};

type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>;

export const loginAction = (): ThunkType => {
  return async (dispatch) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
    dispatch(actions.SetUserData(user));
  };
};
