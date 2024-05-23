'use client'
import Select from "../../Select/Select"
import InputText from "../../InputText/InputText";
import { useState } from "react";
import BotaoGrande from "@/components/BotaoGrande/BotaoGrande";

const estados = ["Acre", "Alagoas", "Amapá", "Amazonas", "Bahia", "Ceará", "Distrito Federal", "Espírito Santo", "Goiás", "Maranhão", "Mato Grosso", "Mato Grosso do Sul", "Minas Gerais", "Pará", "Paraíba", "Paraná", "Pernambuco", "Piauí", "Rio de Janeiro", "Rio Grande do Norte", "Rio Grande do Sul", "Rondônia", "Roraima", "Santa Catarina", "São Paulo", "Sergipe", "Tocantins"]

interface ICadastroEndereco {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function CadastroEndereco({ setOpen }: ICadastroEndereco) {
    const [cep, setCep] = useState("");
    const [estado, setEstado] = useState("");
    const [cidade, setCidade] = useState("");
    const [bairro, setBairro] = useState("");
    const [rua, setRua] = useState("");
    const [numero, setNumero] = useState("");
    const [complemento, setComplemento] = useState("");
    const [nome, setNome] = useState("");
    return (
        <div className="max-h-screen w-full flex justify-center flex-col bg-branco rounded-lg">
            <div className=" flex justify-center">
                <h1 className="font-averia font-bold text-center md:text-2xl text-lg mt-4">Adicionar Endereço</h1>
            </div>
            <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 items-center justify-between p-4 m-auto lg:gap-6 md:gap-2 gap-1">
                <div className="flex flex-col lg:gap-6 md:gap-2 gap-1 ">
                    <InputText placeholder="Cep*" type="text" onChange={(e) => setCep(e.target.value)} />
                    <InputText placeholder="Rua*" type="text" onChange={(e) => setRua(e.target.value)} />
                </div>
                <div className="flex flex-col lg:gap-6 md:gap-2 gap-1 ">
                    <Select label="Estado*" options={estados} opcaoSelecionada={setEstado} />
                    <InputText placeholder="Numero*" type="number" min={1} onChange={(e) => setNumero(e.target.value)} />
                </div>
                <div className="flex flex-col lg:gap-6 md:gap-2 gap-1 ">
                    <InputText placeholder="Cidade*" type="text" onChange={(e) => setCidade(e.target.value)} />
                    <InputText placeholder="Complemento*" type="text" onChange={(e) => setComplemento(e.target.value)} />
                </div>
                <div className="flex flex-col lg:gap-6 md:gap-2 gap-1 ">
                    <InputText placeholder="Bairro*" type="text" onChange={(e) => setBairro(e.target.value)} />
                    <InputText placeholder="Nome de exibição*" type="text" onChange={(e) => setNome(e.target.value)} />
                </div>
            </div>
            <div className="w-full grid grid-cols-3 place-items-center">
                <div></div>
                <div className="mb-4 w-32">
                    <BotaoGrande title={"Cadastrar"} background={"bg-secundaria"} type={"button"} />
                </div>
            </div>

        </div>
    )
}