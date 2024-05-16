import { ProdutoCompleto } from "@/types/produto"

export const filtrarAnimais = (produtos: ProdutoCompleto[]) => {
    const animais = produtos.map((produto) => {
        return produto.especificacoes[2].resposta
    })

    const animaisFiltrados = animais.filter((valor, i, self) => {
        return self.indexOf(valor) == i && !valor.includes(' e ')
    })

    const quantidades: number[] = animaisFiltrados.map((animal) => {
        let quantidade: number = 0;
        animais.forEach((animal1) => {
            if (animal1.includes(animal)) {
                quantidade++
            }
        })
        return quantidade!;
    })
    return animaisFiltrados.map((animal, i) => {
        return animal + `(${quantidades[i]})`
    });
}

export const filtrarPrecos = (produtos: ProdutoCompleto[]) => {
    const arrayPrecos = [50, 100, 200, 300, 300]
    const arrayPrecosString = ['R$0,00 - R$50,00', 'R$50,00 - R$100,00', 'R$100,00 - R$200,00', 'R$200,00 - R$300,00', '+ R$300,00'];

    const quantidades = arrayPrecos.map((preco, i) => {
        let quantidade = 0
        produtos.forEach((produto, index) => {
            const precoProduto = produto.precoNovo;
            if (i == 0) {
                (precoProduto <= preco && precoProduto > 0 ? quantidade++ : '')
            } else if (i == 4) {
                (precoProduto > preco ? quantidade++ : '')
            } else {
                (precoProduto <= preco && precoProduto > arrayPrecos[i - 1] ? quantidade++ : '')
            }
        })
        return quantidade;
    })
    return arrayPrecosString.map((preco, i) => {
        return (quantidades[i] > 0 ? preco + `(${quantidades[i]})` : '')
    }).filter((filtro) => {
        return filtro != ''
    })
}

export const filtrarMarcas = (produtos: ProdutoCompleto[]) => {
    const marcas = produtos.map((produto) => {
        return produto.marca
    })

    const marcasFiltrados = marcas.filter((valor, i, self) => {
        return self.indexOf(valor) == i
    })

    const quantidades: number[] = marcasFiltrados.map((marca) => {
        let quantidade: number = 0;
        marcas.forEach((marca1) => {
            if (marca1.includes(marca)) {
                quantidade++
            }
        })
        return quantidade!;
    })
    return marcasFiltrados.map((animal, i) => {
        return animal + `(${quantidades[i]})`
    });
}

export const filtrarPorte = (produtos: ProdutoCompleto[]) => {
    const portes = produtos.map((produto) => {
        return produto.especificacoes[1].resposta
    })
    const portesPadrao = ['Pequeno', 'Médio', "Grande"];

    const quantidades: number[] = portesPadrao.map((porte) => {
        let quantidade: number = 0;
        portes.forEach((porte1) => {
            if (porte1.includes(porte) || porte1.includes('Todos')) {
                quantidade++
            }
        })
        return quantidade!;
    })

    return portesPadrao.map((porte, i) => {
        return (quantidades[i] > 0 ? porte + `(${quantidades[i]})` : '')
    }).filter((filtrado) => {
        return filtrado != ''
    })
}
export const filtrarTamanhos = (produtos: ProdutoCompleto[]) => {
    const tamanhos = produtos.map((produto) => {
        return produto.tamanho
    })
    const tamanhoPadrao = ["PP", "P", "M", "G", "Único"]

    const quantidades: number[] = tamanhoPadrao.map((tamanho) => {
        let quantidade: number = 0;
        tamanhos.forEach((tamanho1) => {
            if (tamanho1.includes(tamanho)) {
                quantidade++
            }
        })
        return quantidade!;
    })
    return tamanhoPadrao.map((tamanho, i) => {
        return (quantidades[i] > 0 ? tamanho + `(${quantidades[i]})` : '')
    }).filter((filtrado) => {
        return filtrado != ''
    })

}

let produtos: ProdutoCompleto[] = []
let produtosFiltrados: ProdutoCompleto[] = []
let titulo: string = ''

export function setLabel(label1: string){
    titulo = label1
}
export function getLabel(){
    return titulo
}

export function definirProdutos(produtosMostrados: ProdutoCompleto[]){
    produtos = produtosMostrados
}

export function definirProdutosFiltrados(produtosMostrados: ProdutoCompleto[]){
    produtosFiltrados = produtosMostrados
}

export function returnProdutos(){
    return (produtosFiltrados.length == 0 ? produtos : produtosFiltrados)
}


export function aplicarFiltros(label: string, titulo: string) {
    setLabel(titulo)
    let produtosMostrados: ProdutoCompleto[] = [...produtosFiltrados];

    produtos.forEach((produto) => {
        if (produto.especificacoes[2].resposta.includes(label)) {
            produtosMostrados.push(produto)
        }
    })

    return produtosMostrados.filter((valor, index, self) => {
        return self.indexOf(valor) === index;
    });
}

export function tirarFiltros(label: string, titulo: string) {
    setLabel(titulo)
    let produtosMostrados: ProdutoCompleto[] = [...produtosFiltrados];

    produtosMostrados = produtosMostrados.filter((produto)=>{
        return !(produto.especificacoes[2].resposta.includes(label) && !produto.especificacoes[2].resposta.includes(" e "))
    })
    const filtrados = produtosMostrados.filter((valor, index, self) => {
        return self.indexOf(valor) === index;
    });

    return (verficarLista(filtrados) ? produtos : filtrados)
}

export function verficarLista(filtrados: ProdutoCompleto[]){
    const verificacao = filtrados.filter((produto)=>{
        return !(produto.especificacoes[2].resposta.includes(" e "))
    })

    return verificacao.length == 0
}