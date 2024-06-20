import servicos from '@/banco/servicos.json'
import { Precos, Servico } from '@/types/servicos'

export function buscarServico(id: number) {
    let servicoEncontrado: Servico | undefined = undefined
    servicos.forEach((servico) => {
        if (servico.id == id) {
            servicoEncontrado = servico;
        }
    })
    if (servicoEncontrado) return servicoEncontrado as Servico
}

export function buscarPrecos(id: number) {
    const servico = buscarServico(id)
    if (servico) {
        const precos: Precos[] = servico.precos
        return precos
    }
}