'use client'
import EscolhaData from "@/components/Agendamento/EscolhaData";
import EscolhaLocal from "@/components/Agendamento/EscolhaLocal";
import EscolhaPet from "@/components/Agendamento/escolhaPet";
import EscolhaServico from "@/components/Agendamento/escolhaServico";
import Resumo from "@/components/Agendamento/Resumo";
import BarraProcessoAgendamento from "@/components/BarraProcesso/BarraProcessoAgendamento";
import BotaoGrande from "@/components/BotaoGrande/BotaoGrande";
import CadastroPet from "@/components/Pop-up/CadastroPet/CadastroPet";
import Erro from "@/components/Pop-up/Erro/Erro";
import { useError } from "@/context/ErrorContext";
import { useState } from "react";
import { useRouter } from "next/navigation"

export default function agendamento() {

    const { push } = useRouter();
    const [estado, setEstado] = useState(0)
    const [openPet, setOpenPet] = useState(false);
    const {addError} = useError()!;

    const [pet, setPet] = useState("");
    const [servico, setServico] = useState("");
    const [local, setLocal] = useState("");
    const [data, setData] = useState("");
    const [hora, setHora] = useState("");
    const [profissional, setProfissional] = useState("");
    const [metodoPagamento, setMetodoPagamento] = useState("");

    const proximoPasso = () => {
        if(estado <= 0) {
            setEstado(estado + 1)
        } else if(estado == 1) {
            servico == "" ? addError("Selecione o serviço para agendamento!") : setEstado(estado + 1)
        } else if(estado == 2) {
            local == "" ? addError("Selecione o local para o agendamento!") : setEstado(estado + 1)
        } else if(estado == 3) {
            data == "" ? addError("Selecione a data para o agendamento!") :
            hora == "" ? addError("Selecione o horário e profissional para o agendamento!") : 
            setEstado(estado + 1)
        } else {
            setEstado(estado + 1)
        }
    }

    const passoAnterior = () => {
        estado <= -1 ? (setEstado(0)) : setEstado(estado - 1)
    }

    const concluirCompra = () => {
        metodoPagamento == "cartao" ? push('./pagamentoCartao') : 
        metodoPagamento == "boleto" ? push('./pagamentoBoleto') :
        metodoPagamento == "pix" ? push('./pagamentoPix') : addError("Selecione o método de pagamento!")
        
    }

    return (
        <main className="w-full flex flex-col items-center py-12">
            <Erro />
            <div className='w-full'>
                {openPet && (
                    <div className='overflow-hidden'>
                        <div className='fixed top-0 left-0 w-full h-full z-50 bg-fundo-modal' onClick={() => setOpenPet(false)}></div>
                        <div className='fixed w-[60%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50'>
                            <CadastroPet setOpen={setOpenPet} />
                        </div>
                    </div>
                )}
            </div>

            <div className="w-full">
                <BarraProcessoAgendamento estado={estado} />
            </div>

            <div className="w-full flex items-center justify-center pb-8">
                {(estado <= 0 ?
                    <div className="w-full">
                        <EscolhaPet />
                    </div>
                    : estado == 1 ?
                        <div className="w-full">
                            <EscolhaServico setServicoEscolhido={setServico} />
                        </div>
                        : estado == 2 ?
                            <div className="w-full">
                                <EscolhaLocal setLocalEscolhido={setLocal} />
                            </div>
                            : estado == 3 ?
                                <div className="w-[90%]">
                                    <EscolhaData setDataSelecionada={setData} setHoraSelecionada={setHora} setProfissionalSelecionada={setProfissional} />
                                </div>
                                :
                                <div className="w-[80%] flex">
                                    <Resumo local={local} servico={servico} data={data} hora={hora} profissional={profissional} setMetodoPagamento={setMetodoPagamento} />
                                </div>
                )}
            </div>

            <div className={`flex w-[90%] gap-2 sm:flex-row ${estado <= 0 ? `flex-col` : `flex-col-reverse`} justify-between items-center sm:items-end`}>
                <div className="w-full flex sm:items-start items-center flex-col gap-4">
                    <div className={`${estado <= 0 ? `flex flex-col` : `hidden`}`}>
                        <p className='font-averia text-preto font-bold text-xl sm:text-2xl'>Gostaria de cadastrar um pet?</p>
                        <p className='font-poppins text-preto text-sm sm:text-md mt-2 text-start md:w-[55%] w-full'>Clique no botão abaixo para cadastrar, depois continue os procedimentos para agendar um serviço para o seu mais novo pet :)</p>
                    </div>
                    <div className="w-full sm:w-2/12" onClick={() => estado <= -1 ? setOpenPet(true) : setOpenPet(false)}>
                        <BotaoGrande onClick={() => passoAnterior()} title={estado <= 0 ? "Cadastrar pet" : "Anterior"} background={"bg-terciaria"} type={"button"} />
                    </div>
                </div>
                <div className="w-full sm:w-2/12">
                    <BotaoGrande onClick={() => estado >= 4 ? concluirCompra() : proximoPasso()} title={estado >= 4 ? "Concluir" : "Próximo"} background={"bg-secundaria"} type={"button"} />
                </div>
            </div>
        </main>
    )
}