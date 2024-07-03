import servicos from '@/banco/servicos.json'
import { VariantesProps, Servico } from '@/types/servicos'

export function buscarServico(id: number) {
    let servicoEncontrado: Servico | undefined = undefined
    servicos.forEach((servico) => {
        if (servico.id == id) {
            servicoEncontrado = servico;
        }
    })
    if (servicoEncontrado) return servicoEncontrado as Servico
}

export function buscarServicos(){
    return servicos
}

export function buscarPrecos(id: number) {
    const servico = buscarServico(id)
    if (servico) {
        const precos: VariantesProps[] = servico.variantes
        return precos
    }
}