import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPaw, faBars, faLocationDot, faCalendar, faClipboardCheck } from "@fortawesome/free-solid-svg-icons"
import { IoIosMenu, IoIosPin  } from "react-icons/io";
import { LuCalendarClock } from "react-icons/lu";
import { PiNotepad, PiPawPrintBold  } from "react-icons/pi";

const ProcessoAgendamento = () => {
    return (
        <div className="font-poppins  items-center text-center gap-20">

                <div className="flex text-lg space-x-40 text-preto" >
                    <div className="bg-cinza-claro rounded-full p-1.5">
                        <PiPawPrintBold/>  
                    </div>
                    <div className="bg-cinza-claro rounded-full p-1.5">
                        <IoIosMenu/>
                    </div>
                    <div className="bg-cinza-claro rounded-full p-1.5">
                        <IoIosPin/>
                    </div>
                    <div className="bg-cinza-claro rounded-full p-1.5">
                        <LuCalendarClock/>
                    </div>
                    <div className="bg-cinza-claro rounded-full p-1.5">
                        <PiNotepad/>
                    </div>
                </div>
            <div className="border-t-2 w-full border-cinza-claro"></div>
            <div className="flex text-sm space-x-12">
                <p className="">Selecione Pet</p>
                <p className="">Selecione o serviço</p>
                <p className="">Selecione o local</p>
                <p className="break-world">Selecione a data, a <br/>hora e o profissional</p>
                <p className="">Resumo final</p>
            </div>
        </div>
    )
}
export default ProcessoAgendamento;