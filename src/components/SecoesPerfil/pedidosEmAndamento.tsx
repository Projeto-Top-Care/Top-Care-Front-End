'use client'
import { Usuario } from "@/types/usuarios"
import PedidoAndamentoPerfil from "../PedidoAndamentoPerfil/PedidoAndamentoPerfil"

interface iPedidos {
    usuario: Usuario
}

export default function PedidosEmAndamento({ usuario }: iPedidos) {

    return (
        <main>
            <section className="">
                <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3 w-[90%] m-auto">
                    {
                        usuario.pedidos.map((pedido, i) => (
                            <div key={i}>
                                <PedidoAndamentoPerfil {...pedido} />
                            </div>
                        ))}
                </div>
            </section>
        </main>
    )
}         