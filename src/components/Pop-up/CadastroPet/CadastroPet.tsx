'use client'
import InputFile from "../../InputFile/InputFile"
import Select from "../../Select/Select"
import InputText from "../../InputText/InputText";
import BotaoMedio from "../../Botoes/BotaoMedio/BotaoMedio";
import { useEffect, useState } from "react";
import { useUserID } from "@/context/UserIDContext";
import { cadastrarPet, editarPet } from "@/server/usuario/pet";
import { useConfirmacao } from "@/context/confirmacaoContext";
import { Pet } from "@/types/usuarios";
import BotaoGrande from "@/components/Botoes/BotaoGrande/BotaoGrande";
import { animais } from "@/utils/pets";

const racasCachorro = ["Afegão Hound", "Affenpinscher", "Airedale Terrier", "Akita", "American Staffordshire Terrier", "Basenji", "Basset Hound", "Beagle", "Beagle Harrier", "Bearded Collie", "Bedlington Terrier", "Bichon Frisé", "Bloodhound", "Bobtail", "Boiadeiro Australiano", "Boiadeiro Bernês", "Border Collie", "Border Terrier", "Borzoi", "Boston Terrier", "Boxer", "Buldogue Francês", "Buldogue Inglês", "Bull Terrier", "Bulmastife", "Cairn Terrier", "Cane Corso", "Cão de Água Português", "Cão de Crista Chinês", "Cavalier King Charles Spaniel", "Chesapeake Bay Retriever", "Chihuahua", "Chow Chow", "Cocker Spaniel Americano", "Cocker Spaniel Inglês", "Collie", "Coton de Tuléar", "Dachshund", "Dálmata", "Dandie Dinmont Terrier", "Dobermann", "Dogo Argentino", "Dogue Alemão", "Fila Brasileiro", "Fox Terrier", "Foxhound Inglês", "Galgo Escocês", "Galgo Irlandês", "Golden Retriever", "Grande Boiadeiro Suiço", "Greyhound", "Grifo da Bélgica", "Husky Siberiano", "Jack Russell Terrier", "King Charles", "Komondor", "Labradoodle", "Labrador Retriever", "Lakeland Terrier", "Leonberger", "Lhasa Apso", "Lulu da Pomerânia", "Malamute do Alasca", "Maltês", "Mastife", "Mastim Napolitano", "Mastim Tibetano", "Norfolk Terrier", "Norwich Terrier", "Papillon", "Pastor Alemão", "Pastor Australiano", "Pinscher Miniatura", "Poodle", "Pug", "Rottweiler", "Sem Raça Definida (SRD)", "ShihTzu", "Silky Terrier", "Skye Terrier", "Staffordshire Bull Terrier", "Terra Nova", "Terrier Escocês", "Tosa", "Weimaraner", "Welsh Corgi (Cardigan)", "Welsh Corgi (Pembroke)", "West Highland White Terrier", "Whippet", "Xoloitzcuintli", "Yorkshire Terrier"]
const portes = ["Mini", "Pequeno", "Medio", "Grande", "Gigante"]

interface ICadastroPet {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    setAtt?: React.Dispatch<React.SetStateAction<number>>
    petEdit?: Pet
}
export default function CadastroPet({ setOpen, petEdit, setAtt }: ICadastroPet) {
    const [pet, setPet] = useState(petEdit ? petEdit.especie : "");
    const [raca, setRaca] = useState(petEdit ? petEdit.raca : "");
    const [porte, setPorte] = useState(petEdit ? petEdit.porte.charAt(0) + petEdit.porte.slice(1).toLowerCase() : "");
    const [nome, setNome] = useState(petEdit ? petEdit.nome : "");

    const { addConfirmacao } = useConfirmacao()

    const { getUserID } = useUserID()
    const [id, setId] = useState<string>("")

    useEffect(() => {
        const idFetched = getUserID()
        if (idFetched) {
            setId(idFetched)
        }
    })

    const enviarDados = async () => {
        const dadosPet: any = {
            nome: nome,
            idUsuario: id,
            idEspecie: animais.indexOf(pet) + 1,
            raca: raca,
            porte: porte.toUpperCase().normalize('NFD')
            .replace(/[\u0300-\u036f]/g, "")
        }
        setOpen(false)
        addConfirmacao(petEdit ? petEdit?.nome + " editado!" : "Pet cadastrado!")
        if (petEdit) {
            await editarPet(dadosPet, petEdit.id)
        } else {
            await cadastrarPet(dadosPet)
            console.log(dadosPet)
        }
        setAtt ? setAtt(Math.random()) : ''
    }

    return (
        <div className="border max-h-screen lg:w-full md:w-[90%] w-full lg:h-[30%] h-[70%] lg:flex grid justify-center lg:flex-col bg-branco rounded-lg">
            <div className="flex lg:items-center w-full justify-between ">
                <div className="lg:w-[33%] "></div>
                <div className="lg:w-[33%] md:w-full w-[80%] flex justify-center ml-4">
                    <h1 className="font-poppins font-bold md:text-2xl text-lg mt-4">{petEdit ? `Editar ${petEdit.nome}` : "Cadastre seu pet!"}</h1>
                </div>
                <div className="lg:w-[33%] w-[50%] flex justify-end mr-2">
                    <img src="./assets/Sair.svg" alt="" className="lg:w-[11%] md:w-[25%] w-[35%] cursor-pointer" onClick={() => setOpen(false)} />
                </div>
            </div>
            <div className="flex lg:flex-row flex-col items-center justify-between w-[90%] mx-auto my-3 gap-4">
                <div className="md:w-32 md:h-32 h-24 w-24 flex items-center justify-center">
                    <InputFile rounded="rounded-full" />
                </div>
                <div className="flex flex-col gap-4  lg:w-[35%] md:w-96 w-full">
                    <InputText placeholder="Qual o nome do pet?" required type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
                    <Select label="Qual o seu pet?" options={animais} opcaoSelecionada={setPet} opcao={pet} />
                </div>
                <div className="flex flex-col gap-4 lg:w-[35%] md:w-96 w-full">
                    <Select label="Qual a raça do seu pet" options={racasCachorro} opcaoSelecionada={setRaca} opcao={raca} />
                    <Select label="Qual o porte do pet?" options={portes} opcaoSelecionada={setPorte} opcao={porte} />
                </div>
            </div>
            <div className="w-full flex justify-center mb-4 mt-4 gap-14">
                <div className={`w-36 ${petEdit ? 'block' : 'hidden'}`}>
                    <BotaoGrande background="cancelar" title="Excluir" size="h-10"/>
                </div>
                <BotaoMedio title={petEdit ? "Editar" : "Cadastrar"} onClick={enviarDados} />
            </div>
        </div>
    )
}