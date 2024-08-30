'use client'
import BotaoGrande from "@/components/Botoes/BotaoGrande/BotaoGrande";
import Lojas from "@/components/Lojas/Lojas";
import TituloLinha from "@/components/TituloLinha/TituloLinha";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { FaSearch } from "react-icons/fa";
import { Filial } from "@/types/filiais";
import filiais from "@/banco/filiais.json";

interface InterfaceFiliais {
    searchParams?: { q: string }
}

export default function Filiais({ searchParams }: InterfaceFiliais) {
    const [isAdmin, setIsAdmin] = useState<boolean>(false)
    const [pesquisa, setPesquisa] = useState<string>('');
    const router = useRouter()

    const filiaisPesquisa: Filial[] = filiais.filter((filiais: Filial) =>
        filiais.nome.toLowerCase().includes(pesquisa.toLowerCase()) ||
        filiais.cidade.toLowerCase().includes(pesquisa.toLowerCase()) ||
        filiais.estado.toLowerCase().includes(pesquisa.toLowerCase()) ||
        filiais.funcionamentoDias.toLowerCase().includes(pesquisa.toLowerCase()) ||
        filiais.funcionamentoHora.toLowerCase().includes(pesquisa.toLowerCase()) ||
        filiais.rua.toLowerCase().includes(pesquisa.toLowerCase()) ||
        filiais.bairro.toLowerCase().includes(pesquisa.toLowerCase())
    );

    const ordenarFiliais = (filiais: Filial[], escolha: string): Filial[] => {
        if (escolha === 'Nome Z a A') {
            return [...filiais].sort((a, b) => a.nome.localeCompare(b.nome));
        } else if (escolha === 'Cidade A a Z') {
            return [...filiais].sort((a, b) => a.cidade.localeCompare(b.cidade));
        } else if (escolha === 'Estado A a Z') {
            return [...filiais].sort((a, b) => a.estado.localeCompare(b.estado));
        } else if (escolha === 'Funcionamento Dias A a Z') {
            return [...filiais].sort((a, b) => a.funcionamentoDias.localeCompare(b.funcionamentoDias));
        } else if (escolha === 'Funcionamento Hora Crescente') {
            return [...filiais].sort((a, b) => a.funcionamentoHora.localeCompare(b.funcionamentoHora));
        }

        return filiais;
    };

    const escolha = 'Ordenacao';
    const filiaisOrdenadas: Filial[] = ordenarFiliais(filiaisPesquisa, escolha);

    return (
        <section>
            <section>
                <TituloLinha titulo="Filiais" voltar={true}></TituloLinha>
            </section>
            <section className="flex flex-wrap w-[90%] m-auto justify-between">
                <div className="flex w-[72%] px-1 border border-preto rounded-lg h-10">
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
                <div className='sm:w-[30%] md:w-[40%] lg:w-[20%] mb-8'>
                    <BotaoGrande title='Adicionar nova filial' type='button' background='secundaria' size='h-9' onClick={() => router.push('/cadastrarFilial')} />
                </div>
            </section>
            <section className="grid xl:grid-cols-3 md:grid-cols-2 justify-center items-center m-auto w-[85%] mb-24 mt-12">
                {filiaisOrdenadas.map((filiais) => (
                    <section key={filiais.id}>
                        <Lojas src={filiais.src} nome={filiais.nome} cidade={filiais.cidade} estado={filiais.estado} cep={filiais.cep} rua={filiais.rua} bairro={filiais.bairro}
                            contato={filiais.contato} numero={filiais.numero} funcionamentoDias={filiais.funcionamentoDias} funcionamentoHora={filiais.funcionamentoHora} />
                    </section>
                ))}
            </section>
        </section>
    );
}
