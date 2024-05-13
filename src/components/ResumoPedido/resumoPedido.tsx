'use client'
import { useState } from "react"

interface IResumoPedido{
    produtos: string[],
    quantidades: number[],
    precos: number[],
    desconto: number,
    frete: number
}

export default function ResumoPedido({produtos, quantidades, precos, desconto, frete}:IResumoPedido) {

    const [subtotal, setSubtotal] = useState()

    const [total, setTotal] = useState(0)

    return (
        <main>
            <div className="text-preto font-poppins w-full">
                <h2 className="font-bold text-base sm:text-lg pb-2">Resumo geral</h2>

                <div className="border-cinza border-[1px] rounded-lg p-4">
                    <h4 className="font-medium text-sm sm:text-base">Produtos</h4>

                    {
                        <div className="flex flex-col text-sm py-4">
                            {produtos.map((item, index) => (
                                <div className="flex flex-row justify-between sm:gap-8 gap-2" key={index}>
                                    <p className="text-xs sm:text-sm">{quantidades[index]}x</p>
                                    <p className="w-full text-start line-clamp-1 text-xs sm:text-sm">{item}</p>
                                    <p className="text-xs sm:text-sm">R${precos[index]}</p> 
                                </div>
                            ))}
                        </div>
                    }
                    
                    <div className="flex flex-col border-t-[1px] border-cinza py-4">
                        <div className="flex flex-row justify-between">
                            <p className="font-medium text-sm sm:text-base">Subtotal</p>
                            <p className="text-xs sm:text-sm">R$47,00</p>
                        </div>

                        <div className="flex flex-row justify-between">
                            <p className="font-medium text-sm sm:text-base">Desconto</p>
                            <p className="text-xs sm:text-sm">R${desconto}</p>                            
                        </div>

                        <div className="flex flex-row justify-between">
                            <p className="font-medium text-sm sm:text-base">Frete</p>
                            <p className="text-xs sm:text-sm">{frete}</p>                            
                        </div>
                    </div>

                    <div className="flex flex-row justify-between border-t-[1px] border-cinza pt-4">
                        <p className="font-medium text-sm sm:text-base">Valor total</p>
                        <p className="text-xs sm:text-sm">R$38,30</p>
                    </div>

                </div>                
            </div>
        </main>
    )
}