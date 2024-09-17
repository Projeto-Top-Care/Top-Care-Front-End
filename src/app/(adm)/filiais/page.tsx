'use client'
import BotaoGrande from "@/components/Botoes/BotaoGrande/BotaoGrande";
import Lojas from "@/components/Lojas/Lojas";
import TituloLinha from "@/components/TituloLinha/TituloLinha";
import { useEffect, useState } from "react";
import { useRouter } from 'next/navigation';
import { Filial } from "@/types/filiais";
import BarraPesquisaComum from "@/components/BarraPesquisaComum/BarraPesquisaComum";
import { buscarFiliais } from "@/server/filiais/action";

interface InterfaceFiliais {
    isAdmin: boolean
}

export default function Filiais({ isAdmin }: InterfaceFiliais) {

    const [filiaisArray, setFiliaisArray] = useState<Filial[]>([])
    const [listagem, setListagem] = useState<Filial[]>([])
    const [pesquisa, setPesquisa] = useState<string>('');
    const [filiaisMostradas, setFiliaisMostradas] = useState<Filial[]>([])
    const router = useRouter();

    // const filiaisPesquisa: Filial[] = filiais.filter((filiais: Filial) =>
    //     filiais.nome.toLowerCase().includes(pesquisa.toLowerCase()) ||
    //     filiais.cidade.toLowerCase().includes(pesquisa.toLowerCase()) ||
    //     filiais.estado.toLowerCase().includes(pesquisa.toLowerCase()) ||
    //     filiais.funcionamentoDias.toLowerCase().includes(pesquisa.toLowerCase()) ||
    //     filiais.funcionamentoHora.toLowerCase().includes(pesquisa.toLowerCase()) ||
    //     filiais.rua.toLowerCase().includes(pesquisa.toLowerCase()) ||
    //     filiais.bairro.toLowerCase().includes(pesquisa.toLowerCase())
    // );


    useEffect(() => {
        const func = async () => {
            const filial = await buscarFiliais('1')
            filial.endereco.rua
            filial.endereco.bairro
            filial.endereco.cep
            filial.endereco.cidade
            filial.endereco.estado
            filial.endereco.numero
        }
        func()
    }, [])

    const searchService = () => {
        const arrayPesquisa = filiaisArray.filter((filtred) => {
            return filtred.nome.toLowerCase().includes(pesquisa.toLowerCase())
        })

        setListagem(arrayPesquisa)
    }

    useEffect(() => {
        if (pesquisa != "") {
            searchService()
        } else {
            setListagem(filiaisArray)
        }
    }, [pesquisa])


    const ordenarFiliais = (filiais: Filial[], escolha: string): Filial[] => {
        if (escolha === 'Nome Z a A') {
            return [...filiais].sort((a, b) => a.nome.localeCompare(b.nome));
        }

        return filiais;
    };

    const escolha = 'Ordenacao';
    const filiaisOrdenadas: Filial[] = ordenarFiliais(filiaisArray, escolha);

    // const mostrarFiliais = useMemo(() => {
    //     return (
    //         filiaisMostradas.map((filiais) => (
    //             <div key={filiais.id}>
    //                 <Lojas src={filiais.src} nome={filiais.nome} cidade={filiais.endereco.cidade} estado={filiais.endereco.estado}
    //                     rua={filiais.endereco.rua} bairro={filiais.endereco.bairro} numero={filiais.endereco.numero}
    //                     cep={filiais.endereco.cep} contato={filiais.contato} funcionamentoDias={filiais.horarioFuncionamento} funcionamentoHora={filiais.diasDaSemana} />
    //             </div>
    //         ))
    //     )
    // }, [])

    return (
        <section>
            <section>
                <TituloLinha titulo="Filiais" voltar={true}></TituloLinha>
            </section>
            <section className="flex md:flex-row flex-col md:gap-2 gap-4 w-[90%] m-auto justify-between">
                <div className="border border-cinza-escuro rounded-lg w-full lg:w-1/2 mb-10">
                    <BarraPesquisaComum placeholder={"Pesquisar por filial"} value={setPesquisa} />
                </div>
                <div className='w-full md:w-[32%] lg:w-[20%]'>
                    <BotaoGrande title='Adicionar nova filial' type='button' background='secundaria' size='md:h-10 h-8' onClick={() => router.push('/cadastrarFilial')} />
                </div>
            </section>
            {/* <section className="grid lg:grid-cols-3 md:grid-cols-2 justify-center items-center m-auto w-[90%] md:mb-24 mb-12 md:mt-12 mt-8 gap-16 ">
                {filiaisOrdenadas.map((filiais) => (
                    <section key={filiais.id} onClick={() => handleFilialClick(filiais.id)} className="cursor-pointer">
                        <Lojas src={filiais.src} nome={filiais.nome} contato={filiais.contato} funcionamentoDias={filiais.funcionamentoDias} funcionamentoHora={filiais.funcionamentoHora} cidade={""} estado={""} rua={""} bairro={""} numero={0} cep={""} />
                    </section>
                ))}
            </section> */}
            {/* {
                isAdmin && (
                    <div className='flex justify-center md:block'>
                        <div className='w-fit sm:w-[30%] md:w-[40%] mt-6 md:ml-5 lg:w-[30%] lg:ml-0'>
                            <BotaoGrande title='Adicionar nova filial' type='button' background='secundaria' size='h-9' onClick={() => router.push('/cadastrarFilial')} />
                        </div>
                    </div>
                )
            } */}
            <section className="w-[90%] lg:w-[80%] m-auto gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-6 sm:pt-12 pb-16 sm:pb-20">
                {
                    filiaisOrdenadas.map((filial, index) => (
                        <Lojas key={index} src={""} nome={filial.nome} cidade={filial.endereco.cidade} estado={filial.endereco.estado} rua={filial.endereco.rua} bairro={filial.endereco.bairro} numero={filial.endereco.numero} cep={filial.endereco.cep} contato={filial.contato} funcionamentoDias={filial.diasDaSemana} funcionamentoHora={filial.horarioFuncionamento} />
                    ))
                }
            </section>
        </section>
    );
}
