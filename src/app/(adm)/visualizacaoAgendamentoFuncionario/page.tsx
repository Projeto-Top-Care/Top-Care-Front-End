'use client'
import TituloLinha from "@/components/TituloLinha/TituloLinha";
import CardVisualizacao from "./CardVisualizacao/CardVisualizacao";

export default function VisualizarAgendamentoFuncionario() {
    
    return (
        <main className='mb-14'>
            <section className="">
                <TituloLinha titulo="Olá, Funcionário X"  voltar={false} />
                <section className="flex flex-col md:mb-12 mb-4 md:w-[95%] lg:pl-16 md:pl-10 md:p-0 p-4 lg:self-start self-center gap-8">
                    <p className="font-averia text-preto md:text-2xl text-xl lg:text-start text-center font-bold">Agendamentos do dia 24/08/2024</p>
                    <div className="gap-8 grid lg:grid-cols-3 md:grid-cols-2 md:mt-2">
                        <CardVisualizacao servico="Banho e Tosa" horario="15:30" fotoPet={"./assets/cachorro-perfil.png"} animal="Cachorro" nomePet="Nina" porte="Médio" raca="Poodle" />
                        <CardVisualizacao servico="Banho e Tosa" horario="15:30" fotoPet={"./assets/cachorro-perfil.png"} animal="Cachorro" nomePet="Nina" porte="Pequeno" raca="Spitz Alemao" />
                    </div> 
                </section>
            </section>
        </main >
    )
}
