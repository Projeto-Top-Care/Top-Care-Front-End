'use client'
import EscolhaData, { Profissional } from "@/components/Agendamento/EscolhaData";
import EscolhaLocal from "@/components/Agendamento/EscolhaLocal";
import EscolhaPet from "@/components/Agendamento/escolhaPet";
import EscolhaServico from "@/components/Agendamento/escolhaServico";
import Resumo from "@/components/Agendamento/Resumo";
import BarraProcessoAgendamento from "@/components/BarraProcesso/BarraProcessoAgendamento";
import BotaoGrande from "@/components/Botoes/BotaoGrande/BotaoGrande";
import CadastroPet from "@/components/Pop-up/CadastroPet/CadastroPet";
import Erro from "@/components/Pop-up/Erro/Erro";
import { useError } from "@/context/ErrorContext";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"
import { Pet, Usuario } from "@/types/usuarios";
import DoisBotoes from "@/components/Pop-up/DoisBotoes/DoisBotoes";
import Confirmacao from "@/components/Pop-up/Confirmacao/Confirmacao";
import { Filial, Servico, VariantesProps } from "@/types/servicos";
import { useConfirmacao } from "@/context/confirmacaoContext";

export default function agendamento() {

    const { push } = useRouter();
    const { addError } = useError();
    const { addConfirmacao } = useConfirmacao();

    const [etapa, setEtapa] = useState(0)
    const [openPet, setOpenPet] = useState(false);

    const [openConfirmacao, setOpenConfirmacao] = useState<boolean>(false)
    const [confirmado, setConfirmado] = useState<boolean>(false)

    const [pet, setPet] = useState<Pet>();
    const [servico, setServico] = useState<Servico>();
    const [variante, setVariante] = useState<VariantesProps>();
    const [local, setLocal] = useState<Filial>();
    const [data, setData] = useState("");
    const [hora, setHora] = useState("");
    const [profissional, setProfissional] = useState<Profissional>();
    const [metodoPagamento, setMetodoPagamento] = useState(0);

    const processos = [

        <EscolhaPet
            setPet={setPet}
            pet={pet}
        />,
        <EscolhaServico
            setServicoEscolhido={setServico}
            servicoSelecionado={servico}
            variante={variante}
            setVariante={setVariante}
            petId={pet?.id}
        />,
        <EscolhaLocal
            setLocal={setLocal}
            local={local}
        />,
        <EscolhaData
            setData={setData}
            setHora={setHora}
            setProfissional={setProfissional}
            data={data}
            hora={hora}
            profissional={profissional}
            servicoId={servico?.id.toString() || ''}
        />,
        <Resumo
            petNome={pet?.nome || ''}
            local={local?.nome || ''}
            servico={servico?.nome || ''}
            variante={variante}
            data={data}
            hora={hora}
            profissional={profissional?.nome || ''}
            setMetodoPagamento={setMetodoPagamento} 
            metodo={metodoPagamento}
        />

    ]

    const verificarEtapa = () => {
        if (etapa == 0 && !pet) {
            addError("Selecione um pet!")
        } else if (etapa == 1) {
            if(!servico){
                addError("Selecione um serviço!")
            }else if(!variante){
                addError("Selecione uma variação!")
            }else{
                setEtapa(etapa + 1)
            }
        } else if (etapa == 2 && !local) {
            addError("Selecione um local!")
        } else if (etapa == 3 && (!data || !hora || !profissional)) {
            addError("Selecione uma data, hora e profissional!")
        } else {
            setEtapa(etapa + 1)
        }
    } 
    
    const etapaAnterior = () => {
        if(etapa == 1){
            setServico(undefined)
            setVariante(undefined)
        }else if(etapa == 2){
            setLocal(undefined)
        }else if(etapa == 3){
            setData("")
            setHora("")
            setProfissional(undefined)
        }
        setEtapa(etapa - 1)
    }

    const concluirCompra = () => {
        if (metodoPagamento) {
            setOpenConfirmacao(true)
            if (confirmado) {
                if(metodoPagamento == 1){
                    push('/Perfil')
                    addConfirmacao("Agendamento marcado com sucesso!")
                }else if(metodoPagamento == 2){
                    push('/pagamentoBoleto') 
                }else {
                    push('/pagamentoPix')
                }
            }
        } else if (etapa >= 4) {
            addError("Selecione o método de pagamento!")
        }
    }

    useEffect(() => {
        concluirCompra()
    }, [confirmado])

    return (
        <main className="w-full flex flex-col items-center py-12">
            <Erro />
            <Confirmacao />
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
                <BarraProcessoAgendamento estado={etapa} />
            </div>

            <div className="w-full flex items-center justify-center pb-8">
                <div className={`${etapa >= 3 ? 'w-[80%] m-auto' : 'w-full'}`}>
                    {
                        processos[etapa]
                    }
                </div>
            </div>

            {openConfirmacao && (
                <div className="w-full">
                    <div className='fixed top-0 left-0 w-full h-full z-50  bg-fundo-modal' onClick={() => setOpenConfirmacao(false)}></div>
                    <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 lg:w-[25%] w-[60%]`}>
                        <DoisBotoes texto="Confirmar agendamento?" openParms={setOpenConfirmacao} sim={setConfirmado} />
                    </div>
                </div>
            )}

            <div className={`flex w-[90%] gap-2 sm:flex-row ${etapa <= 0 ? `flex-col` : `flex-col-reverse`} justify-between items-center sm:items-end`}>
                <div className="w-full flex sm:items-start items-center flex-col gap-4">
                    <div className={`${etapa <= 0 ? `flex flex-col` : `hidden`}`}>
                        <p className='font-averia text-preto font-bold text-xl sm:text-2xl'>Gostaria de cadastrar um pet?</p>
                        <p className='font-poppins text-preto text-sm sm:text-md mt-2 text-start md:w-[55%] w-full'>Clique no botão abaixo para cadastrar, depois continue os procedimentos para agendar um serviço para o seu mais novo pet :)</p>
                    </div>
                    <div className="w-full sm:w-2/12" onClick={() => etapa <= -1 ? setOpenPet(true) : setOpenPet(false)}>
                        <BotaoGrande onClick={() => etapaAnterior()} title={etapa <= 0 ? "Cadastrar pet" : "Anterior"} background="terciaria" type={"button"} />
                    </div>
                </div>
                <div className="w-full sm:w-2/12">
                    <BotaoGrande onClick={() => etapa >= 4 ? concluirCompra() : verificarEtapa()} title={etapa >= 4 ? "Concluir" : "Próximo"} background="secundaria" type={"button"} />
                </div>
            </div>
        </main>
    )
}