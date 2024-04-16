'use client'

export default function HeaderApresentacao() {
    return (
        <div className="bg-primaria md:px-20 px-10 md:py-3 py-2 flex flex-row font-poppins justify-between items-center text-preto">
            <div className=''>
                <img className="md:w-[64px] w-[40px] transition duration-200" src="assets/logo.png"/>
            </div>

            <div className="flex flex-row md:gap-24 gap-4 justify-center w-full">
                <a className="hover:underline md:text-sm text-xs" href="#">Contato</a>
                <a className="hover:underline md:text-sm text-xs" href="#">Lojas</a>
            </div>
        </div>
    )
}