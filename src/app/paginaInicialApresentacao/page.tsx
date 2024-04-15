import BotaoGrande from '@/components/BotaoGrande/BotaoGrande'
import InputText from '@/components/InputText/InputText'
import TituloLinha from '@/components/TituloLinha/TituloLinha'
import React from 'react'

export default function PaginaInicialApresentacao() {
    return (
        <main className='bg-branco flex flex-col justify-center'>
            <section>
                <TituloLinha titulo='Novidades' />
            </section>
            
            <section className='flex flex-row mx-14 p-6 gap-6'>
                <div className='font-poppins text-sm text-preto w-[70%] flex flex-col gap-4'>
                    <p>O petshop e clínica veterinária Top Care irá ampliar suas vendas e serviços! A partir do dia XX/XX poderão ser feitas compras pelo nosso website e aplicativo mobile, além dos agendamentos que também foram simplificados.</p>
                    <p>Nas compras online, você pode escolher o endereço que quiser, resgatar cupons de descontos, além de aproveitar ofertas exclusivas do site.</p>
                </div>
                <div className='w-[30%]'>
                    <img src='/assets/doguinho.png' />
                </div>
            </section>

            <section>
                <TituloLinha titulo='Conheça nossos serviços!' />
            </section>

            <section className='flex justify-center pb-20'>
                <div className='mx-14 p-6 grid grid-cols-2 gap-2 gap-x-8 bg-terciaria rounded-xl w-[80%]'>
                    <div>
                        <h3 className='font-averia text-2xl font-bold text-preto'>Banhos</h3>
                        <p className='font-poppins text-sm text-preto'>Banhos que garantem aquele cheirinho bom no seu pet.</p>
                    </div>
                    <div>
                        <h3 className='font-averia text-2xl font-bold text-preto'>Consultas</h3>
                        <p className='font-poppins text-sm text-preto'>Os melhores profissionais pronto para te atender da melhor maneira.</p>
                    </div>
                    <div>
                        <h3 className='font-averia text-2xl font-bold text-preto'>Passeios</h3>
                        <p className='font-poppins text-sm text-preto'>Se sua semana foi cansativa, mas seu pet ainda tem energia, deixa que a gente passeia!</p>
                    </div>
                    <div>
                        <h3 className='font-averia text-2xl font-bold text-preto'>Vacinas</h3>
                        <p className='font-poppins text-sm text-preto'>A gente sabe que não dá pra deixar de fora, então deixa conosco!</p>
                    </div>
                    <div>
                        <h3 className='font-averia text-2xl font-bold text-preto'>Tosa</h3>
                        <p className='font-poppins text-sm text-preto'>Aquela aparada especial que dá o “tcham” no pelo!</p>
                    </div>
                    <div>
                        <h3 className='font-averia text-2xl font-bold text-preto'>Hospedagem</h3>
                        <p className='font-poppins text-sm text-preto'>Vai viajar? Nós cuidamos do seu pet para você aproveitar o passeio!</p>
                    </div>
                    <div>
                        <h3 className='font-averia text-2xl font-bold text-preto'>Adestramento</h3>
                        <p className='font-poppins text-sm text-preto'>Técnicas modernas e eficientes para tornar seu bichino educado.</p>
                    </div>
                    <div>
                        <h3 className='font-averia text-2xl font-bold text-preto'>Exames</h3>
                        <p className='font-poppins text-sm text-preto'>Não esqueça de ver a saúde do seu pet. Agende um horário para exames.</p>
                    </div>
                </div>
            </section>
            
        </main>
    )
}
