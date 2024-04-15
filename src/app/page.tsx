import Lojas from "@/components/Lojas/Lojas";

export default function Home() {
 
  return (
    <main className="flex flex-col items-center justify-center mt-10">
      <Lojas src='./assets/Lojas1.png/' cidade="Jaraguá" estado="SC" endereco="R. Roberto Seidel, 732 - Sala 2 - João Tozini, Corupá - SC, 89278-000"
      contato="+55 (47) 99999-9999" funcionamentoDias="Segunda a sábado" funcionamentoHora="8h as 20h"/>
        
    </main>
  )
}
