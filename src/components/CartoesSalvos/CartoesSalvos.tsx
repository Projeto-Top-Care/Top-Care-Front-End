import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

interface ICartoesSalvos {
    tipoCartao: string,
    nome: string,
    dataValidade: string,
    finalCartao: number,
}

const CartoesSalvos = ({ tipoCartao, nome, dataValidade, finalCartao }: ICartoesSalvos) => {
    return (
        <div className="bg-branco md:flex items-center p-4 font-poppins b rounded-lg md:text-sm text-xs">
            <div className="flex justify-around">
                <div className="flex flex-col">
                    <p>Cartão de {tipoCartao}</p>
                    <p>{nome}</p>
                </div>
                <div className="text-3xl font-extralight md:mx-10 mx-4">|</div>
                <div className="">
                    <p>Validade {dataValidade}</p>
                    <p>Final {finalCartao}</p>
                </div>
            </div>
            <div className="flex items-center justify-between md:mt-0 mt-4">
                <img src="./assets/logo-mastercard.png" className="md:px-10" alt="Mastercard Logo" />
                <div className="md:hidden text-base font-regular">
                    <button className=""><FaAngleDown /></button>
                </div>
                <a href="./adicionarCartao"><button className="bg-primaria rounded-full w-8 h-8 font-bold md:mx-0">+</button></a>
                <div className="md:flex hidden text-base font-regular ml-10">
                    <button className=""><FaAngleDown /></button>
                </div>
            </div>

        </div>
    );
}

export default CartoesSalvos;