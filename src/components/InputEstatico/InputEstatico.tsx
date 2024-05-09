interface IInputEstatico{
    titulo: string,
    info: string | number,
}

const InputEstatico = ({titulo, info}:IInputEstatico) => {
    return (
        <div className="font-poppins text-preto pt-6">
            <p className="md:text-base text-sm">{titulo}</p>
            <p className="md:text-sm text-xs bg-branco p-3 rounded text-cinza-escuro">{info}</p>
        </div>
    )
}
export default InputEstatico;