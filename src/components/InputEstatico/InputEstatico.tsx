import { ChangeEventHandler } from "react"

interface IInputEstatico {
    titulo?: string,
    info: string | number,
    type?: string
    edition: boolean
    error?: boolean
    onChange?: ChangeEventHandler<HTMLInputElement> | undefined
    message?: string
}

const InputEstatico = ({ titulo, info, type, edition, error, onChange, message }: IInputEstatico) => {
    return (
        <div className="font-poppins text-preto w-full">
            <p className={`md:text-base text-sm ${titulo != 'none' ? 'visible' : 'invisible'}`}>{titulo}</p>
            <div className="flex flex-col">
                <input className={`md:text-sm text-xs bg-branco p-3 rounded text-cinza-escuro w-full ${edition ? 'outline outline-2 outline-primaria' : 'pointer-events-none focus:outline-none'} ${error ? 'outline-error' : ''}`}
                    defaultValue={info}
                    type={type}
                    disabled={!edition}
                    onChange={onChange} />
                {
                    error && (
                        <span className="absolute mt-12 font-poppins text-sm text-error">{message}</span>
                    )
                }
            </div>
        </div>
    )
}
export default InputEstatico;