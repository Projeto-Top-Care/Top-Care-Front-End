import React from 'react'

interface CardVisualizacao {
    servico: string
    data: string
    horario: string
    fotoPet: string
    nomePet: string
    animal: string
    raca: string
    porte: string
}

export default function CardVisualizacao({ servico, data, horario, fotoPet, nomePet, animal, raca, porte }: CardVisualizacao) {

    const dataNova = data; 
    const [ano, mes, dia] = dataNova.split("-"); 
    const dataFormatada = `${dia}/${mes}/${ano.substring(2)}`; 


    return (
        <div className='flex flex-col justify-center  font-poppins text-preto w-full'>
            <div className='border border-preto bg-terciaria rounded-t-lg w-full p-4 flex justify-between items-center'>
                <div>
                    <p className='md:text-lg text-sm'>{servico}</p>
                </div>
                <div className='border border-primaria rounded-md bg-primaria p-0.5 flex items-center justify-center'>
                    <p className='md:text-base text-xs'>{dataFormatada}, {horario.substring(0, 5)}</p>
                </div>
            </div>
            <div className='border rounded-b-lg border-preto border-t-transparent w-full p-4 flex justify-between items-center'>
                <div className='flex gap-4'>
                    <div className='w-12'>
                        <img className='rounded-full' src={fotoPet} />
                    </div>
                    <div>
                        <p className='md:text-lg text-sm'>{nomePet}</p>
                        <p className='md:text-base text-xs text-left'>{animal} | {raca} | {porte}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
