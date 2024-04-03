import Footer from "@/components/Footer/page";
import HeaderLogado from "@/components/HeaderLogado/page";
import TituloLinha from "@/components/TituloLinha/page";


export default function Home() {
  return (
    <div>
      <p>Olá Top Care</p>
      <HeaderLogado/>
      <TituloLinha titulo="Promoções"/>
      <Footer/>
    </div>
  )
}
