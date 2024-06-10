import ServicosAgendamento from "@/components/ServicosAgendamento/ServicosAgendamento";
import Vacinas from "@/components/Vacinas/Vacinas";

export default function teste() {

    return (
        <main className="md:flex grid items-center justify-center gap-10">
            <ServicosAgendamento servico="Consulta" preco="79,90" src={"./assets/servicos-agendamento/imagem-consultas.png"}/>
            <ServicosAgendamento servico="Banho e tosa" preco="89,90" src={"./assets/servicos-agendamento/imagem-banhoTosa.png"}/>
            <ServicosAgendamento servico="Banho" preco="49,90" src={"./assets/servicos-agendamento/imagem-banho.png"}/>
            <Vacinas vacina="Vacina antirrábica" preco="89,99"/>
        </main>
    )
}
