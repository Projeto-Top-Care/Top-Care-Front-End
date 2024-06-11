export default function Loading() {
    return (
        <main className="bg-branco flex flex-col gap-2 justify-center items-center h-[70vh]">
            <img className="animate-spin w-fit" src="./assets/loading-dogg.svg"/>
            <p className="text-preto font-averia text-2xl font-bold">Carregando...</p>
        </main>
    )
}

