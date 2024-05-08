import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'

interface Ordenar {
    ordem: Dispatch<SetStateAction<number>>
}

export default function OrdenarPor({ ordem }: Ordenar) {
    const [escolha, setEscolha] = useState<number>(0);

    useEffect(() => {
        ordem(escolha);
    }, [escolha])

    return (
        <div className='flex flex-col gap-1.5 border border-cinza rounded-lg pl-1.5 py-1.5 bg-branco animate-grow-up font-poppins w-full text-xs'>
            <p className='hover:underline' onClick={()=>setEscolha(0)}>Mais Relevantes</p>
            <p className='hover:underline' onClick={()=>setEscolha(1)}>Mais Populares</p>
            <p className='hover:underline' onClick={()=>setEscolha(2)}>Menor Preço</p>
            <p className='hover:underline' onClick={()=>setEscolha(3)}>Maior Preço</p>
            <p className='hover:underline' onClick={()=>setEscolha(4)}>Mais Bem Avaliados</p>
        </div>
    )
}
