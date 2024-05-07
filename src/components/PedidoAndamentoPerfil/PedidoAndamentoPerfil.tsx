interface IPedidoAndamentoPerfil {
    src: string,
    titulo: string,
    link: string,
    valor: string
}

const PedidoAndamentoPerfil = ({ src, titulo, link, valor }: IPedidoAndamentoPerfil) => {
    return (
        <div className="mt-7 font-poppins text-preto md:p-6 p-2 flex shadow-lg rounded-lg md:w-[420px] w-[276px]">
            <img className="md:h-20 md:w-20 h-16 w-16" src={src} />
            <div className="ml-4 w-full">
                <p className="md:text-lg text-xs">{titulo}</p>
                <p className="md:text-end md:text-lg text-xs  style-link text-blue-600 visited:text-purple-600 underline">ver mais</p>
                <p className="md:text-lg text-sm font-medium">{valor}</p>
            </div>
        </div>                  

    )
}
export default PedidoAndamentoPerfil;