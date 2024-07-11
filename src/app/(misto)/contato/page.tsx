'use client'
import BotaoGrande from "@/components/BotaoGrande/BotaoGrande";
import InputText from "@/components/InputText/InputText";
import Erro from "@/components/Pop-up/Erro/Erro";
import UmBotao from "@/components/Pop-up/UmBotao/UmBotao";
import Select from "@/components/Select/Select";
import TextArea from "@/components/TextArea/TextArea";
import { ChangeEvent, useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { FaRegFilePdf } from "react-icons/fa6";
import { FaFileImage } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { FaRegTrashCan } from "react-icons/fa6";
import { useConfirmacao } from "@/context/confirmacaoContext";
import { useError } from "@/context/ErrorContext";
import Confirmacao from "@/components/Pop-up/Confirmacao/Confirmacao";

export default function Contato() {

    const [openModal, setOpenModal] = useState<boolean>(false)

    const [atendimento, setAtendimento] = useState<string>("");

    const [filesArray, setFilesArray] = useState<File[]>([])

    const {addConfirmacao} = useConfirmacao()!
    const {addError} = useError()!

    const copyContent = (content: string) => {
        navigator.clipboard.writeText(content);
        addConfirmacao("Copiado")
    }

    const sendForm = (e: FormData) =>{
        e.append("atendimento", atendimento)
        e.append("files", filesArray[0])
        const rawFormObject = Object.fromEntries(e)

        if(rawFormObject.nome == ""){
            addError("Campos Faltando!")
        }
        else{
            setOpenModal(true)
        }

        console.log(rawFormObject)
    }

    const setFilesToSend = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files![0]

        const fileNames = filesArray.map((file)=>{
            return file.name;
        })

        const index = fileNames.indexOf(file.name)
        console.log(index)

        if (file && index == -1) {
            setFilesArray([...filesArray, file])
            addConfirmacao("Arquivo Adicionado!")
        }else{
            addError("Arquivo já foi adicionado!")
        }
    }

    const gerarIcon = (extensao: string) => {
        return extensao === "pdf" ? <FaRegFilePdf color="#E93939" size={70} /> : <FaFileImage color="#53BADA" size={70} />
    }

    const removeFile = (fileTakes: File) =>{
        setFilesArray([...filesArray].filter((file)=>{
            console.log(file.name != fileTakes.name)
            return file.name != fileTakes.name
        }))
    }

    return (
        <main className={`flex flex-col w-full mb-32 overflow-hidden`}>
            <Erro />
            <Confirmacao />
            <section className="">
                <section className="flex flex-col items-center justify-center gap-4 mt-10 mx-12">
                    <h1 className="font-averia md:text-3xl text-2xl font-bold text-preto text-center">Precisa de ajuda?</h1>
                    <p className="font-poppins md:text-lg text-[10px] text-preto text-center">Escolha uma das opções para resolver seu problema!</p>
                </section>
                <section className="flex flex-col items-center justify-center mx-12">
                    <div className="mt-6 flex flex-col justify-start border-solid rounded-lg md:w-[55%] w-full gap-5">
                        <h1 className="font-averia md:text-2xl text-lg font-bold text-preto mt-12">Preencha o formulário</h1>
                    </div>
                    <div className="mt-6 flex flex-col justify-start border-solid border rounded-lg border-cinza-escuro md:w-[55%] w-full gap-5">
                        <form action={sendForm}>
                            <div className="md:p-10 p-4">
                                <div className="text-xs">
                                    <InputText required name="nome" placeholder="Tipo de serviço*" />
                                </div>
                                <div className="flex flex-col justify-between lg:mt-[5%] mt-[8%] lg:flex-row">
                                    <div className="w-full lg:w-[48%]">
                                        <div className="text-xs">
                                            <InputText placeholder="Email*" required type={'email'} name="email" />
                                        </div>
                                    </div>
                                    <div className="w-full mt-[8%] lg:w-[48%] lg:mt-0">
                                        <div className="text-xs">
                                            <Select label="Tipo de atendimento*" options={['Cuidados', "Bem estar"]} opcaoSelecionada={setAtendimento} opcao={atendimento} />
                                        </div>
                                    </div>
                                </div>
                                <div className="h-32 lg:mt-[5%] mt-[8%]">
                                    <TextArea placeholder="Descrição*" required name="descricao" />
                                </div>
                                <div className="border border-cinza rounded-lg mt-6 flex flex-col justify-between">
                                    <p className="font-poppins text-sm text-cinza-escuro mt-2 ml-2.5">Arquivos</p>

                                    <div className="flex flex-wrap gap-4 mt-7 items-center mb-6 w-[96%] mx-auto">
                                        {
                                            filesArray.map((file) => (
                                                <div key={file.size} className="group flex flex-col cursor-pointer gap-1 p-2 items-center rounded-lg justify-end hover:bg-red-300 relative" onClick={()=> removeFile(file)}>
                                                    <p>{gerarIcon(file.name.split(".")[1])}</p>
                                                    <p className="font-poppins text-xs">{file.name}</p>
                                                    <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden group-hover:!block"><FaRegTrashCan size={40}/></p>
                                                </div>
                                            ))
                                        }

                                        <div className="">
                                            <label htmlFor="arquivos" className="flex flex-col h-12 w-12 justify-center items-center px-3 py-2 bg-terciaria font-poppins text-preto mb-2 text-sm rounded-lg">
                                                <p><FaPlus size={20} /></p>
                                            </label>
                                            <input type="file" name="" id="arquivos" accept=".png,.pdf,.jpg,.jpeg" className="hidden" onChange={(e)=> setFilesToSend(e)} />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-[5%]">
                                    <BotaoGrande title="Enviar" type='submit' background="bg-secundaria"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </section>
                <section className="w-full">
                    <div className="flex flex-row justify-center items-center mt-16 font-regular w-full">
                        <div className="border-b md:w-[23%] w-[25%] border-cinza"></div>
                        <h1 className="font-poppins md:text-xl text-lg text-cinza-escuro mx-4">OU</h1>
                        <div className="border-b md:w-[23%] w-[25%] border-cinza"></div>
                    </div>
                </section>
                <section className="flex flex-col items-center justify-center mt-6 mx-12">
                    <div className="md:w-[55%] w-full flex justify-start">
                        <h1 className="font-averia md:text-2xl text-lg font-bold text-preto mt-10">Entre em contato com nossa central</h1>
                    </div>
                    <section className="border-solid border rounded-lg border-cinza-escuro md:w-[55%] w-full mt-3">
                        <section className="md:p-5 p-3">
                            <div className="flex flex-row items-center justify-between ">
                                <p className="font-poppins md:text-lg text-xs font-medium text-preto mr-[10%]">Telefone</p>
                                <div className="flex flex-row gap-4 mt-1">
                                    <p className="font-poppins md:text-sm text-[10px] text-cinza-escuro break-all">(47) 00000-0000</p>
                                    <IoCopyOutline onClick={() => copyContent("(47) 00000-0000")} className='cursor-pointer' />
                                </div>
                            </div>
                            <div className="flex flex-row items-center justify-between mt-4">
                                <p className="font-poppins md:text-lg text-xs font-medium text-preto mr-[10%]">Email</p>
                                <div className="flex flex-row gap-4 mt-1">
                                    <p className="font-poppins md:text-sm text-[10px] text-cinza-escuro break-all">topcare@gmail.com</p>
                                    <IoCopyOutline onClick={() => copyContent("topcare@gmail.com")} className='cursor-pointer' />
                                </div>
                            </div>
                        </section>
                    </section>
                </section>
            </section>
            {openModal && (
                <div className="w-full">
                    <div className='fixed top-0 left-0 w-full h-full z-50  bg-fundo-modal' onClick={() => setOpenModal(false)}></div>
                    <div className={`fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 lg:w-[25%] w-[60%]`}>
                        <UmBotao texto="Formulário Enviado com sucesso!" openParms={setOpenModal} />
                    </div>
                </div>
            )}
        </main>
    )
}