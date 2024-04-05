import React from 'react'
interface ICardProduto{
    descricao: string,
    cor: string
}
function CardLegenda({descricao, cor}: ICardProduto) {
    return (
        <div className='flex justify-center items-center'>
            <div className={`w-8 h-8 bg-${cor}`}></div>
            <p className='ml-2'>{descricao}</p>
        </div>
    )
}

export default CardLegenda