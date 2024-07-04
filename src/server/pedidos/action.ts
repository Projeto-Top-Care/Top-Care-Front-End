import pedidos from "@/banco/pedidos.json"
import { Pedidos } from "@/types/pedidos"

export function buscarPedidoAdm(id: number){
    const pedido: Pedidos[] | undefined = pedidos.filter((pedido)=>{
        return pedido.id == id
    })

    if(pedido){
        return pedido[0]
    }else{
        throw new Error("Agendamento não encontrado")
    }
}