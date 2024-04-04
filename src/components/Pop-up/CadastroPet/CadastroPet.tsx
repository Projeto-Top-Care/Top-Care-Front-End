'use client'
import InputFile from "../../InputFile/InputFile"
import Select from "../../Select/Select"
import InputText from "../../InputText/InputText";
import BotaoPequeno from "../../BotaoPequeno";
import { useState } from "react";

const animais = ["Cachorro", "Gato", "Coelho", "Pássaro", "Hamster", "Peixe", "Tartaruga"]
const racasCachorro = ["Afegão Hound","Affenpinscher","Airedale Terrier","Akita","American Staffordshire Terrier","Basenji","Basset Hound","Beagle","Beagle Harrier","Bearded Collie","Bedlington Terrier","Bichon Frisé","Bloodhound","Bobtail","Boiadeiro Australiano","Boiadeiro Bernês","Border Collie","Border Terrier","Borzoi","Boston Terrier","Boxer","Buldogue Francês","Buldogue Inglês","Bull Terrier","Bulmastife","Cairn Terrier","Cane Corso","Cão de Água Português","Cão de Crista Chinês","Cavalier King Charles Spaniel","Chesapeake Bay Retriever","Chihuahua","Chow Chow","Cocker Spaniel Americano","Cocker Spaniel Inglês","Collie","Coton de Tuléar","Dachshund","Dálmata","Dandie Dinmont Terrier","Dobermann","Dogo Argentino","Dogue Alemão","Fila Brasileiro","Fox Terrier (Pelo Duro e Pelo Liso)","Foxhound Inglês","Galgo Escocês","Galgo Irlandês","Golden Retriever","Grande Boiadeiro Suiço","Greyhound","Grifo da Bélgica","Husky Siberiano","Jack Russell Terrier","King Charles","Komondor","Labradoodle","Labrador Retriever","Lakeland Terrier","Leonberger","Lhasa Apso","Lulu da Pomerânia","Malamute do Alasca","Maltês","Mastife","Mastim Napolitano","Mastim Tibetano","Norfolk Terrier","Norwich Terrier","Papillon","Pastor Alemão","Pastor Australiano","Pinscher Miniatura","Poodle","Pug","Rottweiler","Sem Raça Definida (SRD)","ShihTzu","Silky Terrier","Skye Terrier","Staffordshire Bull Terrier","Terra Nova","Terrier Escocês","Tosa","Weimaraner","Welsh Corgi (Cardigan)","Welsh Corgi (Pembroke)","West Highland White Terrier","Whippet","Xoloitzcuintli","Yorkshire Terrier"]

export default function CadastroPet() {
    const [pet, setPet] = useState("");
    const [raca, setRaca] = useState("");
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState("");
    return (
        <div className="border border-black max-h-screen w-[60%] h-64 flex justify-center flex-col bg-branco rounded-lg">
            <div className="flex items-center w-full justify-between">
                <div className="w-[33%]"></div>
                <div className="w-[33%%] flex justify-center">
                    <h1 className="font-poppins font-bold text-center text-2xl mt-4">Cadastre seu pet!</h1>
                </div>
                <div className="w-[33%] flex justify-end mr-2">
                    <img src="./assets/Sair.svg" alt="" className="w-[11%]" />
                </div>
            </div>
            <div className="flex flex-row items-center justify-between w-[80%] m-auto">
                <div className="w-32 h-32">
                    <InputFile />
                </div>
                <div className="flex flex-col gap-4 w-[35%]">
                    <Select label="Qual o seu pet?" options={animais}/>
                    <Select label="Qual a raça do seu pet" options={racasCachorro}/>
                </div>
                <div className="flex flex-col gap-4 w-[35%]">
                    <InputText placeholder="Qual o nome do pet?" type="text" />
                    <InputText placeholder="Qual a idade?" type="number" />
                </div>
            </div>
            <div className="w-full flex justify-center mb-4">
                <BotaoPequeno title="Cadastrar" />
            </div>
        </div>
    )
}