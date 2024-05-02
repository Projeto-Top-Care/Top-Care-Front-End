{/* <section className="flex justify-center items-center">
<img className="animate-spin" src="./assets/loading-dogg.svg"/>
</section> */}

export default function Loading() {
    return (
        <main className="bg-branco flex flex-col justify-center items-center">
            <img className="animate-spin" src="./assets/loading-dogg.svg"/>
            <p className="text-preto font-averia text-2xl font-bold">Carregando...</p>
        </main>
    )
}

