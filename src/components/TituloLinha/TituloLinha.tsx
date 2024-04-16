type titulotype = {
    titulo: string
}

const TituloLinha = ({titulo}: titulotype) => {
    return (
        <div className="md:mx-14 md:p-6 mx-4 p-2">
            <p className="font-averia md:text-2xl text-xl font-bold text-preto">{titulo}</p>
            <div className="border-t border-preto mt-3 px-30"></div>
        </div>
    )
}
export default TituloLinha;