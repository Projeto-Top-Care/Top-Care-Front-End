import { axiosAPI } from "../api";

export async function cadastrarEnderecos(payload:any) {
    const response = await axiosAPI.post("usuario/cadastrarEndereco", payload).then(resp => resp);
    return response.data
}