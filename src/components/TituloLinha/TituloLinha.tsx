type titulotype = {
    titulo: string
}

const TituloLinha = ({titulo}: titulotype) => {
    return (
        <div className="w-[90%] m-auto">
            <h1 className="font-averia md:text-2xl text-xl font-bold text-preto">{titulo}</h1>
            <div className="border-t border-preto mt-3 px-30"></div>
        </div>
    )
}
export default TituloLinha;