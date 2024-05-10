'use client'
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import duvidas from '@/banco/duvidas.json'
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

        {/* <div className='flex flex-row flex-wrap justify-center gap-10 mt-10'>
        // {produtos.map((produto, index) => (
        // <CardProduto key={index} id={produto.id} nomeProduto={produto.nomeProduto} precoAntigoDoProduto={produto.precoAntigoDoProduto}
        // precoNovo={produto.precoNovo} notaDeAvaliacao={produto.notaDeAvaliacao} imagemProduto={produto.imagemProduto} desconto={produto.desconto} />
        // ))}
        // </div> */}