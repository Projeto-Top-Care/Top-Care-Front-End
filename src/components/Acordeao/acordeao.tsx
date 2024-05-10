'use client'
import { buscarCategoria } from "@/server/duvidas/action";
import { Duvida, Duvidas } from "@/types/duvidads";
import ItemAcordiao from "../ItemAcordeao/itemAcordeao";
import { useState } from "react";

interface IAcordiao{
    categoria: string
}

const Acordeao = ({categoria}:IAcordiao) => {

    const [duvidasFrequentes, setDuvidasFrequentes] = useState<Duvida[]>(buscarCategoria(categoria))
    console.log(duvidasFrequentes)

    return (
        <div className="flex flex-col gap-4">
            {duvidasFrequentes.map((item, index) => (
                <ItemAcordiao key={index} titulo={item.pergunta} texto={item.resposta} />
            ))}
        </div>

    )
}
export default Acordeao;