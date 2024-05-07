interface IPedidoAndamentoPerfil {
    src: string,
    titulo: string,
    link: string,
    valor: string
}

const PedidoAndamentoPerfil = ({ src, titulo, link, valor }: IPedidoAndamentoPerfil) => {
    return (
        <div className="mt-7 font-poppins text-preto md:p-6 p-5 flex shadow-lg rounded-lg md:w-[420px] w-[360px]">
            <img className="h-20 w-20" src={src} />
            <div className="ml-4 w-full">
                <p className="md:text-lg text-base">{titulo}</p>
                <p className="md:text-end md:text-base text-sm  style-link text-blue-600 visited:text-purple-600 underline">ver mais</p>
                <p className="md:text-lg text-base font-medium">{valor}</p>
            </div>
        </div>                  

    )
}
export default PedidoAndamentoPerfil;