import { FiShoppingBag } from "react-icons/fi";
import { PiPawPrint } from "react-icons/pi";
import { LuWallet, LuBox, LuTruck, LuHome, LuMenu, LuCalendarClock, LuClipboardList } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";

interface IBarraProcesso {
    primeiroPasso: string,
    segundoPasso: string,
    terceiroPasso: string,
    quartoPasso: string,
    quintoPasso: string,
    type: string
}

const BarraProcessoAgendamento = ({ primeiroPasso, segundoPasso, terceiroPasso, quartoPasso, quintoPasso, type }: IBarraProcesso) => {

    return (
        <div className="w-full md:relative flex flex-col md:justify-start items-center justify-center">
            <div className="md:w-[78%] w-full md:mt-3.5 md:absolute md:m-auto flex ">
                <div className="md:border-t-2 border-t-8 rounded-md border-cinza-claro w-full md:absolute md:-z-50"></div>
                <div className="md:border-t-2 border-t-8 rounded-md border-secundaria w-[0%] md:absolute md:-z-10"></div>
            </div>
            <div className="md:flex md:flex-row flex-col justify-between md:gap-0 gap-8 w-full">
                <div className="gap-2 md:flex hidden md:w-[25%] md:flex-col items-center font-poppins text-preto md:text-base text-xs">
                    {
                        type === "agendamento" ? (<div className="w-8 h-8 rounded-full bg-secundaria flex justify-center items-center"><PiPawPrint size={"1.2rem"}/></div>) : (<div className="md:w-9 md:h-9 w-8 h-8 rounded-full bg-secundaria flex justify-center items-center"><FiShoppingBag size={'1.1rem'} /></div>)
                    }
                    <p className="text-center">{primeiroPasso}</p>
                </div>
                <div className="gap-2 md:flex hidden md:w-[25%] md:flex-col items-center font-poppins text-preto md:text-base text-xs">
                    {
                        type === "agendamento" ? (<div className="w-8 h-8 rounded-full bg-cinza-claro flex justify-center items-center"><LuMenu size={"1.2rem"}/></div>) : (<div className="md:w-9 md:h-9 w-8 h-8 rounded-full bg-cinza-claro flex justify-center items-center"><LuWallet size={'1.1rem'} /></div>)
                    }
                    <p className="text-center">{segundoPasso}</p>
                </div>
                <div className="gap-2 md:flex hidden md:w-[25%] md:flex-col items-center font-poppins text-preto md:text-base text-xs">
                    {
                        type === "agendamento" ? (<div className="w-8 h-8 rounded-full bg-cinza-claro flex justify-center items-center"><SlLocationPin size={"1.2rem"}/></div>) : (<div className="md:w-9 md:h-9 w-8 h-8 rounded-full bg-cinza-claro flex justify-center items-center"><LuBox size={'1.1rem'} /></div>)
                    }
                    <p className="text-center">{terceiroPasso}</p>
                </div>
                <div className="gap-2 md:flex hidden md:w-[25%] md:flex-col items-center font-poppins text-preto md:text-base text-xs">
                    {
                        type === "agendamento" ? (<div className="w-8 h-8 rounded-full bg-cinza-claro flex justify-center items-center"><LuCalendarClock size={"1.2rem"}/></div>) : (<div className="md:w-9 md:h-9 w-8 h-8 rounded-full bg-cinza-claro flex justify-center items-center"><LuTruck size={'1.1rem'} /></div>)
                    }
                    <p className="text-center">{quartoPasso}</p>
                </div>
                <div className="gap-2 md:flex hidden md:w-[25%] md:flex-col items-center font-poppins text-preto md:text-base text-xs">
                    {
                        type === "agendamento" ? (<div className="w-8 h-8 rounded-full bg-cinza-claro flex justify-center items-center">< LuClipboardList size={"1.2rem"}/></div>) : (<div className="md:w-9 md:h-9 w-8 h-8 rounded-full bg-cinza-claro flex justify-center items-center"><LuHome size={'1.1rem'} /></div>)
                    }
                    <p className="text-center">{quintoPasso}</p>
                </div>
            </div>
        </div>
    )
}

export default BarraProcessoAgendamento;
