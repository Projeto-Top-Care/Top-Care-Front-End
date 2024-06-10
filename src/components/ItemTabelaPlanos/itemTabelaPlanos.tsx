import { FaCheck } from "react-icons/fa6"
import { IoClose } from "react-icons/io5";
import BotaoPequeno from "../BotaoPequeno";


interface IItemTabelaPlanos {
    titulo: string,
    preco: number,
    item1: string,
    item2: string,
    item3: string,
    item4: string,
    item5: string,
    item6: boolean,
    item7: boolean,
}

const TabelaPlanos = ({ titulo, preco, item1, item2, item3, item4, item5, item6, item7 }: IItemTabelaPlanos) => {
    return (
        <div className={`bg-secundaria border-cinza-escuro sm:border-l-0 w-full border-l-[1px] border-r-[1px] ${titulo == "Básico" ? `rounded-tl-lg` : `sm:rounded-none rounded-lg`} ${titulo == "Deluxe" ? `rounded-tr-lg` : `sm:rounded-none rounded-lg`}`}>

            <div className={`border-cinza-escuro h-20 lg:h-24 p-2 gap-2 w-full sm:w-32 lg:w-36 flex flex-col text-preto justify-center items-center ${titulo == "Básico" ? `rounded-tl-lg sm:border-l-[1px]` : `rounded-none`} ${titulo == "Deluxe" ? `rounded-tr-lg` : `rounded-none`}`}>
                <h4 className="font-averia font-bold text-xl">{titulo}</h4>
                <p className="font-poppins lg:text-sm text-xs">R${preco} / mês</p>
            </div>

            <div className="w-full flex flex-col justify-center items-center font-averia font-bold text-[#6954C0]">
                <div className="flex flex-row justify-between w-full bg-cinza-claro text-center h-12 lg:h-14 text-lg lg:text-xl items-center border-cinza-escuro border-t-[1px]">
                    <p className="sm:hidden flex items-start text-start px-2 w-full font-poppins text-preto font-normal text-xs lg:text-sm">Descontos em produtos eleitos</p>
                    <p className="w-full flex sm:justify-center justify-end sm:pr-0 pr-2 items-center">{item1}</p>
                </div>

                <div className="flex flex-row justify-between w-full bg-branco text-center h-12 lg:h-14 text-lg lg:text-xl items-center">
                    <p className="sm:hidden flex items-start text-start px-2 w-full font-poppins text-preto font-normal text-xs lg:text-sm">Consultas grátis</p>
                    <p className="w-full flex sm:justify-center justify-end sm:pr-0 pr-2 items-center">{item2}</p>
                </div>

                <div className="flex flex-row justify-between w-full bg-cinza-claro text-center h-12 lg:h-14 text-lg lg:text-xl items-center">
                    <p className="sm:hidden flex items-start text-start px-2 w-full font-poppins text-preto font-normal text-xs lg:text-sm">Descontos em banhos</p>
                    <p className="w-full flex sm:justify-center justify-end sm:pr-0 pr-2 items-center">{item3}</p>
                </div>

                <div className="flex flex-row justify-between w-full bg-branco text-center h-12 lg:h-14 text-lg lg:text-xl items-center">
                    <p className="sm:hidden flex items-start text-start px-2 w-full font-poppins text-preto font-normal text-xs lg:text-sm">Descontos em consultas</p>
                    <p className="w-full flex sm:justify-center justify-end sm:pr-0 pr-2 items-center">{item4}</p>
                </div>

                <div className="flex flex-row justify-between w-full bg-cinza-claro text-center h-12 lg:h-14 text-lg lg:text-xl items-center">
                    <p className="sm:hidden flex items-start text-start px-2 w-full font-poppins text-preto font-normal text-xs lg:text-sm">Descontos em vacinas</p>
                    <p className="w-full flex sm:justify-center justify-end sm:pr-0 pr-2 items-center">{item5}</p>
                </div>

                <div className="flex flex-row justify-between w-full bg-branco text-center h-12 lg:h-14 text-lg lg:text-xl items-center">
                    <p className="sm:hidden flex items-start text-start px-2 w-full font-poppins text-preto font-normal text-xs lg:text-sm">Descontos em outros serviços*</p>
                    <p className={`w-full bg-branco text-center h-12 lg:h-14 text-2xl lg:text-3xl flex sm:justify-center justify-end sm:pr-0 pr-2 items-center  ${item6 ? `text-[#6954C0]` : `text-cinza`}`}>{item6 ? <FaCheck /> : <IoClose />}</p>
                </div>

                <div className="flex flex-row justify-between w-full bg-cinza-claro text-center h-12 lg:h-14 text-lg lg:text-xl items-center">
                    <p className="sm:hidden flex items-start text-start px-2 w-full font-poppins text-preto font-normal text-xs lg:text-sm">Plantão 24 horas</p>
                    <p className={`w-full bg-cinza-claro text-center h-12 lg:h-14 text-2xl lg:text-3xl flex sm:justify-center justify-end sm:pr-0 pr-2 items-center border-cinza-escuro ${item7 ? `text-[#6954C0]` : `text-cinza`}`}>{item7 ? <FaCheck /> : <IoClose />}</p>                    
                </div>

                {/* <p className="w-full bg-branco text-center h-12 lg:h-14 text-lg lg:text-xl flex justify-center items-center ">{item2}</p> */}
                {/* <p className="w-full bg-cinza-claro text-center h-12 lg:h-14 text-lg lg:text-xl flex justify-center items-center ">{item3}</p> */}
                {/* <p className="w-full bg-branco text-center h-12 lg:h-14 text-lg lg:text-xl flex justify-center items-center ">{item4}</p> */}
                {/* <p className="w-full bg-cinza-claro text-center h-12 lg:h-14 text-lg lg:text-xl flex justify-center items-center ">{item5}</p> */}
                {/* <p className={`w-full bg-branco text-center h-12 lg:h-14 text-2xl lg:text-3xl flex justify-center items-center  ${item6 ? `text-[#6954C0]` : `text-cinza`}`}>{item6 ? <FaCheck /> : <IoClose />}</p> */}
                {/* <p className={`w-full bg-cinza-claro text-center h-12 lg:h-14 text-2xl lg:text-3xl flex justify-center items-center  border-cinza-escuro${item7 ? `text-[#6954C0]` : `text-cinza`}`}>{item7 ? <FaCheck /> : <IoClose />}</p> */}
                <div className="text-preto w-full bg-branco h-12 lg:h-14 flex justify-center items-center "><BotaoPequeno color="primaria" title="Assinar" /></div>
            </div>
        </div>

    )
}
export default TabelaPlanos;