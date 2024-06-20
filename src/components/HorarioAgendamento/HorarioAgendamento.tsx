interface IHorarioAgendamento {
    horario: string,
    isSelected?: boolean;
    onSelect?: () => void;

}

const HorarioAgendamento = ({ horario, isSelected, onSelect }: IHorarioAgendamento) => {
    return (
        <div
            onClick={onSelect}
            className={`text-preto w-full border py-2 px-6 rounded-lg text-center font-poppins flex justify-center cursor-pointer ${isSelected ? '' : 'bg-transparent opacity-50'
                }`}
            style={{ borderColor: isSelected ? '#6954C0' : '#BDBDBD' }}>
            <p>{horario}</p>
        </div>
    )
}

export default HorarioAgendamento;