interface IInputEstatico{
    titulo: string,
    info: string,
}

const InputEstatico = ({titulo, info}:IInputEstatico) => {
    return (
        <div className="font-poppins text-preto pt-6">
            <p className="text-base">{titulo}</p>
            <p className="text-sm bg-branco p-3 rounded">{info}</p>
        </div>
    )
}
export default InputEstatico;