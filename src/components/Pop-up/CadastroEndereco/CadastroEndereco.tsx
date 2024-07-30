'use client'
import Select from "../../Select/Select"
import InputText from "../../InputText/InputText";
import { useEffect, useState } from "react";
import BotaoGrande from "@/components/BotaoGrande/BotaoGrande";
import { ViaCEP } from "@/types/usuarios";
import { useUserID } from "@/context/UserIDContext";
import { cadastrarEnderecos } from "@/server/usuario/endereco";
import { siglasEstados } from "@/utils/estados";
import InputTextMask from "@/components/InputMask/InputMask";
import UmBotao from "../UmBotao/UmBotao";
import { useConfirmacao } from "@/context/confirmacaoContext";
import Confirmacao from "../Confirmacao/Confirmacao";

interface ICadastroEndereco {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function CadastroEndereco({ setOpen }: ICadastroEndereco) {
    const { getUserID } = useUserID()
    const { addConfirmacao } = useConfirmacao()

    const [userId, setUserId] = useState<string>();
    const [cep, setCep] = useState("");
    const [estado, setEstado] = useState("");

    const [endereco, setEndereco] = useState<ViaCEP>();

    useEffect(() => {
        const id = getUserID()
        if (id) {
            setUserId(id)
        }
    }, [])


    const buscarCep = async () => {
        if (cep.length < 9) {
            return
        }
        try {
            console.log("Cheguei aqui")
            const infosEndereco = await fetch('https://viacep.com.br/ws/' + cep + '/json/')
            const consultarCEPConvert: ViaCEP = await infosEndereco.json()

            if (consultarCEPConvert.erro) {
                throw Error('CEP inexistente')
            }
            setEndereco(consultarCEPConvert);
        } catch (erro) {

        }
    }

    const cadastrarEndereco = async (e: FormData) => {
        e.append("estado", estado)
        e.append("idUsuario", userId!)
        const endereco = Object.fromEntries(e)

        const response = await cadastrarEnderecos(endereco)
        addConfirmacao("Endereco cadastrado!")
        setOpen(false)
    }


    return (
        <>
            <Confirmacao />
            <form action={cadastrarEndereco} className="max-h-screen w-full flex justify-center flex-col bg-branco rounded-lg">
                <div className=" flex justify-center">
                    <h1 className="font-averia font-bold text-center md:text-2xl text-lg mt-4">Adicionar Endereço</h1>
                </div>
                <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center justify-between p-4 m-auto lg:gap-6 md:gap-2 gap-1">
                    <div className="flex flex-col lg:gap-6 md:gap-2 gap-1 ">
                        <InputTextMask
                            name="cep"
                            placeholder="Cep*"
                            type="text"
                            onChange={(e) => setCep(e.target.value)}
                            onBlur={buscarCep}
                            mask="_____-___"
                            replacement={{ _: /\d/ }}
                            required
                        />
                        <InputText name="rua" placeholder="Rua*" type="text" value={endereco?.logradouro} />
                    </div>
                    <div className="flex flex-col lg:gap-6 md:gap-2 gap-1 ">
                        <Select label="Estado*" options={siglasEstados} opcaoSelecionada={setEstado} opcao={endereco ? endereco.uf : estado} />
                        <InputText name="numero" placeholder="Numero*" type="number" min={1} required />
                    </div>
                    <div className="flex flex-col lg:gap-6 md:gap-2 gap-1 ">
                        <InputText name="cidade" placeholder="Cidade*" type="text" value={endereco?.localidade} required />
                        <InputText name="complemento" placeholder="Complemento*" type="text" required />
                    </div>
                    <div className="flex flex-col lg:gap-6 md:gap-2 gap-1 ">
                        <InputText name="bairro" placeholder="Bairro*" type="text" value={endereco?.bairro} required />
                        <InputText name="nome" placeholder="Nome de exibição*" type="text" required />
                    </div>
                </div>
                <div className="w-full grid grid-cols-3 place-items-center">
                    <div></div>
                    <div className="mb-4 w-32">
                        <BotaoGrande title={"Cadastrar"} background={"bg-secundaria"} type={"submit"} />
                    </div>
                </div>
            </form>

        </>
    )
}