const HistoricoConsulta = () => {
    return (
        <div className="font-poppins bg-branco shadow-lg rounded-lg">
            <p className="text-2xl font-bold bg-secundaria text-center p-2 rounded-t-lg">Banho e tosa</p>
            <div className="flex flex-row justify-around p-3">
                <div className="font-bold">
                    <p className="mb-8">Data</p>
                    <p className="mb-8">Pet</p>
                    <p className="mb-8">Valor</p>
                    <p className="mb-8">Forma</p>
                    <p className="">Profissional</p>
                </div> 
                <div className="text-right">
                    <p className="mb-8">01/12/2023 ás 15:45h</p>
                    <p className="mb-8">Nina</p>
                    <p className="mb-8">120R$</p>
                    <p className="mb-8">Crédito 1X</p>
                    <p className="">Carla</p>
                </div> 
            </div>
        </div>
    )
}
export default HistoricoConsulta;