'use client'
import FiltroGrande from "@/components/Filtro/FiltroGrande";
import TituloLinha from "@/components/TituloLinha/TituloLinha";
import { Pedidos } from "@/types/pedidos";
import { useState } from "react";
import { FaSearch } from 'react-icons/fa';
import pedidos from "@/banco/pedidos.json"

export default function Pedidos() {
    const [pesquisa, setPesquisa] = useState('');

    const pedidosPesquisa = pedidos.filter(pedido =>
        pedido.Cod_pedido.includes(pesquisa) ||
        pedido.Dt_pedido.includes(pesquisa) ||
        pedido.Produto.includes(pesquisa) ||
        pedido.Cliente.includes(pesquisa) ||
        pedido.Destino.includes(pesquisa) ||
        pedido.Valor.includes(pesquisa) ||
        pedido.Status.includes(pesquisa) ||
        pedido.Pagamento.includes(pesquisa)
    );

    return (
        <section>
            <section className="mt-9  mb-28">
                <TituloLinha titulo={"Pedidos"} />
                <div className="flex w-2/3 px-1 border border-preto rounded-lg h-8 m-auto mt-16">
                    <div className="size-[2rem] flex items-center justify-center">
                        <button><FaSearch style={{ color: "#322828" }} /></button>
                    </div>
                    <input
                        type="search"
                        value={pesquisa}
                        onChange={(e) => setPesquisa(e.target.value)}
                        className="focus:outline-0 w-full text-xs sm:text-base placeholder:text-cinza-escuro font-poppins bg-branco"
                        placeholder="Pesquise nos favoritos" />
                </div>
            </section>
            <section className="mb-24 flex justify-center font-poppins text-sm">
                <table className="table-auto w-[90%]">
                    <thead>
                        <tr className="text-center text-preto">
                            <th>Cod pedido</th>
                            <th className="hidden md:table-cell">Dt. pedido</th>
                            <th>Produto</th>
                            <th className="hidden md:table-cell">Quantidade</th>
                            <th className="hidden sm:table-cell">Cliente</th>
                            <th className="hidden sm:table-cell">Destino</th>
                            <th>Valor</th>
                            <th>Status</th>
                            <th className="hidden sm:table-cell">Pagamento</th>
                        </tr>
                    </thead>
                    <tbody className="lg:text-sm text-xs text-center text-preto break-word border-2 border-cinza">
                        {pedidosPesquisa.map((pedido, index) => (
                            <tr key={pedido.id} className={index % 2 === 0 ? 'bg-cinza-claro' : ''}>
                                <td className="border border-x-cinza xl:3.5 lg:py-2 py-1.5 lg:px-1.5 md:px-1 px-0.5">{pedido.Cod_pedido}</td>
                                <td className="hidden md:table-cell border border-x-cinza py-3.5 px-1.5">{pedido.Dt_pedido}</td>
                                <td className="border border-x-cinza xl:3.5 lg:py-2 py-1.5 lg:px-1.5 md:px-1 px-0.5">{pedido.Produto}</td>
                                <td className="hidden md:table-cell border border-x-cinza py-3.5 px-1.5">{pedido.Quantidade}</td>
                                <td className="hidden sm:table-cell border border-x-cinza xl:3.5 lg:py-2 py-1.5 lg:px-1.5 md:px-1 px-0.5">{pedido.Cliente}</td>
                                <td className="hidden sm:table-cell border border-x-cinza xl:3.5 lg:py-2 py-1.5 lg:px-1.5 md:px-1 px-0.5">{pedido.Destino}</td>
                                <td className="border border-x-cinza xl:3.5 lg:py-2 py-1.5 lg:px-1.5 md:px-1 px-0.5">{pedido.Valor}</td>
                                <td className="border border-x-cinza xl:3.5 lg:py-2 py-1.5 lg:px-1.5 md:px-1 px-0.5">{pedido.Status}</td>
                                <td className="hidden sm:table-cell border border-x-cinza xl:3.5 lg:py-2 py-1.5 lg:px-1.5 md:px-1 px-0.5">{pedido.Pagamento}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </section>
    )
}

function setPesquisa(value: string): void {
    throw new Error("Function not implemented.");
}
