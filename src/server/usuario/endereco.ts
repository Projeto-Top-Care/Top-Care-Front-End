import { axiosAPI } from "../api";

export async function cadastrarEnderecos(payload:any) {
    const response = await axiosAPI.patch("usuario/endereco/cadastro", payload).then(resp => resp);
    return response.data
}