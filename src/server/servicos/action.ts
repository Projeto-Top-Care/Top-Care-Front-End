import servicos from '@/banco/servicos.json'
import { Precos, Servico } from '@/types/servicos'

export function buscarServico(id: number){
    let servicoEncontrado: Servico;
    servicos.forEach((servico)=>{
        if(servico.id == id){
            servicoEncontrado = servico;
        }
    })
    return servicoEncontrado
}

export function buscarServicos(){
    return servicos
}

export function verMenorPreco(id: number) {
    const servico = buscarServico(id)
    const precos: Precos = servico.precos

    return precos;
}