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
            className={`flex items-center justify-start md:p-5 p-4 rounded-lg font-poppins border-2 border-cinza-claro lg:w-[25%] w-full cursor-pointer ${
                isSelected ? '' : 'bg-transparent opacity-50'
            }`}
            style={{ borderColor: isSelected ? '#6954C0' : '#BDBDBD' }}>
            <div className="flex ml-2 items-center gap-4 ">
                <div className="flex flex-col">
                    <p className="md:text-lg text-sm text-preto">Top Care {nomeFilial}</p>
                    <p className="md:text-sm text-xs text-cinza-escuro">Rua {rua}</p>
                </div>
            </div>
        </div>
    )
}

export default LocalAgendamento;