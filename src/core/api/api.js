import axios from "axios";

// Pode ser algum servidor executando localmente: 
// http://localhost:3000

export const api = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public",
});
