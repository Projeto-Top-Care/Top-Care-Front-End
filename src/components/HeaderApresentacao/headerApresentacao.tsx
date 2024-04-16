'use client'

export default function HeaderApresentacao() {
    return (
        <div className="bg-primaria px-20 py-3 flex flex-row font-poppins items-center text-preto">
        <div className='w-[25%]'>
            <img className="w-[25%]" src="assets/logo.png"/>
        </div>

        <div className="flex w-[50%] flex-row gap-24 justify-center">
            <a className="hover:underline text-sm" href="#">Contato</a>
            <a className="hover:underline text-sm" href="#">Lojas</a>
        </div>
    </div>
    )
}