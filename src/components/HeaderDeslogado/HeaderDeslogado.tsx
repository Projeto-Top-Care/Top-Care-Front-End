'use client'
import { useRouter } from "next/navigation"

export default function HeaderDeslogado() {
    const {push} = useRouter();
    return (
        <div className="bg-primaria md:px-20 px-10 md:py-3 py-2 flex flex-row font-poppins justify-between items-center text-preto">
        <div className=''>
            <img className="md:w-[64px] w-[40px]" src="assets/logo.png"/>
        </div>

        <div className="flex flex-row justify-between md:gap-12 gap-2">
            <a className="hover:underline md:text-sm text-[0.78rem]" href="#">Produtos</a>
            <a className="hover:underline md:text-sm text-[0.78rem]" href="#">Serviços</a>
            <a className="hover:underline md:text-sm text-[0.78rem]" href="#">Lojas</a>
            <a className="hover:underline md:text-sm text-[0.78rem]" href="#">Pets</a>
            <a className="hover:underline md:text-sm text-[0.78rem]" href="#">Planos</a>
            <a className="hover:underline md:text-sm text-[0.78rem]" href="#">Ajuda</a>
        </div>


        <div className='flex flex-row gap-6 items-center justify-end'>
            <button className='bg-terciaria rounded-lg w-[112px] py-[5px] px-2 transition ease-in-out delay-150 duration-200 hover:bg-[#c4d5f3]' onClick={()=>push('login')}>
                Login
            </button>
            <button className='bg-terciaria rounded-lg w-[112px] py-[5px] px-2 transition ease-in-out delay-150 duration-200 hover:bg-[#c4d5f3]' onClick={()=>push('cadastro')}>
                Cadastro
            </button>   
        </div>
    </div>
    )
}