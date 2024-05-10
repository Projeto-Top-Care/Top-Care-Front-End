
import duvidas from '@/banco/duvidas.json'
import { Duvida } from '@/types/duvidads'

export function buscarCategoria(categoria: string): Duvida[] {
    
    const categoriaEncontrada = duvidas.find(duvida => duvida.Categoria === categoria);

        // Verificar se a categoria foi encontrada
        if (categoriaEncontrada) {
            // Retornar o array de perguntas da categoria encontrada
            return categoriaEncontrada.Perguntas;
        } else {
            // Se a categoria não for encontrada, retornar um array vazio ou lançar uma exceção, dependendo do comportamento desejado
            return [];
        }

    // duvidas.filter((duvida) => {
    //     if(duvida.Categoria == categoria) {
    //         return duvida.Perguntas
    //     }
    // })
    
}