import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";

interface ICartoesSalvos{
    tipoCartao : string,
    nome : string,
    dataValidade : string,
    finalCartao : number,
}

const CartoesSalvos = ({tipoCartao, nome, dataValidade, finalCartao}:ICartoesSalvos) => {
    return (
        <div className="bg-branco flex flex-row items-center p-4 font-poppins b rounded-lg text-sm">
            <div className="flex flex-col">
                <p className="mb-[2%]">Cartão de {tipoCartao}</p>
                <p>{nome}</p>
            </div>
            <div className="px-10 text-3xl font-extralight">|</div>
            <div className="">
                <p className="mb-[2%]">Validade {dataValidade}</p>
                <p>Final {finalCartao}</p>
            </div>  
            <img src="./assets/logo-mastercard.png" className="px-10" alt="Mastercard Logo" />
            <button className="bg-primaria rounded-full w-8 h-8 font-bold ">+</button>
            <div className="text-base font-regular flex flex-col pl-10">
                <button className=""><FaAngleDown/></button>
            </div>
        </div>
    );
}

export default CartoesSalvos;