'use client'
import agendamento from "@/app/(logado)/agendamento/page"
import { QuantidadeProdutoCarrinho } from "@/app/(misto)/carrinho/page"
import { buscarProduto } from "@/server/produtos/action"
import { Agendamentos } from "@/types/agendamentos"
import { ProdutoCompleto } from "@/types/produto"
import { formatarData } from "@/utils/data"
import { useEffect, useState } from "react"

interface IResumoPedido {
    produtos: QuantidadeProdutoCarrinho[],
    desconto: number,
    frete: number
    plano?: string
    agendamento?: Agendamentos
}

export default function ResumoPedido({ produtos, desconto, frete, plano, agendamento }: IResumoPedido) {

    const [produtosResumo, setProdutosResumo] = useState<ProdutoCompleto[]>([])

    useEffect(() => {
        const func = async () => {
            const produtosResumo = await Promise.all(produtos.map(async (item) => {
                console.log(item)
                const produto = await buscarProduto(item.produto.id)
                return produto
            })
            )
            setProdutosResumo(produtosResumo)
        }
        func()
    }, [])

    const calcularSubtotal = () => {
        let soma = 0
        if(agendamento){
            soma = agendamento.varianteServico.preco
        }else{
            produtosResumo.map((item, i) => {
                soma += item.variantes[i].preco * produtos[i].quantidade
            })
        }
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
                    <h4 className="font-medium text-sm sm:text-base">{agendamento ? "Agendamento": "Produtos"}</h4>
                    {
                        plano && (
                            <p className="mt-4">Plano {plano}</p>
                        )
                    }

                    {
                        agendamento && (
                            <div>
                                <p className="mt-4">Agendamento para {formatarData(agendamento.horario.dia)}</p>
                                <p>Local: {agendamento.filial}</p>
                                <p>Horário: {agendamento.horario.horaInicio.slice(0,5)}</p>
                            </div>
                        )
                    }

                    {
                        <div className="flex flex-col text-sm py-4">
                            {
                                produtosResumo.map((item, i) => (
                                    <div className="flex flex-row justify-between sm:gap-8 gap-2" key={i}>
                                        <p className="text-xs sm:text-sm">{produtos[i].quantidade}x</p>
                                        <p className="w-full text-start line-clamp-1 text-xs sm:text-sm">{item.nome}</p>
                                        <p className="text-xs sm:text-sm">R${(produtos[i].varianteProduto.preco * produtos[i].quantidade).toFixed(2).replace(".", ",")}</p>
                                    </div>
                                ))
                            }
                        </div>
                    }

                    <div className="flex flex-col border-t-[1px] border-cinza py-4">
                        <div className="flex flex-row justify-between">
                            <p className="font-medium text-sm sm:text-base">Subtotal</p>
                            <p className="text-xs sm:text-sm">R${(subtotal).toFixed(2).replace(".", ",")}</p>
                        </div>

                        <div className="flex flex-row justify-between">
                            <p className="font-medium text-sm sm:text-base">Desconto</p>
                            <p className="text-xs sm:text-sm">R${(desconto).toFixed(2).replace(".", ",")}</p>
                        </div>

                        <div className={`flex-row justify-between ${agendamento ? 'hidden': '!flex'}`}>
                            <p className="font-medium text-sm sm:text-base">Frete</p>
                            <p className="text-xs sm:text-sm">R${(frete).toFixed(2).replace(".", ",")}</p>
                        </div>
                    </div>

                    <div className="flex flex-row justify-between border-t-[1px] border-cinza pt-4">
                        <p className="font-medium text-sm sm:text-base">Valor total</p>
                        <p className="text-xs sm:text-sm">R${(total).toFixed(2).replace(".", ",")}</p>
                    </div>
                </div>
            </div>
        </main>
    )
}