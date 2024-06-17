import { FiShoppingBag } from "react-icons/fi";
import { LuWallet, LuBox, LuTruck, LuHome } from "react-icons/lu";

interface IBarraProcessoPedido {
    primeiroPasso: string,
    segundoPasso: string,
    terceiroPasso: string,
    quartoPasso: string,
    quintoPasso: string,
}

const BarraProcessoPedido = ({ primeiroPasso, segundoPasso, terceiroPasso, quartoPasso, quintoPasso }: IBarraProcessoPedido) => {

    return (
        <div className="w-full relative md:flex md:flex-col grid md:items-center items-start">
            <div className="w-[78%] mt-3.5 absolute m-auto md:flex hidden">
                <div className="border-t-2 border-cinza-claro w-full absolute -z-50"></div>
                <div className="border-t-2 border-secundaria w-[0%] absolute -z-10"></div>
            </div>
            <div className="md:hidden flex ml-3.5" >
                <div className="border-l-2 h-full border-cinza-claro absolute -z-50"></div>
                <div className="border-l-2 border-secundaria h-[50%] absolute -z-10"></div>
            </div>
            <div className="flex md:flex-row flex-col justify-between md:gap-0 gap-8 w-full">
                <div className="gap-2 flex md:w-[25%] md:flex-col items-center font-poppins text-preto md:text-base text-xs">
                    <div className="md:w-9 md:h-9 w-8 h-8 rounded-full bg-secundaria flex justify-center items-center"><FiShoppingBag size={'1.1rem'} /></div>
                    <p className="text-center">{primeiroPasso}</p>
                </div>
                <div className="gap-2 flex md:w-[25%] md:flex-col items-center font-poppins text-preto md:text-base text-xs">
                    <div className="md:w-9 md:h-9 w-8 h-8 rounded-full bg-cinza-claro flex justify-center items-center"><LuWallet size={'1.1rem'} /></div>)
                    <p className="text-center">{segundoPasso}</p>
                </div>
                <div className="gap-2 flex md:w-[25%] md:flex-col items-center font-poppins text-preto md:text-base text-xs">
                    <div className="md:w-9 md:h-9 w-8 h-8 rounded-full bg-cinza-claro flex justify-center items-center"><LuBox size={'1.1rem'} /></div>)
                    <p className="text-center">{terceiroPasso}</p>
                </div>
                <div className="gap-2 flex md:w-[25%] md:flex-col items-center font-poppins text-preto md:text-base text-xs">
                    <div className="md:w-9 md:h-9 w-8 h-8 rounded-full bg-cinza-claro flex justify-center items-center"><LuTruck size={'1.1rem'} /></div>)
                    <p className="text-center">{quartoPasso}</p>
                </div>
                <div className="gap-2 flex md:w-[25%] md:flex-col items-center font-poppins text-preto md:text-base text-xs">
                    <div className="md:w-9 md:h-9 w-8 h-8 rounded-full bg-cinza-claro flex justify-center items-center"><LuHome size={'1.1rem'} /></div>)
                    <p className="text-center">{quintoPasso}</p>
                </div>
            </div>
        </div>
    )
}

export default BarraProcessoPedido;
