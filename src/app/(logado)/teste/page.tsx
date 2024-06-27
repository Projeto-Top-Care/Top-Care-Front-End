
import AgendamentoMarcado from "@/components/AgendamentoMarcado/agendamentoMarcado";

export default function teste() { 
    return (
        <main className="p-8 lg:flex grid md:grid-cols-2 justify-center items-center mt-12 mb-12 gap-8">
            <AgendamentoMarcado status="Pago" fotoPet={"./assets/cachorro-perfil.png"} nomePet="Nina" servico="Banho e Tosa" data="01/12/2023" hora="15:45h" profissional="Carla de Moraes" valor={80.0}/>
            <AgendamentoMarcado status="Pago" fotoPet={"./assets/cachorro-perfil.png"} nomePet="Nina" servico="Banho e Tosa" data="01/12/2023" hora="15:45h" profissional="Carla de Moraes" valor={80.0}/>
            <AgendamentoMarcado status="Pago" fotoPet={"./assets/cachorro-perfil.png"} nomePet="Nina" servico="Banho e Tosa" data="01/12/2023" hora="15:45h" profissional="Carla de Moraes" valor={80.0}/>
        </main>
    )
}