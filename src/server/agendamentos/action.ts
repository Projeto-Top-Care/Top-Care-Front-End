import { axiosAPI } from "../api";

export async function agendar(payload: any, id:number) {
    const response = await axiosAPI.post("usuario/agendamento/"+id, payload);
    return response.data;
}

export async function buscarAgendamento(id: number) {
    const response = await axiosAPI.get("usuario/agendamento/"+id);
    return response.data;
}

export async function verificarPagamento (id: number){
    const response = await buscarAgendamento(id);
    return response.pagamento.pago
}

export async function cancelarAgendamento(id: number){
    const response = await axiosAPI.delete("usuario/agendamento/"+id);
    return response.data;
}

export async function verificarCancelamento(id: number){
    const response = await axiosAPI.get("usuario/agendamento/cancelamento/"+id);
    return response.data;
}