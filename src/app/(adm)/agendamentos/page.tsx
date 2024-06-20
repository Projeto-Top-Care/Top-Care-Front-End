import AgendamentosHoje from "@/components/AgendamentosHoje/agendamentosHoje";
import CalendarioAgendamento from "@/components/CalendarioAgendamento/calendarioAgendamento";
import TituloLinha from "@/components/TituloLinha/TituloLinha";

export default function Agendamentos() {
    return (
        <section>
            <TituloLinha titulo={"Agendamentos"} />
            <section className="w-[90%] flex mt-12 mt-12 m-auto justify-between">
                <AgendamentosHoje />
                <CalendarioAgendamento />
            </section>
        </section>
    )
}