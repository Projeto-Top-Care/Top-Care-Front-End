import { LuMapPin } from "react-icons/lu";

interface ILoja{
    src: string,
    cidade: string,
    rua: string
}

const Lojas = ({src, cidade, rua}:ILoja) => {
    return (
        <div className="font-poppins flex flex-col gap-4 items-center">
            <img className="rounded-t-lg" src={src} />
            <div className="flex gap-2 justify-center">
                <div className="mt-2">
                    <LuMapPin size={25} color="#B5A6F3"/>
                </div>
                <div className="grid">
                    <p className="text-lg">Top Care {cidade}</p>
                    <p className="text-sm text-cinza-escuro">{rua}</p>
                </div>
            </div>
        </div>
    )
}
export default Lojas;