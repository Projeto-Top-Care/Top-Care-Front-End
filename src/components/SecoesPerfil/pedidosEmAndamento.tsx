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
                <div className="grid md:mb-12 mb-4 md:w-[95%] lg:pl-16 md:pl-10 md:p-0 p-4 lg:self-start self-center gap-8 lg:grid-cols-3 md:grid-cols-2 ">
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