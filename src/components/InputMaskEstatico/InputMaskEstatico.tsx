import { InputMask, MaskEventHandler, Replacement } from '@react-input/mask';

interface IInputEstatico {
    titulo?: string,
    info: string | number,
    type?: string
    edition: boolean
    mask?: string
    replacement?: string | Replacement
    onMasks?: MaskEventHandler | undefined
    error?: boolean
    message?: string
}

const InputMaskEstatico = ({ titulo, info, type, edition, mask, replacement, onMasks, error, message }: IInputEstatico) => {
    return (
        <div className="font-poppins text-preto w-full">
            <p className={`md:text-base text-sm ${titulo != 'none' ? 'visible' : 'invisible'}`}>{titulo}</p>
            <div className='flex flex-col'>
                <InputMask className={`md:text-sm text-xs bg-branco p-3 rounded text-cinza-escuro w-full ${edition ? 'outline outline-2 outline-primaria' : 'pointer-events-none focus:outline-none'} ${error ? 'outline-error' : ''}`}
                    defaultValue={info}
                    type={type}
                    disabled={!edition}
                    mask={mask}
                    replacement={replacement}
                    onMask={onMasks} />
                {
                    error && (
                        <span className="absolute mt-12 font-poppins text-sm text-error">{message}</span>
                    )
                }
            </div>
        </div>
    )
}
export default InputMaskEstatico;