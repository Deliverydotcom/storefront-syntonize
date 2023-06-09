import { AuthStatus, Usuario } from "../interfaces";

type AuthAction =
  | { type: "signUp"; payload: { token: string; user: Usuario } }
  | { type: "addError"; payload: string }
  | { type: "removeError" }
  | { type: "notAuthenticated" }
  | { type: "logout" };

export const authReducer = (
  state: AuthStatus,
  action: AuthAction
): AuthStatus => {
  switch (action.type) {
    case "addError":
      return {
        ...state,
        user: null,
        status: "not-authenticated",
        token: null,
        errorMessage: action.payload,
      };

    case "removeError":
      return { ...state, errorMessage: "" };

    case "signUp":
      return {
        ...state,
        errorMessage: "",
        status: "authenticated",
        token: action.payload.token,
        user: action.payload.user,
      };

    case "logout":
    case "notAuthenticated":
      return {
        ...state,
        status: "not-authenticated",
        token: null,
        user: null,
      };

    default:
      return state;
  }
};
