export default function HeaderDeslogado() {
    return (
        <div className="bg-primaria px-20 py-3 flex flex-row font-poppins justify-between items-center text-preto">
        <div className='w-[25%]'>
            <img className="w-[25%]" src="assets/logo.png"/>
        </div>

        <div className="flex flex-row  w-[50%] justify-between">
            <a className="hover:underline text-sm" href="#">Produtos</a>
            <a className="hover:underline text-sm" href="#">Serviços</a>
            <a className="hover:underline text-sm" href="#">Lojas</a>
            <a className="hover:underline text-sm" href="#">Pets</a>
            <a className="hover:underline text-sm" href="#">Planos</a>
            <a className="hover:underline text-sm" href="#">Ajuda</a>
        </div>


        <div className='flex flex-row gap-6 items-center w-[25%] justify-end'>
            <button className='bg-terciaria rounded-lg w-[112px] py-[5px] px-2'>Login</button>
            <button className='bg-terciaria rounded-lg w-[112px] py-[5px] px-2'>Cadastro</button>   
        </div>
    </div>
    )
}