'use client'
import InputText from "../../InputText/InputText";
import { useEffect, useState } from "react";
import BotaoGrande from "@/components/Botoes/BotaoGrande/BotaoGrande";
import { Endereco, ViaCEP } from "@/types/usuarios";
import { deletarEndereco, editarEnderecos } from "@/server/usuario/endereco";

import InputTextMask from "@/components/InputMask/InputMask";
import { useConfirmacao } from "@/context/confirmacaoContext";
import Confirmacao from "../Confirmacao/Confirmacao";
import DoisBotoes from "../DoisBotoes/DoisBotoes";

interface ICadastroEndereco {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    endereco: Endereco
}

export default function EditarEndereco({ setOpen, endereco }: ICadastroEndereco) {
    const { addConfirmacao } = useConfirmacao()
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [sim, setSim] = useState<boolean>(false)

    const [cep, setCep] = useState("");
    const [enderecoBuscado, setEndereco] = useState<ViaCEP>();

    const buscarCep = async () => {
        if (cep.length < 9) {
            setEndereco(undefined)
            return
        }
        try {
            const infosEndereco = await fetch('https://viacep.com.br/ws/' + cep + '/json/')
            const consultarCEPConvert: ViaCEP = await infosEndereco.json()

            if (consultarCEPConvert.erro) {
                throw Error('CEP inexistente')
            }
            setEndereco(consultarCEPConvert);
        } catch (erro) {
            setEndereco(undefined)

        }
    }

    const editEndereco = async (e: FormData) => {
        const objectEndereco = Object.fromEntries(e)
        console.log(objectEndereco)

        await editarEnderecos(objectEndereco, endereco.id)
        addConfirmacao("Endereco editado!")
        setOpen(false)
    }

    const deleteEndereco = async () => {
        if(sim){
            const response = await deletarEndereco(endereco.id)
            setOpenModal(false)
            setOpen(false)
            addConfirmacao(response)
        }else{
            setOpenModal(false)
        }
    }

    useEffect(()=>{
        deleteEndereco()
    },[sim])


    return (
        <>
            <form action={editEndereco} className="w-full flex justify-center flex-col bg-branco rounded-lg">
                <div className=" flex justify-center">
                    <h1 className="font-averia font-bold text-center md:text-2xl text-lg mt-4">Editar Endereço</h1>
                </div>
                <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center justify-between p-4 m-auto lg:gap-6 md:gap-2 gap-1">
                    <div className="flex flex-col lg:gap-6 md:gap-2 gap-1 ">
                        <InputTextMask
                            name="cep"
                            placeholder="Cep*"
                            type="text"
                            onChange={(e) => setCep(e.target.value)}
                            defaultValue={endereco.cep}
                            onBlur={buscarCep}
                            mask="_____-___"
                            replacement={{ _: /\d/ }}
                            required
                        />
                        <InputText name="rua" placeholder="Rua*" type="text" value={enderecoBuscado && enderecoBuscado?.logradouro != "" ? enderecoBuscado.logradouro : undefined} defaultValue={endereco.rua} />
                    </div>
                    <div className="flex flex-col lg:gap-6 md:gap-2 gap-1 ">
                        <InputText name="estado" required placeholder="Estado*" value={enderecoBuscado ? enderecoBuscado.uf : endereco.estado} />
                        <InputText name="numero" placeholder="Numero*" type="number" min={1} required defaultValue={endereco.numero} />
                    </div>
                    <div className="flex flex-col lg:gap-6 md:gap-2 gap-1 ">
                        <InputText name="cidade" placeholder="Cidade*" type="text" value={enderecoBuscado ? enderecoBuscado.localidade : endereco.cidade} required />
                        <InputText name="complemento" placeholder="Complemento*" type="text" required defaultValue={endereco.complemento} />
                    </div>
                    <div className="flex flex-col lg:gap-6 md:gap-2 gap-1 ">
                        <InputText name="bairro" placeholder="Bairro*" type="text" value={enderecoBuscado && enderecoBuscado?.bairro != "" ? enderecoBuscado.bairro : undefined} defaultValue={endereco.bairro} required />
                        <InputText name="nome" placeholder="Nome de exibição*" type="text" required defaultValue={endereco.nome} />
                    </div>
                </div>
                <div className="w-full flex flex-row items-center justify-center gap-10">
                    <div className="mb-4 w-64">
                        <BotaoGrande title={"Excluir endereço"} background={"cancelar"} type={"button"} onClick={()=>setOpenModal(true)}/>
                    </div>
                    <div className="mb-4 w-64">
                        <BotaoGrande title={"Salvar Alterações"} background={"secundaria"} type={"submit"} />
                    </div>
                </div>
            </form>
            {
                openModal && (
                    <div className="w-full absolute">
                        <div className='fixed top-0 left-0 w-full h-full z-50  bg-fundo-modal' onClick={() => setOpenModal(false)}></div>
                        <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 lg:w-[30%] w-[60%]`}>
                            <DoisBotoes texto={`Você deseja remover ${endereco.nome}?`} openParms={setOpenModal} sim={setSim} />
                        </div>
                    </div>
                )
            }

        </>
    )
}