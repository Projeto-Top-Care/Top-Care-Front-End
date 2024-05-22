'use client'
import { buscarProduto } from "@/server/produtos/action"
import { Produto } from "@/types/produto"
import { QntProduto } from "@/types/usuarios"
import { useState } from "react"

interface IResumoPedido {
    produtos: QntProduto[],
    desconto: number,
    frete: number
}

export default function ResumoPedido({ produtos, desconto, frete }: IResumoPedido) {

    const setarProdutosResumo = () => {
        const prods: Produto[] = produtos.map((item, i) => {
            return (buscarProduto(item.id)! as Produto);
        })
        return prods

    }
    const [produtosResumo, setProdutosResumo] = useState<Produto[]>(setarProdutosResumo())

    const calcularSubtotal = () => {
        let soma = 0
        produtosResumo.map((item, i) => {
            soma += item.precoNovo * produtos[i].quantidade
        })
        return soma
    }

    const calcularTotal = () => {
        let final = calcularSubtotal()
        return (final - desconto) + frete
    }

    const subtotal = (calcularSubtotal())
    const total = (calcularTotal())

    return (
        <main>
            <div className="text-preto font-poppins w-full">
                <h2 className="font-bold text-base sm:text-lg pb-2">Resumo geral</h2>

                <div className="border-cinza border-[1px] rounded-lg p-4">
                    <h4 className="font-medium text-sm sm:text-base">Produtos</h4>

                    {
                        <div className="flex flex-col text-sm py-4">
                            {
                                produtosResumo.map((item, i) => (
                                    <div className="flex flex-row justify-between sm:gap-8 gap-2" key={i}>
                                        <p className="text-xs sm:text-sm">{produtos[i].quantidade}x</p>
                                        <p className="w-full text-start line-clamp-1 text-xs sm:text-sm">{item.nomeProduto}</p>
                                        <p className="text-xs sm:text-sm">R${(item.precoNovo * produtos[i].quantidade).toFixed(2)}</p>
                                    </div>
                                ))
                            }
                        </div>
                    }

                    <div className="flex flex-col border-t-[1px] border-cinza py-4">
                        <div className="flex flex-row justify-between">
                            <p className="font-medium text-sm sm:text-base">Subtotal</p>
                            <p className="text-xs sm:text-sm">R${(subtotal).toFixed(2)}</p>
                        </div>

                        <div className="flex flex-row justify-between">
                            <p className="font-medium text-sm sm:text-base">Desconto</p>
                            <p className="text-xs sm:text-sm">R${(desconto).toFixed(2)}</p>
                        </div>

                        <div className="flex flex-row justify-between">
                            <p className="font-medium text-sm sm:text-base">Frete</p>
                            <p className="text-xs sm:text-sm">R${(frete).toFixed(2)}</p>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between border-t-[1px] border-cinza pt-4">
                        <p className="font-medium text-sm sm:text-base">Valor total</p>
                        <p className="text-xs sm:text-sm">R${total}</p>
                    </div>
                </div>
            </div>
        </main>
    )
}