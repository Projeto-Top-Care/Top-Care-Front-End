interface ITabelaPedidos {
    codPedido: number,
    dtPedido: String,
    produto: String,
    quantidade: number,
    cliente: String,
    destino: String,
    valor: number,
    status: String,
    pagamento: String
}

export default function tabelaPedidos({ codPedido, dtPedido, produto, quantidade, cliente, destino, valor, status, pagamento }: ITabelaPedidos) {
    return (
        <section className="mb-24 flex justify-center font-poppins text-sm">
            <table className="table-auto w-[90%]">
                <thead>
                    <tr className="text-center text-preto">
                        <th>Cod pedido</th>
                        <th className="hidden md:table-cell">Dt. pedido</th>
                        <th>Produto</th>
                        <th className="hidden md:table-cell">Quantidade</th>
                        <th className="hidden sm:table-cell">Cliente</th>
                        <th className="hidden sm:table-cell">Destino</th>
                        <th>Valor</th>
                        <th>Status</th>
                        <th className="hidden sm:table-cell">Pagamento</th>
                    </tr>
                </thead>
                <tbody className="lg:text-sm text-xs text-center text-preto break-word border-2 border-cinza">
                    <td className="border border-cinza xl:3.5 lg:py-2 py-1.5 lg:px-1.5 md:px-1 px-0.5">{codPedido}</td>
                    <td className="hidden md:table-cell border border-cinza py-3.5 px-1.5">{dtPedido}</td>
                    <td className="border border-cinza xl:3.5 lg:py-2 py-1.5 lg:px-1.5 md:px-1 px-0.5">{produto}</td>
                    <td className="hidden md:table-cell border border-cinza py-3.5 px-1.5">{quantidade}</td>
                    <td className="hidden sm:table-cell border border-cinza xl:3.5 lg:py-2 py-1.5 lg:px-1.5 md:px-1 px-0.5">{cliente}</td>
                    <td className="hidden sm:table-cell border border-cinza xl:3.5 lg:py-2 py-1.5 lg:px-1.5 md:px-1 px-0.5">{destino}</td>
                    <td className="border border-cinza xl:3.5 lg:py-2 py-1.5 lg:px-1.5 md:px-1 px-0.5">{valor}</td>
                    <td className="border border-cinza xl:3.5 lg:py-2 py-1.5 lg:px-1.5 md:px-1 px-0.5">{status}</td>
                    <td className="hidden sm:table-cell border border-cinza xl:3.5 lg:py-2 py-1.5 lg:px-1.5 md:px-1 px-0.5">{pagamento}</td>
                </tbody>
            </table>
        </section>
    )
}