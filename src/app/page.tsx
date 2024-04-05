import HeaderDeslogado from "@/components/HeaderDeslogado/HeaderDeslogado";
import HeaderLogado from "@/components/HeaderLogado/HeaderLogado";
import CadastroPet from "@/components/Pop-up/CadastroPet/CadastroPet";

export default function Home() {
  return (
    <main className="">
      <HeaderLogado/>
      <HeaderDeslogado/>
      <CadastroPet />
    </main>
  )
}