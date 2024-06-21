import { FiShoppingBag } from "react-icons/fi";
import { PiPawPrint } from "react-icons/pi";
import { LuWallet, LuBox, LuTruck, LuHome, LuMenu, LuCalendarClock, LuClipboardList } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";

interface IBarraProcesso {
    estado: number
}

const BarraProcessoAgendamento = ({ estado }: IBarraProcesso) => {

    return (
        <div className="w-full md:relative flex flex-col md:justify-start items-center justify-center">
            <div className="md:w-[78%] w-[90%] relative md:mt-3.5 md:absolute md:m-auto flex">
                <div className={`border-t-4 sm:border-t-2 border-cinza-claro w-full md:absolute -z-50`}></div>
                <div className={`border-t-4 sm:border-t-2 ${estado >= 0 ? `border-secundaria` : `border-cinza-claro`} ${estado == 1 ? `w-1/4` : estado == 2 ? `w-1/2` : estado == 3 ? `w-3/4` : estado >= 4 ? `w-full` : `w-[0%]`}  absolute -z-50`}></div>
            </div>
            <div className="md:flex md:flex-row flex-col justify-between md:gap-0 gap-8 w-full">
                <div className="gap-2 md:flex hidden md:w-[25%] md:flex-col items-center font-poppins text-preto md:text-base text-xs">
                    <div className={`w-8 h-8 rounded-full bg-secundaria flex justify-center items-center`}><PiPawPrint /></div>
                    <p className="text-center">Pet</p>
                </div>

                <div className="gap-2 md:flex hidden md:w-[25%] md:flex-col items-center font-poppins text-preto md:text-base text-xs">
                    <div className={`w-8 h-8 rounded-full ${estado >= 1 ? `bg-secundaria` : `bg-cinza-claro`} flex justify-center items-center`}><LuMenu /></div>
                    <p className="text-center">Serviço</p>
                </div>

                <div className="gap-2 md:flex hidden md:w-[25%] md:flex-col items-center font-poppins text-preto md:text-base text-xs">
                    <div className={`w-8 h-8 rounded-full ${estado >= 2 ? `bg-secundaria` : `bg-cinza-claro`} flex justify-center items-center`}><SlLocationPin /></div>
                    <p className="text-center">Local</p>
                </div>

                <div className="gap-2 md:flex hidden md:w-[25%] md:flex-col items-center font-poppins text-preto md:text-base text-xs">
                    <div className={`w-8 h-8 rounded-full ${estado >= 3 ? `bg-secundaria` : `bg-cinza-claro`} flex justify-center items-center`}><LuCalendarClock /></div>
                    <p className="text-center">Data, hora e profissional</p>
                </div>

                <div className="gap-2 md:flex hidden md:w-[25%] md:flex-col items-center font-poppins text-preto md:text-base text-xs">
                    <div className={`w-8 h-8 rounded-full ${estado >= 4 ? `bg-secundaria` : `bg-cinza-claro`} flex justify-center items-center`}>< LuClipboardList /></div>
                    <p className="text-center">Resumo final</p>
                </div>
            </div>
        </div>
    )
}

export default BarraProcessoAgendamento;
