import CardAgendamentos from "../CardAgendamentos/cardAgendamentos";

interface IAgendamentos {

}

const calendarioAgendamento = ({ }: IAgendamentos) => {
    return (
        <div className="font-poppins around mt-9 mb-9">
            <div className="flex border border-cinza flex-nowrap overflow-x-auto text-center rounded-lg w-[960px] h-[492px]">
                <div className="mt-8 mb-4 basis-1/5">
                    <a>Consulta</a>
                </div>
                <div className="mt-8 mb-4 basis-1/5 border-x border-cinza h-full ">
                    <a>Adestramento</a>
                    <CardAgendamentos loja={"Top Care Gramado - RS"} horario={"8:30 - 9:30"} nomeProfissional={"Dr. Victor Micheluzzi"} nomePet={"Nina"} nomeCliente={"Kristian Erdmann"} />
                </div>
                <div className="mt-8 mb-4 basis-1/5">
                    <a>Banho e Tosa</a>
                </div>
                <div className="mt-8  basis-1/5 border-x border-cinza h-full ">
                    <a>Banho</a>
                    <CardAgendamentos loja={"Top Care Gramado - RS"} horario={"8:30 - 9:30"} nomeProfissional={"Dr. Victor Micheluzzi"} nomePet={"Nina"} nomeCliente={"Kristian Erdmann"} />
                    <CardAgendamentos loja={"Top Care Gramado - RS"} horario={"8:30 - 9:30"} nomeProfissional={"Dr. Victor Micheluzzi"} nomePet={"Nina"} nomeCliente={"Kristian Erdmann"} />
                    <CardAgendamentos loja={"Top Care Gramado - RS"} horario={"8:30 - 9:30"} nomeProfissional={"Dr. Victor Micheluzzi"} nomePet={"Nina"} nomeCliente={"Kristian Erdmann"} />
                    <CardAgendamentos loja={"Top Care Gramado - RS"} horario={"8:30 - 9:30"} nomeProfissional={"Dr. Victor Micheluzzi"} nomePet={"Nina"} nomeCliente={"Kristian Erdmann"} />
                    <CardAgendamentos loja={"Top Care Gramado - RS"} horario={"8:30 - 9:30"} nomeProfissional={"Dr. Victor Micheluzzi"} nomePet={"Nina"} nomeCliente={"Kristian Erdmann"} />
                </div>
                <div className="mt-8 mb-4 basis-1/5">
                    <a>Vacina</a>
                </div>
            </div>
        </div>
    )
}

export default calendarioAgendamento;