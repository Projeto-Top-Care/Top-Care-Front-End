interface IPlano{
    titulo: string,
    descricao: string,
}

const ServicosApresentacao = ({titulo, descricao}:IPlano) => {
    return (
        <div className="text-preto md:pb-4 pb-2">
                <p className="md:text-3xl text-2xl font-bold font-averia">{titulo}</p>
                <p className="md:text-lg text-sm text-break-normal font-poppins">{descricao}</p>
            </div>
    )
}

export default ServicosApresentacao;