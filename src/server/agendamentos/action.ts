import agendamentos from "@/banco/agendamentos.json"
import { Agendamentos } from "@/types/agendamentos"

export function buscarAgendamento(id: number){
    const agendamento: Agendamentos[] | undefined = agendamentos.filter((agendamento)=>{
        return agendamento.id == id
    })

    if(agendamento){
        return agendamento[0]
    }else{
        throw new Error("Agendamento não encontrado")
    }
}