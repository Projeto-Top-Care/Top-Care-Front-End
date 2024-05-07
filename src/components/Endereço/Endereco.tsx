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
        <div className="font-poppins md:w-[340px] w-[280px] break-normal	">
            <p className="font-bold text-lg">{titulo}</p>
            <div className="p-2 bg-branco rounded-lg border-2 ">
                <div className="flex flex-col md:text-base text-sm justify-between w-full">
                    <div className="flex justify-between border-b py-2">
                    <p className="font-medium">CEP</p>
                    <p className="md:text-sm text-xs text-cinza-escuro">{cep}</p>
                    </div>
                    <div className="flex justify-between border-b py-2">
                    <p className="font-medium">Estado</p>
                    <p className="md:text-sm text-xs text-cinza-escuro">{estado}</p>
                    </div>
                    <div className="flex justify-between border-b py-2">
                    <p className="font-medium">Bairro</p>
                    <p className="md:text-sm text-xs text-cinza-escuro">{bairro}</p>
                    </div>
                    <div className="flex justify-between border-b py-2">
                    <p className="font-medium">Rua</p>
                    <p className="md:text-sm text-xs text-cinza-escuro">{rua}</p>
                    </div >
                    <div className="flex justify-between border-b py-2">
                    <p className="font-medium">N°</p>
                    <p className="md:text-sm text-xs text-cinza-escuro">{numero}</p>
                    </div>
                    <div className="flex justify-between py-2">
                    <p className="font-medium">Complemento</p>
                    <p className="md:text-sm text-xs text-cinza-escuro">{complemento}</p>
                    </div>
                </div> 
                </div> 
            </div>
    )
}

export default Endereco;