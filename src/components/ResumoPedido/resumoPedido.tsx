export default function ResumoPedido() {
    return (
        <main>
            <div className="text-preto font-poppins w-full">
                <h2 className="font-bold text-lg pb-2">Resumo geral</h2>

                <div className="border-cinza border-[1px] rounded-lg p-4">
                    <h4 className="font-medium text-base">Produtos</h4>

                    <div className="flex flex-col text-sm py-4">
                        <div className="flex flex-row justify-between sm:gap-8 gap-2">
                            <p>1x</p>
                            <p className="w-full text-start line-clamp-1">Kit para banho Sanol Cachorros e Gatos</p>
                            <p>R$11,10</p>                            
                        </div>

                        <div className="flex flex-row justify-between sm:gap-8 gap-2">
                            <p>1x</p>
                            <p className="w-full text-start line-clamp-1">Pote para ração em formato de pata de cachorro 200ml</p>
                            <p>R$11,10</p> 
                        </div>

                        <div className="flex flex-row justify-between sm:gap-8 gap-2">
                            <p>1x</p>
                            <p className="w-full text-start line-clamp-1">Coleira com pingente tamanho M unissex para cachorro e gato</p>
                            <p>R$11,10</p>
                        </div>

                    </div>
                    
                    <div className="flex flex-col border-t-[1px] border-cinza py-4">
                        <div className="flex flex-row justify-between">
                            <p className="font-medium text-base">Subtotal</p>
                            <p className="text-sm">R$47,00</p>
                        </div>

                        <div className="flex flex-row justify-between">
                            <p className="font-medium text-base">Desconto</p>
                            <p className="text-sm">R$9,00</p>                            
                        </div>

                        <div className="flex flex-row justify-between">
                            <p className="font-medium text-base">Frete</p>
                            <p className="text-sm">Grátis</p>                            
                        </div>
                    </div>

                    <div className="flex flex-row justify-between border-t-[1px] border-cinza pt-4">
                        <p className="font-medium text-base">Valor total</p>
                        <p className="text-sm">R$38,30</p>
                    </div>

                </div>                
            </div>
        </main>
    )
}