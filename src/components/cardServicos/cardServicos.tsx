import { useRouter } from "next/navigation";

interface ICardServico {
    id: number,
    nome: string,
    descricao: string,
    imagem: string,
}

const CardServico = ({ id, nome, imagem, descricao }: ICardServico) => {

    const { push } = useRouter();

    return (
        <div className='w-full flex flex-row items-center gap-8 border-[1px] border-cinza-escuro rounded-xl p-6'>
            <div className="">
                <img className="w-[35rem] rounded-lg" src={imagem} />
            </div>

            <div className="flex flex-col gap-2">
                <h3 className="font-averia md:text-2xl text-xl font-bold text-preto">{nome}</h3>
                <p className="font-poppins text-base text-preto">{descricao}</p>
                <p className="font-poppins text-base text-cinza-escuro">A partir de {12.99}</p>

                <button onClick={() => push('/Servicos')} className="self-end bg-secundaria hover:bg-[#a8cf38] font-poppins px-4 h-6 sm:h-8 rounded-lg duration-700">Agende agora!</button>
            </div>
        </div>
    )
}
export default CardServico;