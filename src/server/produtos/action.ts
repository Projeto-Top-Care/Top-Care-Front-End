
import produtos from '@/banco/produtos.json'

export function buscarProduto(id: number) {
    let produtoEncontrado;
    produtos.forEach((produto)=>{
        if(produto.id == id){
            produtoEncontrado = produto;
        }
    })
    return produtoEncontrado
}