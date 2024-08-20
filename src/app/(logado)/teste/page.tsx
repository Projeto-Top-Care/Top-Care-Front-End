import AgendamentoMarcado from "@/components/AgendamentoMarcado/agendamentoMarcado";
import { useState } from "react";

export default function Teste() { 
    
    return (
        <main className="">
            <AgendamentoMarcado hora="15:30" fotoPet={"./assets/cachorro-perfil.png"} nomePet="Nina" data="24/08/2024" />
        </main>
    )
}