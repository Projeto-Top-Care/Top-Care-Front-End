import TituloLinha from '@/components/TituloLinha/TituloLinha'
import React from 'react'

export default function PaginaInicialApresentacao() {
    return (
        <main className='bg-branco w-full'>
            
            <section>
                <TituloLinha titulo='Novidades' />
            </section>
            
            <section className='flex md:flex-row flex-col md:mx-14 mx-2 p-6 gap-6 md:items-start items-center'>
                <div className='font-poppins text-sm text-preto'>
                    <p className='break-words'>O petshop e clínica veterinária Top Care irá ampliar suas vendas e serviços! A partir do dia XX/XX poderão ser feitas compras pelo nosso website e aplicativo mobile, além dos agendamentos que também foram simplificados.</p>
                    <p className='break-words'>Nas compras online, você pode escolher o endereço que quiser, resgatar cupons de descontos, além de aproveitar ofertas exclusivas do site.</p>
                </div>
                <div className='md:w-[47rem] w-auto '>
                    <img src='/assets/doguinho.png' />
                </div>
            </section>

            <section>
                <TituloLinha titulo='Conheça nossos serviços!' />
            </section>

            <section className='flex justify-center w-auto l pb-20 md:mx-14 p-6'>
                <div className='p-4 grid md:grid-cols-2 grid-cols-1 gap-2 gap-x-8 bg-terciaria rounded-xl'>
                    <div>
                        <h3 className='font-averia md:text-xl text-[1.2rem] font-bold text-preto'>Banhos</h3>
                        <p className='font-poppins text-sm text-preto'>Banhos que garantem aquele cheirinho bom no seu pet.</p>
                    </div>
                    <div>
                        <h3 className='font-averia md:text-xl text-[1.2rem] font-bold text-preto'>Consultas</h3>
                        <p className='font-poppins text-sm text-preto'>Os melhores profissionais pronto para te atender da melhor maneira.</p>
                    </div>
                    <div>
                        <h3 className='font-averia md:text-xl text-[1.2rem] font-bold text-preto'>Passeios</h3>
                        <p className='font-poppins text-sm text-preto'>Se sua semana foi cansativa, mas seu pet ainda tem energia, deixa que a gente passeia!</p>
                    </div>
                    <div>
                        <h3 className='font-averia md:text-xl text-[1.2rem] font-bold text-preto'>Vacinas</h3>
                        <p className='font-poppins text-sm text-preto'>A gente sabe que não dá pra deixar de fora, então deixa conosco!</p>
                    </div>
                    <div>
                        <h3 className='font-averia md:text-xl text-[1.2rem] font-bold text-preto'>Tosa</h3>
                        <p className='font-poppins text-sm text-preto'>Aquela aparada especial que dá o “tcham” no pelo!</p>
                    </div>
                    <div>
                        <h3 className='font-averia md:text-xl text-[1.2rem] font-bold text-preto'>Hospedagem</h3>
                        <p className='font-poppins text-sm text-preto'>Vai viajar? Nós cuidamos do seu pet para você aproveitar o passeio!</p>
                    </div>
                    <div>
                        <h3 className='font-averia md:text-xl text-[1.2rem] font-bold text-preto'>Adestramento</h3>
                        <p className='font-poppins text-sm text-preto'>Técnicas modernas e eficientes para tornar seu bichino educado.</p>
                    </div>
                    <div>
                        <h3 className='font-averia md:text-xl text-[1.2rem] font-bold text-preto'>Exames</h3>
                        <p className='font-poppins text-sm text-preto'>Não esqueça de ver a saúde do seu pet. Agende um horário para exames.</p>
                    </div>
                </div>
            </section>
            
        </main>
    )
}
