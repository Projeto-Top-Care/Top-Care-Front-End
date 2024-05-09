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
    
    const quantidades = arrayPrecos.map((preco, i)=>{
        let quantidade = 0
        produtos.forEach((produto,index)=>{
            const precoProduto = produto.precoNovo;
            if(i == 0){
                (precoProduto <= preco && precoProduto > 0 ? quantidade++ : '')
            }else if(i == 4){
                (precoProduto > preco ? quantidade++ : '')
            }else{
                (precoProduto <= preco && precoProduto > arrayPrecos[i-1] ? quantidade++ : '')
            }
        })
        return quantidade;
    })
    return arrayPrecosString.map((preco, i)=>{
        return preco + `(${quantidades[i]})`
    })
}

export const filtrarMarcas = (produtos: ProdutoCompleto[]) =>{
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

export const filtrarPorte = (produtos: ProdutoCompleto[]) =>{
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

    return portesPadrao.map((porte, i)=>{
        return porte + `(${quantidades[i]})`
    })
}
export const filtrarTamanhos = (produtos: ProdutoCompleto[]) =>{
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
    return tamanhoPadrao.map((tamanho, i)=>{
        return tamanho + `(${quantidades[i]})`
    })

}