'use client' 
import BotaoGrande from '@/components/BotaoGrande/BotaoGrande';
import CadastroPet from '@/components/Pop-up/CadastroPet/CadastroPet';
import React, { useState } from 'react';

export default function EscolhaPet() {

    const [openPet, setOpenPet] = useState(false);

    return (
<<<<<<< HEAD
        <main className="p-8 mt-12 w-full flex flex-col items-center justify-center gap-12">
            <div className='flex items-center justify-center'>
                <p className='font-poppins text-preto font-medium text-xl text-center'>Para qual pet é o agendamento?</p>
            </div>
            <div>
                <div className='w-full'>
                    <p className='font-averia text-preto font-bold text-2xl'>Gostaria de cadastrar um pet?</p>
                    <p className='font-poppins text-preto text-lg mt-2 text-start md:w-[55%] w-full'>Clique no botão abaixo para cadastrar, depois continue os procedimentos para agendar um serviço para o seu mais novo pet :)</p>
                    <div className='md:flex flex-col md:flex-row justify-between mt-4'>
                        <div className='lg:w-[14%] md:w-[25%] w-full mt-4' onClick={() => setOpenPet(true)}>
                            <BotaoGrande title="Cadastrar" background='bg-terciaria' type={"button"} />
                        </div>
                        <div className='lg:w-[14%] md:w-[25%] w-full md:mt-4 mt-8'>
                            <BotaoGrande title="Próximo" background='bg-secundaria' type={"button"} />
                        </div>
                    </div>
                    {openPet && (
                        <div className='overflow-hidden'>
                            <div className='fixed top-0 left-0 w-full h-full z-50 bg-fundo-modal' onClick={() => setOpenPet(false)}></div>
                            <div className='fixed w-[60%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50'>
                                <CadastroPet setOpen={setOpenPet} />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
}
=======

        <div className='flex flex-row w-[90%] m-auto font-poppins'>
            <h1>escolha do pet</h1>
        </div>
    )
}
export default EscolhaPet;
>>>>>>> Feature/Pagina-Agendamento
