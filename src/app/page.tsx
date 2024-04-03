import CardProduto from "@/components/CardProduto/page";
import Lojas from "@/components/Lojas/page";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center mt-10">
      <Lojas src="./assets/Lojas.png" cidade="Balneário Camboriu - SC" rua="Rua Dom Henrique, 424"/>
      <CardProduto nomeProduto="Ração Pedgree"/>
    </main>
  )
}