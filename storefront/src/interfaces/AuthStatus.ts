import { Usuario } from "./LoginResponse";

export interface AuthStatus {
  status: "checking" | "authenticated" | "not-authenticated";
  token: string | null;
  errorMessage: string;
  user: Usuario | null;
}
