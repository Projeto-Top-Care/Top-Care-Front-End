import InputText from "@/components/InputText/InputText"
import BotaoGrande from "@/components/BotaoGrande/BotaoGrande"
import CardPetPequeno from "@/components/CardPetPequeno/CardPetPequeno"

export default function teste() { 
    return (
        <main className="mt-12 mb-12 p-8 gap-12 lg:flex grid md:grid-cols-2 ">
            <CardPetPequeno fotoPet={"./assets/cachorro-perfil.png"} nomePet="Laila" tipoAnimal="cachorro" racaPet="Golden Retriever" porte= "Grande"/>
            <CardPetPequeno fotoPet={"./assets/cachorro-perfil.png"} nomePet="Laila" tipoAnimal="cachorro" racaPet="American staffordshire terrier" porte= "Grande" />
            <CardPetPequeno fotoPet={"./assets/cachorro-perfil.png"} nomePet="Laila" tipoAnimal="cachorro" racaPet="Golden Retriever" porte= "Grande" />
            <CardPetPequeno fotoPet={"./assets/cachorro-perfil.png"} nomePet="Laila" tipoAnimal="cachorro" racaPet="Poodle" porte= "Pequeno" />
        </main>
    )
}