'use client'

export default function HeaderApresentacao() {
    return (
        <div className="bg-primaria md:px-20 px-10 md:py-3 py-2 flex flex-row font-poppins justify-between items-center text-preto">
            <div className=''>
            <a id="div_link" href="./paginaInicialApresentacao"><img className="md:w-[64px] w-[40px] transition duration-200" src="assets/logo.png"/></a>
            </div>

            <div className="flex flex-row md:gap-24 gap-4 justify-center w-full font-poppins">
                <a className="hover:underline md:text-sm text-xs" href="./contato">Contato</a>
                <a className="hover:underline md:text-sm text-xs" href="./lojas">Lojas</a>
                <a className="hover:underline md:text-sm text-xs" href="./lojas">Sobre nós</a>
            </div>
        </div>
    )
}