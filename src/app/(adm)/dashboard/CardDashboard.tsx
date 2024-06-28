import React from 'react'

interface CardDashboardProps{
    background: string
    titulo: string
    valor?: boolean
    variavel: number
}

export default function CardDashboard({background, titulo, variavel, valor}: CardDashboardProps) {

    return (
        <div className={`border border-preto w-full h-24 rounded-lg`}>
            <div className={`h-[25%] ${background} rounded-t-lg`}>

            </div>
            <div className='flex w-[90%] h-[75%] mx-auto justify-between items-center'>
                <p className='font-poppins text-lg'>{titulo}</p>
                <p className='font-averia font-extrabold text-2xl'>{valor ? `R$ ${variavel}` : variavel}</p>
            </div>

        </div>
    )
}
