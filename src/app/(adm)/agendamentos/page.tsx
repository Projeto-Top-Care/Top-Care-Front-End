import AgendamentosHoje from "@/components/AgendamentosHoje/agendamentosHoje";
import CalendarioAgendamentoDia from "@/components/CalendarioAgendamentoDia/calendarioAgendamentoDia";
import TituloLinha from "@/components/TituloLinha/TituloLinha";

export default function Agendamentos() {
    return (
        <section>
            <TituloLinha titulo={"Agendamentos"} />
            <section className="w-[90%] flex my-12 m-auto justify-center">
                <CalendarioAgendamentoDia />
            </section>
        </section>
    )
}