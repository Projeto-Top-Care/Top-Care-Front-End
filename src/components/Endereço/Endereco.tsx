interface IEndereco{
    titulo: string,
    cep: string,
    estado: string,
    bairro: string,
    rua: string,
    numero: number,
    complemento: string
}

const Endereco = ({titulo, cep, estado, bairro, rua,numero, complemento}:IEndereco) => {

    return (
        <div className="font-poppins">
            <p className="font-bold text-lg">{titulo}</p>
            <div className="flex flex-row justify-around p-2 bg-branco rounded-lg border-2">
                <div className="flex flex-col justify-between font-medium divide-y divide-slate-200 ">
                    <p className="py-2">CEP</p>
                    <p className="py-2">Estado</p>
                    <p className="py-2">Bairro</p>
                    <p className="py-2">Rua</p>
                    <p className="py-2">N°</p>
                    <p className="py-2">Complemento</p>
                </div> 
                <div className="flex flex-col justify-between text-cinza-letras divide-y divide-slate-200 text-right text-sm">
                    <p className="py-2.5">{cep}</p>
                    <p className="py-2.5">{estado}</p>
                    <p className="py-2.5">{bairro}</p>
                    <p className="py-2.5">{rua}</p>
                    <p className="py-2.5">{numero}</p>
                    <p className="py-2.5">{complemento}</p>
                </div> 
            </div>
        </div>
    )
}

export default Endereco;