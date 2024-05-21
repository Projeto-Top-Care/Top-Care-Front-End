
import racas from '@/banco/racas.json'

export function buscarRaca(id:number){
    let racaEncontrada;
    racas.forEach((raca) => {
        if(raca.id == id) {
            racaEncontrada = raca
        }
    })
    return racaEncontrada
}
export function buscarTipo(tipo:string) {
    racas.map((item, i) => {
        if (item.tipo == tipo) {
            return item
        }
    })
}