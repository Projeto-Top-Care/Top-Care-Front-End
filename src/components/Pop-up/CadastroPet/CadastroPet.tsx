'use client'
import InputFile from "../../InputFile/InputFile"
import Select from "../../Select/Select"
import InputText from "../../InputText/InputText";
import BotaoMedio from "../../BotaoMedio/BotaoMedio";
import { useState } from "react";

const animais = ["Cachorro", "Gato", "Coelho", "Pássaro", "Hamster", "Peixe", "Tartaruga"]
const racasCachorro = ["Afegão Hound","Affenpinscher","Airedale Terrier","Akita","American Staffordshire Terrier","Basenji","Basset Hound","Beagle","Beagle Harrier","Bearded Collie","Bedlington Terrier","Bichon Frisé","Bloodhound","Bobtail","Boiadeiro Australiano","Boiadeiro Bernês","Border Collie","Border Terrier","Borzoi","Boston Terrier","Boxer","Buldogue Francês","Buldogue Inglês","Bull Terrier","Bulmastife","Cairn Terrier","Cane Corso","Cão de Água Português","Cão de Crista Chinês","Cavalier King Charles Spaniel","Chesapeake Bay Retriever","Chihuahua","Chow Chow","Cocker Spaniel Americano","Cocker Spaniel Inglês","Collie","Coton de Tuléar","Dachshund","Dálmata","Dandie Dinmont Terrier","Dobermann","Dogo Argentino","Dogue Alemão","Fila Brasileiro","Fox Terrier","Foxhound Inglês","Galgo Escocês","Galgo Irlandês","Golden Retriever","Grande Boiadeiro Suiço","Greyhound","Grifo da Bélgica","Husky Siberiano","Jack Russell Terrier","King Charles","Komondor","Labradoodle","Labrador Retriever","Lakeland Terrier","Leonberger","Lhasa Apso","Lulu da Pomerânia","Malamute do Alasca","Maltês","Mastife","Mastim Napolitano","Mastim Tibetano","Norfolk Terrier","Norwich Terrier","Papillon","Pastor Alemão","Pastor Australiano","Pinscher Miniatura","Poodle","Pug","Rottweiler","Sem Raça Definida (SRD)","ShihTzu","Silky Terrier","Skye Terrier","Staffordshire Bull Terrier","Terra Nova","Terrier Escocês","Tosa","Weimaraner","Welsh Corgi (Cardigan)","Welsh Corgi (Pembroke)","West Highland White Terrier","Whippet","Xoloitzcuintli","Yorkshire Terrier"]

interface ICadastroPet {
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}
export default function CadastroPet({setOpen}: ICadastroPet) {
    const [pet, setPet] = useState("");
    const [raca, setRaca] = useState("");
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    return (
        <div className="border max-h-screen lg:w-full md:w-[90%] w-full lg:h-[30%] h-[70%] lg:flex grid justify-center lg:flex-col bg-branco rounded-lg">
            <div className="flex lg:items-center w-full justify-between ">
                <div className="lg:w-[33%] "></div>
                <div className="lg:w-[33%] md:w-full w-[80%] flex justify-center ml-4">
                    <h1 className="font-poppins font-bold md:text-2xl text-lg mt-4">Cadastre seu pet!</h1>
                </div>
                <div className="lg:w-[33%] w-[50%] flex justify-end mr-2">
                    <img src="./assets/Sair.svg" alt="" className="lg:w-[11%] md:w-[25%] w-[35%] cursor-pointer" onClick={()=>setOpen(false)}/>
                </div>
            </div>
            <div className="flex lg:flex-row flex-col items-center justify-between w-[90%] m-auto gap-4">
                <div className="md:w-32 md:h-32 h-24 w-24 md:mt-8 mt-4">
                    <InputFile rounded="rounded-full" />
                </div>
                <div className="flex flex-col gap-4  lg:w-[35%] md:w-96 w-full">
                    <Select label="Qual o seu pet?" options={animais} opcaoSelecionada={setPet}/>
                    <Select label="Qual a raça do seu pet" options={racasCachorro} opcaoSelecionada={setRaca}/>
                </div>
                <div className="flex flex-col gap-4 lg:w-[35%] md:w-96 w-full">
                    <InputText placeholder="Qual o nome do pet?" type="text" onChange={(e)=>setNome(e.target.value)}/>
                    <InputText placeholder="Qual a idade?" type="number" onChange={(e)=>setIdade(e.target.value)}/>
                </div>
            </div>
            <div className="w-full flex justify-center mb-4 mt-4">
                <BotaoMedio title="Cadastrar" />
            </div>
        </div>
    )
}