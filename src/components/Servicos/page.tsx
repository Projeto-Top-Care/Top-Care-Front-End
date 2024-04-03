const Servicos = () => {
    return (
        <div className="flex p-8 rounded-lg font-poppins bg-terciaria w-[75%]">
            <div className="flex-auto w-[40%]">
                <p className="mb-[5%] text-2xl font-bold">Você sabia?</p>
                <p className="break-normal mr-[8%]">Nós da Top care também trabalhamos com serviços exclusivos e cuidamos do seu pet com todo o amor e carinho. Agende já uma consulta com a gente para seu pet ter os tratamentos que ele merece!</p>
                <button className="bg-primaria w-[30%] rounded-lg p-[1%] mt-[5%]">Agende</button>
            </div>
                <img src="./assets/cachorro_serviços.png" className="w-[41%]"/>
        </div>
    )
}

export default Servicos;