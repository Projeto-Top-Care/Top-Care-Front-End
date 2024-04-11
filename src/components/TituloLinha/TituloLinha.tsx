type titulotype = {
    titulo: string
}

const TituloLinha = ({titulo}: titulotype) => {
    return (
        <div className="mx-14 p-6">
            <p className="font-averia text-2xl font-bold text-pretok">{titulo}</p>
            <div className="border-t border-preto mt-3 px-30"></div>
        </div>
    )
}
export default TituloLinha;