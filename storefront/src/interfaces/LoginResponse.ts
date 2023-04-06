export interface LoginResponse {
  usuario: Usuario;
  token: string;
}

export interface LoginData {
  correo: string;
  password: string;
}

export interface Usuario {
  rol: string;
  estado: string;
  nombre: string;
  email: string;
  uid: string;
  img?: string;
}
