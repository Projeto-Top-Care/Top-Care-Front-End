'use client'
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import TituloLinha from "@/components/TituloLinha/TituloLinha";
import { Agendamentos as AgendamentoType } from '@/types/agendamentos';
import agendamentosData from "@/banco/agendamentos.json";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosLogOut } from "react-icons/io";
import { useRouter } from "next/navigation";
import Select from "@/components/Select/Select";


export default function Agendamentos() {
    const [pesquisa, setPesquisa] = useState<string>('');
    const [escolha, setEscolha] = useState<string>('');
    const router = useRouter();

    const agendamentosPesquisa: AgendamentoType[] = agendamentosData.filter((agendamento: AgendamentoType) =>
        agendamento.servico.includes(pesquisa.toLowerCase()) ||
        agendamento.nomePet.includes(pesquisa.toLowerCase()) ||
        agendamento.local.includes(pesquisa.toLowerCase()) ||
        agendamento.horario.includes(pesquisa.toLowerCase()) ||
        agendamento.profissional.includes(pesquisa.toLowerCase()) ||
        agendamento.valor.toString().includes(pesquisa.toLowerCase()) ||
        agendamento.status.includes(pesquisa.toLowerCase()) ||
        agendamento.data.toString().includes(pesquisa.toLowerCase()) ||
        agendamento.pagamento.includes(pesquisa.toLowerCase())
    );

    const ordenarAgendamentos = (agendamentos: AgendamentoType[]): AgendamentoType[] => {
        if (escolha === 'Data Crescente') {
            return [...agendamentos].sort((a, b) => new Date(a.data).getTime() - new Date(b.data).getTime());
        } else if (escolha === 'Data Decrescente') {
            return [...agendamentos].sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime());
        } else if (escolha === 'Valor Crescente') {
            return [...agendamentos].sort((a, b) => a.valor - b.valor);
        } else if (escolha === 'Valor Decrescente') {
            return [...agendamentos].sort((a, b) => b.valor - a.valor);
        }else if (escolha == 'A a Z') {
            return [...agendamentos].sort((a, b) => a.servico > b.servico ? 1 : -1);
        }
        return agendamentos;
    }

    const agendamentosOrdenados: AgendamentoType[] = ordenarAgendamentos(agendamentosPesquisa);

    return (
        <section>
            <section className="mb-14 text-preto flex flex-col gap-4">
                <TituloLinha titulo={"Agendamentos"} voltar={false} />
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
                            placeholder="Pesquise nos agendamentos" />
                    </div>
                    <div className='md:w-[18%] w-[38%]'>
                        <Select
                            options={['Data Crescente', 'Data Decrescente', 'Valor Crescente', 'Valor Decrescente', 'A a Z']} opcaoSelecionada={(opcao) => setEscolha(opcao)} label={'Ordenar Por'} opcao={escolha}/>
                    </div>
                </div>
            </section>
            <section className="mb-24 flex justify-center font-poppins text-sm">
                <table className="table-auto w-[90%]">
                    <thead>
                        <tr className="text-center text-preto">
                            <th>Serviço</th>
                            <th className="hidden md:table-cell">Pet</th>
                            <th>Local</th>
                            <th>Horario</th>
                            <th className="hidden sm:table-cell">Data</th>
                            <th>Profissional</th>
                            <th className="hidden sm:table-cell">Valor</th>
                            <th className="hidden sm:table-cell">Status</th>
                            <th className="hidden sm:table-cell">Pagamento</th>
                        </tr>
                    </thead>
                    <tbody className="lg:text-sm text-xs text-center text-preto break-word border-2 border-cinza">
                    {agendamentosOrdenados.map((agendamento, index) => (
                            <tr key={agendamento.id} className={index % 2 === 0 ? 'bg-cinza-claro' : ''}>
                                <td className="border border-x-cinza xl:py-3.5 lg:py-2 py-1.5 lg:px-1.5 md:px-1 px-0.5">{agendamento.servico}</td>
                                <td className="hidden md:table-cell border border-x-cinza xl:py-3.5 lg:py-2 py-1.5 lg:px-1.5 md:px-1 px-0.5">{agendamento.nomePet}</td>
                                <td className="border border-x-cinza xl:py-3.5 lg:py-2 py-1.5 lg:px-1.5 md:px-1 px-0.5">{agendamento.local}</td>
                                <td className="border border-x-cinza xl:py-3.5 lg:py-2 py-1.5 lg:px-1.5 md:px-1 px-0.5">{agendamento.horario}</td>
                                <td className="hidden sm:table-cell border border-x-cinza xl:py-3.5 lg:py-2 py-1.5 lg:px-1.5">{agendamento.data}</td>
                                <td className="border border-x-cinza xl:py-3.5 lg:py-2 py-1.5 lg:px-1.5 md:px-1 px-0.5">{agendamento.profissional}</td>
                                <td className="hidden sm:table-cell border border-x-cinza xl:py-3.5 lg:py-2 py-1.5 lg:px-1.5 md:px-1 px-0.5">R${agendamento.valor.toFixed(2).replace(".",",")}</td>
                                <td className="hidden sm:table-cell border border-x-cinza xl:py-3.5 lg:py-2 py-1.5 lg:px-1.5 md:px-1 px-0.5">{agendamento.status}</td>
                                <td className="hidden sm:table-cell border border-x-cinza xl:py-3.5 lg:py-2 py-1.5 lg:px-1.5 md:px-1 px-0.5">{agendamento.pagamento}</td>
                                <td className="text-center"><IoIosLogOut size={20} className="m-auto cursor-pointer" onClick={() => router.push(`/visualizarAgendamento?id=${agendamento.id}`)} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </section>
    );
}
