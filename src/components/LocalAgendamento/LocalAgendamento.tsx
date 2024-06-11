interface ILocalAgendamento {
    nomeFilial: string,
    rua: string,
    isSelected?: boolean;
    onSelect?: () => void;
}

const LocalAgendamento = ({ nomeFilial, rua, isSelected, onSelect }: ILocalAgendamento) => {
    return (
        <div
            onClick={onSelect}
            className={`flex items-center justify-start p-5 rounded-lg font-poppins border-2 mb-12 border-cinza-claro lg:w-[25%] mt-12 cursor-pointer ${
                isSelected ? '' : 'bg-transparent opacity-50'
            }`}
            style={{ borderColor: isSelected ? '#6954C0' : '#BDBDBD' }}>
            <div className="flex ml-2 items-center gap-4 ">
                <div className=" flex flex-col">
                    <p className=" text-lg text-preto">Top Care {nomeFilial}</p>
                    <p className="text-sm text-cinza-escuro">Rua {rua}</p>
                </div>
            </div>
        </div>
    )
}

export default LocalAgendamento;