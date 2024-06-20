import CardAgendamentos from "../CardAgendamentos/cardAgendamentos";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";


interface IAgendamentos {

}

const calendarioAgendamento = ({ }: IAgendamentos) => {
    return (
        <div className="font-poppins around w-[960px]">
            <div className="flex justify-center text-preto">
                <button><FaAngleLeft /></button>
                <div className="mt-0.5 ml-4"><MdOutlineCalendarMonth /></div>
                <p className="font-medium mr-4">19/06/2024</p>
                <button><FaAngleRight /></button>
            </div>
            <div className="flex border border-cinza flex-nowrap overflow-x-auto text-center rounded-lg h-[492px]">
                <div className="mt-8 mb-4 basis-1/5">
                    <p>Consulta</p>
                </div>
                <div className="mt-8 mb-4 basis-1/5">
                    <p>Adestramento</p>
                </div>
                <div className="mt-8 mb-4 basis-1/5">                        
                    <p>Banho e Tosa</p>
                    <CardAgendamentos loja={"Top Care Gramado - RS"} horario={"8:30 - 9:30"} nomeProfissional={"Dr. Victor Micheluzzi"} nomePet={"Nina"} nomeCliente={"Kristian Erdmann"} />
                    <CardAgendamentos loja={"Top Care Gramado - RS"} horario={"8:30 - 9:30"} nomeProfissional={"Dr. Victor Micheluzzi"} nomePet={"Nina"} nomeCliente={"Kristian Erdmann"} />
                </div>
                <div className="mt-8 mb-4 basis-1/5">
                    <p>Banho</p>
                </div>
                <div className="mt-8 mb-4 basis-1/5">
                    <p>Vacina</p>
                    
                </div>
            </div>
        </div>
    )
}

export default calendarioAgendamento;