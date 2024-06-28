'use client'
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import AgendamentosHoje from "@/components/AgendamentosHoje/agendamentosHoje";
import CalendarioAgendamentoDia from "@/components/CalendarioAgendamentoDia/calendarioAgendamentoDia";
import TituloLinha from "@/components/TituloLinha/TituloLinha";
import { Agendamentos } from '@/types/usuarios';
import usuarios from '@/banco/usuarios.json';
import FiltroGrande from "@/components/Filtro/FiltroGrande";
import { setLabel } from "@/server/filtros/action";
import { FaFilter } from "react-icons/fa6";

export default function Agendamentos() {
    const [agendamentos, setAgendamentos] = useState<Agendamentos[]>([]);
    const [pesquisa, setPesquisa] = useState('');

    useEffect(() => {
        const agendamentosData = usuarios.flatMap(usuario => usuario.agendamentos);
        setAgendamentos(agendamentosData);
    }, []);

    const agendamentosPesquisa = agendamentos.filter(agendamento =>
        agendamento.servico.toLowerCase().includes(pesquisa) ||
        agendamento.nomePet.toLowerCase().includes(pesquisa) ||
        agendamento.local.toLowerCase().includes(pesquisa) ||
        agendamento.horario.toLowerCase().includes(pesquisa) ||
        agendamento.profissional.toLowerCase().includes(pesquisa) ||
        agendamento.valor.toString().toLowerCase().includes(pesquisa) ||
        agendamento.status.toLowerCase().includes(pesquisa) ||
        agendamento.data.toString().toLowerCase().includes(pesquisa) ||
        agendamento.pagamento.toLowerCase().includes(pesquisa)
    );

    return (
        <section>
            <section className="mt-9 mb-14">
                <TituloLinha titulo={"Agendamentos"} />
                <div className="flex w-[60%] px-1 border border-preto rounded-lg h-8 mt-4 ml-[5%]">
                    <div className="size-[2rem] flex">
                        <button><FaSearch style={{ color: "#322828" }} /></button>
                    </div>
                    <input
                        type="search"
                        value={pesquisa}
                        onChange={(e) => setPesquisa(e.target.value)}
                        className="focus:outline-0 w-full text-xs sm:text-base placeholder:text-cinza-escuro font-poppins bg-branco"
                        placeholder="Pesquise nos agendamentos" />
                </div>
            </section>
            <section className="mb-24 flex justify-center font-poppins text-sm">
                <table className="table-auto w-[90%]">
                    <thead>
                        <tr className="text-center text-preto">
                            <th>Serviço</th>
                            <th className="hidden md:table-cell">Pet</th>
                            <th>Local</th>
                            <th className="hidden md:table-cell">Data</th>
                            <th>Horario</th>
                            <th>Profissional</th>
                            <th className="hidden sm:table-cell">Valor</th>
                            <th className="hidden sm:table-cell">Status</th>
                            <th className="hidden sm:table-cell">Pagamento</th>
                        </tr>
                    </thead>
                    <tbody className="lg:text-sm text-xs text-center text-preto break-word border-2 border-cinza">
                        {agendamentosPesquisa.map((agendamento, index) => (
                            <tr key={agendamento.id} className={index % 2 === 0 ? 'bg-cinza-claro' : ''}>
                                <td className="border border-x-cinza xl:3.5 lg:py-2 py-1.5 lg:px-1.5 md:px-1 px-0.5">{agendamento.servico}</td>
                                <td className="hidden md:table-cell border border-x-cinza py-3.5 px-1.5">{agendamento.nomePet}</td>
                                <td className="border border-x-cinza xl:3.5 lg:py-2 py-1.5 lg:px-1.5 md:px-1 px-0.5">{agendamento.local}</td>
                                <td className="hidden md:table-cell border border-x-cinza py-3.5 px-1.5">{agendamento.data}</td>
                                <td className="border border-x-cinza xl:3.5 lg:py-2 py-1.5 lg:px-1.5 md:px-1 px-0.5">{agendamento.horario}</td>
                                <td className="border border-x-cinza xl:3.5 lg:py-2 py-1.5 lg:px-1.5 md:px-1 px-0.5">{agendamento.profissional}</td>
                                <td className="hidden sm:table-cell border border-x-cinza xl:3.5 lg:py-2 py-1.5 lg:px-1.5 md:px-1 px-0.5">R${agendamento.valor}</td>
                                <td className="hidden sm:table-cell border border-x-cinza xl:3.5 lg:py-2 py-1.5 lg:px-1.5 md:px-1 px-0.5">{agendamento.status}</td>
                                <td className="hidden sm:table-cell border border-x-cinza xl:3.5 lg:py-2 py-1.5 lg:px-1.5 md:px-1 px-0.5">{agendamento.pagamento}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </section>
    );
}
