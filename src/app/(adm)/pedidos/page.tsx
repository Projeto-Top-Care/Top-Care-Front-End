'use client'
import FiltroGrande from "@/components/Filtro/FiltroGrande";
import TituloLinha from "@/components/TituloLinha/TituloLinha";
import type { Pedidos } from "@/types/pedidos";
import { useState } from "react";
import { FaSearch } from 'react-icons/fa';
import pedidos from "@/banco/pedidos.json"
import { IoIosArrowDown, IoIosLogOut } from "react-icons/io";
import { useRouter } from "next/navigation";
import { Pedidos as PedidoType } from '@/types/pedidos';
import pedidosData from "@/banco/pedidos.json";
import Select from "@/components/Select/Select";


export default function Pedidos() {
    const [pesquisa, setPesquisa] = useState('');
    const [escolha, setEscolha] = useState<string>('');
    const router = useRouter()


    const pedidosPesquisa : PedidoType[] = pedidosData.filter((pedido : PedidoType) =>
        pedido.Cod_pedido.includes(pesquisa) ||
        pedido.Dt_pedido.includes(pesquisa) ||
        pedido.Produto.includes(pesquisa) ||
        pedido.Cliente.includes(pesquisa) ||
        pedido.Destino.includes(pesquisa) ||
        pedido.Valor.toString().includes(pesquisa) ||
        pedido.Status.includes(pesquisa) ||
        pedido.Pagamento.includes(pesquisa)
    );

    const ordenarPedidos = (pedidos: PedidoType[]): PedidoType[] => {
        if (escolha === 'Valor Crescente') {
            return [...pedidos].sort((a, b) => a.Valor - b.Valor);
        } else if (escolha === 'Valor Decrescente') {
            return [...pedidos].sort((a, b) => b.Valor - a.Valor);
        } else if (escolha == 'A a Z') {
            return [...pedidos].sort((a, b) => a.Cliente > b.Cliente ? 1 : -1);
        } else if (escolha === 'Data Crescente') {
            return [...pedidos].sort((a, b) => new Date(a.Dt_pedido).getTime() - new Date(b.Dt_pedido).getTime());
        } else if (escolha === 'Data Decrescente') {
            return [...pedidos].sort((a, b) => new Date(b.Dt_pedido).getTime() - new Date(a.Dt_pedido).getTime());
        }
        return pedidos;
    }

    const pedidosOrdenados: PedidoType[] = ordenarPedidos(pedidosPesquisa);


    return (
        <section className="mb-28 text-preto">
            <section className="mb-14 flex flex-col gap-4">
                <TituloLinha titulo={"Pedidos"} voltar={false} />
                <div className="flex justify-between w-[90%] m-auto">
                    <div className="flex w-[60%] px-1 border border-preto rounded-lg h-10">
                        <div className="size-[2rem] h-full flex">
                            <button><FaSearch style={{ color: "#322828" }} /></button>
                        </div>
                        <input
                            type="search"
                            value={pesquisa}
                            onChange={(e) => setPesquisa(e.target.value)}
                            className="focus:outline-0 w-full text-xs sm:text-base placeholder:text-cinza-escuro font-poppins bg-branco"
                            placeholder="Pesquise nos pedidos" />
                    </div>
                    <div className='md:w-[18%] w-[38%]'>
                        <Select options={['Data Crescente', 'Data Decrescente', 'Valor Crescente', 'Valor Decrescente', 'A a Z']} opcaoSelecionada={(opcao) => setEscolha(opcao)} label={'Ordenar Por'} opcao={escolha}/>
                    </div>
                </div>
            </section>
            <section className="mb-24 flex justify-center font-poppins text-sm">
                <table className="table-auto w-[90%]">
                    <thead>
                        <tr className="text-center text-preto">
                            <th>Cod pedido</th>
                            <th className="hidden md:table-cell">Dt. pedido</th>
                            <th className="">Cliente</th>
                            <th className="hidden sm:table-cell">Destino</th>
                            <th>Valor</th>
                            <th>Status</th>
                            <th className="hidden sm:table-cell">Pagamento</th>
                        </tr>
                    </thead>
                    <tbody className="lg:text-sm text-xs text-center text-preto break-word border-2 border-cinza">
                        {pedidosOrdenados.map((pedido, index) => (
                            <tr key={pedido.id} className={index % 2 === 0 ? 'bg-cinza-claro' : ''}>
                                <td className="border border-x-cinza xl:py-3.5 lg:py-2 py-1.5 lg:px-1.5 md:px-1 px-0.5">{pedido.Cod_pedido}</td>
                                <td className="hidden sm:table-cell border border-x-cinza xl:py-3.5 lg:py-2 py-1.5 lg:px-1.5 md:px-1 px-0.5">{pedido.Dt_pedido}</td>
                                <td className="border border-x-cinza xl:py-3.5 lg:py-2 py-1.5 lg:px-1.5 md:px-1 px-0.5">{pedido.Cliente}</td>
                                <td className="hidden sm:table-cell border border-x-cinza xl:py-3.5 lg:py-2 py-1.5 lg:px-1.5 md:px-1 px-0.5">{pedido.Destino}</td>
                                <td className="border border-x-cinza xl:py-3.5 lg:py-2 py-1.5 lg:px-1.5 md:px-1 px-0.5">R${pedido.Valor.toFixed(2).replace(".",",")}</td>
                                <td className="border border-x-cinza xl:py-3.5 lg:py-2 py-1.5 lg:px-1.5 md:px-1 px-0.5">{pedido.Status}</td>
                                <td className="hidden sm:table-cell border border-x-cinza xl:py-3.5 lg:py-2 py-1.5 lg:px-1.5 md:px-1 px-0.5">{pedido.Pagamento}</td>
                                <td className="text-center"><IoIosLogOut size={20} className="m-auto cursor-pointer" onClick={()=> router.push(`/visualizarPedido?id=${pedido.id}`)}/></td>
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